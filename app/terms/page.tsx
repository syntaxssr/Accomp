/* eslint-disable @next/next/no-html-link-for-pages -- This status page remains usable without client navigation JavaScript. */
import type { Metadata } from "next";
import { Icon } from "@/components";
import styles from "../legal-pages.module.css";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Current preview terms and product-status notice for the Accomp marketing website.",
  alternates: {
    canonical: "/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <article className={styles.shell}>
        <a className={styles.brand} href="/">
          <Icon name="pine" size="md" decorative />
          <span>Accomp</span>
        </a>

        <header className={styles.header}>
          <p className={styles.eyebrow}>Preview terms</p>
          <h1 className={styles.title}>A clear pre-launch status.</h1>
          <p className={styles.lede}>
            These terms explain the limited role of the current Accomp marketing
            preview.
          </p>
        </header>

        <div className={styles.notice}>
          <strong>Not a service agreement</strong>
          The Accomp app has not launched, so this page does not create an app
          account, subscription, purchase, or service relationship.
        </div>

        <div className={styles.content}>
          <section>
            <h2>Website purpose</h2>
            <p>
              This website introduces the Accomp mobile app concept and its
              intended direction. It is informational and does not currently
              provide the app itself.
            </p>
          </section>

          <section>
            <h2>Illustrative content</h2>
            <p>
              App interfaces, trip information, readiness states, maps, and
              dates shown on the site are illustrative. Product capabilities,
              platforms, pricing, and launch timing remain subject to
              confirmation.
            </p>
          </section>

          <section>
            <h2>No submissions or transactions</h2>
            <p>
              The waitlist control is disabled. The website does not accept
              personal information, payments, bookings, or user-generated
              content.
            </p>
          </section>

          <section>
            <h2>Release requirement</h2>
            <p>
              Final terms, a verified legal entity, and a public contact must be
              approved before Accomp offers a live service or accepts a
              registration.
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
