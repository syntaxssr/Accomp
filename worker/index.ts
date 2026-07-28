import {
  DEFAULT_DEVICE_SIZES,
  DEFAULT_IMAGE_SIZES,
  handleImageOptimization,
} from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";
import {
  getLocaleFromPathname,
  LOCALE_HEADER,
} from "../lib/i18n/config";
import { withSecurityHeaders } from "./security-headers";

interface AssetFetcher {
  fetch(request: Request): Promise<Response>;
}

interface Env {
  ASSETS: AssetFetcher;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: {
          format: string;
          quality: number;
        }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const worker = {
  async fetch(
    request: Request,
    env: Env,
    context: ExecutionContext,
  ): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];

      return withSecurityHeaders(
        await handleImageOptimization(
          request,
          {
            fetchAsset: (path) =>
              env.ASSETS.fetch(new Request(new URL(path, request.url))),
            transformImage: async (body, { width, format, quality }) => {
              const image = await env.IMAGES.input(body)
                .transform(width > 0 ? { width } : {})
                .output({ format, quality });

              return image.response();
            },
          },
          allowedWidths,
        ),
        url,
      );
    }

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set(LOCALE_HEADER, getLocaleFromPathname(url.pathname));
    const localizedRequest = new Request(request, {
      headers: requestHeaders,
    });

    return withSecurityHeaders(
      await handler.fetch(localizedRequest, env, context),
      url,
    );
  },
};

export default worker;
