import { Container, Icon } from "@/components";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/config";
import type { Messages } from "@/lib/i18n/messages";
import styles from "./marketing-page.module.css";

interface SiteFooterProps {
  copy: Messages["marketing"]["footer"];
  locale: Locale;
}

export function SiteFooter({ copy, locale }: SiteFooterProps) {
  const home = localizedPath(locale);

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerGrid}>
          <div>
            <a className={styles.footerBrand} href={home}>
              <Icon name="pine" size="md" decorative />
              <span>Accomp</span>
            </a>
            <p>{copy.tagline}</p>
          </div>
          <div className={styles.footerLinks}>
            <div>
              <h2>{copy.product}</h2>
              <a href={`${home}#features`}>{copy.features}</a>
              <a href={`${home}#how-it-works`}>{copy.howItWorks}</a>
              <a href={`${home}#offline`}>{copy.offline}</a>
              <a href={localizedPath(locale, "/roadmap")}>
                {copy.roadmap}
              </a>
            </div>
            <div>
              <h2>{copy.support}</h2>
              <a href={localizedPath(locale, "/support")}>
                {copy.supportDeveloper}
              </a>
              <a href={`${home}#faq`}>{copy.faq}</a>
              <span>{copy.contact}</span>
            </div>
            <div>
              <h2>{copy.legal}</h2>
              <a href={localizedPath(locale, "/privacy")}>
                {copy.privacy}
              </a>
              <a href={localizedPath(locale, "/terms")}>{copy.terms}</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>{copy.copyright}</span>
          <span>{copy.status}</span>
        </div>
      </Container>
    </footer>
  );
}
