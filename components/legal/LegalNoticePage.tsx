import { Icon } from "@/components";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/config";
import type { Messages } from "@/lib/i18n/messages";
import styles from "@/app/legal-pages.module.css";

interface LegalNoticePageProps {
  copy: Messages["privacy"] | Messages["terms"];
  languageSwitcher: Messages["languageSwitcher"];
  locale: Locale;
  pathname: "/privacy" | "/terms";
}

export function LegalNoticePage({
  copy,
  languageSwitcher,
  locale,
  pathname,
}: LegalNoticePageProps) {
  return (
    <main className={styles.page}>
      <article className={styles.shell}>
        <div className={styles.topbar}>
          <a
            aria-label="Accomp"
            className={styles.brand}
            href={localizedPath(locale)}
          >
            <Icon name="pine" size="md" decorative />
            <span>Accomp</span>
          </a>
          <LanguageSwitcher
            copy={languageSwitcher}
            locale={locale}
            pathname={pathname}
          />
        </div>

        <header className={styles.header}>
          <p className={styles.eyebrow}>{copy.eyebrow}</p>
          <h1 className={styles.title}>{copy.title}</h1>
          <p className={styles.lede}>{copy.lede}</p>
        </header>

        <div className={styles.notice}>
          <strong>{copy.noticeTitle}</strong>
          {copy.noticeBody}
        </div>

        <div className={styles.content}>
          {copy.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}

          <p className={styles.meta}>
            {copy.dateLabel}{" "}
            <time dateTime="2026-07-28">{copy.dateText}</time>
          </p>

          <a className={styles.homeLink} href={localizedPath(locale)}>
            {copy.returnHome}
          </a>
        </div>
      </article>
    </main>
  );
}
