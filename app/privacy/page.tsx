/* eslint-disable @next/next/no-html-link-for-pages -- This status page remains usable without client navigation JavaScript. */
import type { Metadata } from "next";
import { Icon } from "@/components";
import styles from "../legal-pages.module.css";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Current privacy and data-handling status for the Accomp marketing website.",
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <article className={styles.shell}>
        <a className={styles.brand} href="/">
          <Icon name="pine" size="md" decorative />
          <span>Accomp</span>
        </a>

        <header className={styles.header}>
          <p className={styles.eyebrow}>Site notice</p>
          <h1 className={styles.title}>Privacy at Accomp.</h1>
          <p className={styles.lede}>
            This page records how the pre-launch marketing website currently
            handles information.
          </p>
        </header>

        <div className={styles.notice}>
          <strong>Pre-launch status</strong>
          This is an operational privacy notice for the current preview, not the
          final policy for the Accomp mobile app.
        </div>

        <div className={styles.content}>
          <section>
            <h2>Information collection</h2>
            <p>
              The current website does not accept waitlist submissions, create
              accounts, process purchases, or ask visitors to provide personal
              information.
            </p>
          </section>

          <section>
            <h2>Analytics and cookies</h2>
            <p>
              Accomp has not enabled analytics, advertising trackers, or
              application cookies on this website. Because there are no
              optional cookies, no consent banner is shown.
            </p>
          </section>

          <section>
            <h2>Future changes</h2>
            <p>
              Before any form, analytics service, or optional cookie is
              activated, this notice will be replaced with an approved privacy
              policy and an appropriate consent experience.
            </p>
          </section>

          <section>
            <h2>Contact readiness</h2>
            <p>
              A verified legal entity and public privacy contact have not been
              supplied yet. Both remain release requirements before personal
              information can be collected.
            </p>
          </section>

          <p className={styles.meta}>
            Status reviewed: <time dateTime="2026-07-28">28 July 2026</time>
          </p>

          <a className={styles.homeLink} href="/">
            Return to Accomp
          </a>
        </div>
      </article>
    </main>
  );
}
