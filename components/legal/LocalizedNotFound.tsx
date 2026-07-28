import { Icon } from "@/components";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/config";
import type { Messages } from "@/lib/i18n/messages";
import styles from "@/app/legal-pages.module.css";

interface LocalizedNotFoundProps {
  copy: Messages["notFound"];
  languageSwitcher: Messages["languageSwitcher"];
  locale: Locale;
}

export function LocalizedNotFound({
  copy,
  languageSwitcher,
  locale,
}: LocalizedNotFoundProps) {
  return (
    <>
      <title>{copy.metaTitle} · Accomp</title>
      <main className={styles.page}>
        <section className={styles.shell}>
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
            />
          </div>

          <header className={styles.header}>
            <p className={styles.eyebrow}>{copy.eyebrow}</p>
            <h1 className={styles.title}>{copy.title}</h1>
            <p className={styles.lede}>{copy.lede}</p>
          </header>

          <a className={styles.homeLink} href={localizedPath(locale)}>
            {copy.returnHome}
          </a>
        </section>
      </main>
    </>
  );
}
