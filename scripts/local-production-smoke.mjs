import { spawn } from "node:child_process";
import { smokeSite, waitForHealth } from "./site-smoke.mjs";

const port = Number.parseInt(process.env.ACCOMP_SMOKE_PORT ?? "4174", 10);

if (!Number.isInteger(port) || port < 1024 || port > 65_535) {
  throw new Error("ACCOMP_SMOKE_PORT must be an available user port.");
}

const origin = `http://127.0.0.1:${port}`;
const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";
const server = spawn(npmCommand, ["run", "start", "--", "--port", `${port}`], {
  cwd: process.cwd(),
  detached: process.platform !== "win32",
  env: process.env,
  stdio: ["ignore", "pipe", "pipe"],
});
let serverOutput = "";
let stopping = false;

const startupFailure = new Promise((_, reject) => {
  server.once("error", reject);
  server.once("exit", (code, signal) => {
    if (!stopping) {
      reject(
        new Error(
          `Production server exited before smoke testing (code ${code ?? "none"}, signal ${signal ?? "none"}).`,
        ),
      );
    }
  });
});

for (const stream of [server.stdout, server.stderr]) {
  stream.setEncoding("utf8");
  stream.on("data", (chunk) => {
    serverOutput = `${serverOutput}${chunk}`.slice(-12_000);
  });
}

function signalServer(signal) {
  if (!server.pid) {
    return;
  }

  try {
    if (process.platform === "win32") {
      server.kill(signal);
    } else {
      process.kill(-server.pid, signal);
    }
  } catch (error) {
    if (error.code !== "ESRCH") {
      throw error;
    }
  }
}

async function stopServer() {
  if (server.exitCode !== null) {
    return;
  }

  stopping = true;
  signalServer("SIGTERM");

  await Promise.race([
    new Promise((resolve) => server.once("exit", resolve)),
    new Promise((resolve) => setTimeout(resolve, 2_000)),
  ]);

  if (server.exitCode === null) {
    signalServer("SIGKILL");
  }
}

try {
  await Promise.race([waitForHealth(origin), startupFailure]);
  const result = await smokeSite(origin);

  console.log(
    `Local production smoke passed: ${result.routes} routes checked on ${origin}.`,
  );
} catch (error) {
  console.error(serverOutput);
  throw error;
} finally {
  await stopServer();
}
