/* eslint-disable @next/next/no-html-link-for-pages -- The recovery route remains usable without client navigation JavaScript. */
import type { Metadata } from "next";
import { Icon } from "@/components";
import styles from "./legal-pages.module.css";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <title>Page not found · Accomp</title>
      <main className={styles.page}>
        <section className={styles.shell}>
          <a className={styles.brand} href="/">
            <Icon name="pine" size="md" decorative />
            <span>Accomp</span>
          </a>

          <header className={styles.header}>
            <p className={styles.eyebrow}>404 · Off route</p>
            <h1 className={styles.title}>This path isn&apos;t on the map.</h1>
            <p className={styles.lede}>
              The page may have moved, or the address may be incomplete.
            </p>
          </header>

          <a className={styles.homeLink} href="/">
            Return to Accomp
          </a>
        </section>
      </main>
    </>
  );
}
