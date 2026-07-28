import { ButtonLink, Container, Icon } from "@/components";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { SiteHeader } from "@/components/marketing/SiteHeader";
import { createSupportNavigation } from "@/content/site-content";
import { supporters } from "@/content/supporters";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/config";
import { formatMessage } from "@/lib/i18n/format";
import type { Messages } from "@/lib/i18n/messages";
import styles from "./support-page.module.css";

interface SupportPageProps {
  locale: Locale;
  messages: Messages;
}

export function SupportPage({ locale, messages }: SupportPageProps) {
  const copy = messages.support;
  const home = localizedPath(locale);
  const navigation = createSupportNavigation(messages, locale);

  return (
    <div className={styles.site} data-phase="2.4">
      <a className={styles.skipLink} href="#main">
        {copy.skipToContent}
      </a>

      <SiteHeader
        copy={messages.navigation}
        homeHref={home}
        languagePathname="/support"
        languageSwitcher={messages.languageSwitcher}
        locale={locale}
        navigation={navigation}
        waitlistHref={`${home}#waitlist`}
      />

      <main id="main" tabIndex={-1}>
        <section className={styles.hero} id="top">
          <Container>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <p className={styles.eyebrow}>{copy.eyebrow}</p>
                <h1>{copy.title}</h1>
                <p className={styles.lede}>{copy.lede}</p>

                <div
                  aria-labelledby="support-channel-title"
                  className={styles.channelPanel}
                >
                  <div>
                    <p className={styles.channelEyebrow}>
                      {copy.supportAction.eyebrow}
                    </p>
                    <h2 id="support-channel-title">
                      {copy.supportAction.title}
                    </h2>
                    <p>{copy.supportAction.body}</p>
                  </div>
                  <p className={styles.channelStatus} role="status">
                    <span aria-hidden="true" />
                    {copy.supportAction.status}
                  </p>
                </div>
              </div>

              <div
                aria-label={copy.visualLabel}
                className={styles.supportVisual}
                role="img"
              >
                <span className={styles.orbit} aria-hidden="true" />
                <span className={styles.companionOne} aria-hidden="true" />
                <span className={styles.companionTwo} aria-hidden="true" />
                <span className={styles.companionThree} aria-hidden="true" />
                <span className={styles.pineMark} aria-hidden="true">
                  <Icon name="pine" size="lg" decorative />
                </span>
                <span className={styles.visualCaption}>
                  {copy.visualCaption}
                </span>
              </div>
            </div>
          </Container>
        </section>

        <section
          aria-labelledby="support-impact-title"
          className={styles.impact}
        >
          <Container>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>{copy.impactEyebrow}</p>
              <h2 id="support-impact-title">{copy.impactTitle}</h2>
              <p>{copy.impactBody}</p>
            </div>

            <div className={styles.impactGrid}>
              {copy.impactItems.map((item, index) => (
                <article className={styles.impactCard} key={item.title}>
                  <span aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section
          aria-labelledby="supporter-wall-title"
          className={styles.supporterWall}
        >
          <Container>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>{copy.supporters.eyebrow}</p>
              <h2 id="supporter-wall-title">{copy.supporters.title}</h2>
              <p>{copy.supporters.body}</p>
            </div>

            {supporters.length > 0 ? (
              <ul
                aria-label={copy.supporters.listLabel}
                className={styles.supporterGrid}
              >
                {supporters
                  .toSorted(
                    (first, second) =>
                      first.sortOrder - second.sortOrder,
                  )
                  .map((supporter) => (
                    <li className={styles.supporterCard} key={supporter.id}>
                      {/* Approved local assets use fixed dimensions to avoid layout shift. */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        alt={formatMessage(copy.supporters.imageAlt, {
                          name: supporter.displayName,
                        })}
                        decoding="async"
                        height={320}
                        loading="lazy"
                        src={supporter.imagePath}
                        width={320}
                      />
                      <h3>{supporter.displayName}</h3>
                    </li>
                  ))}
              </ul>
            ) : (
              <div className={styles.emptyState} role="status">
                <span aria-hidden="true">
                  <Icon name="pine" size="lg" decorative />
                </span>
                <div>
                  <h3>{copy.supporters.emptyTitle}</h3>
                  <p>{copy.supporters.emptyBody}</p>
                </div>
              </div>
            )}

            <div className={styles.supporterFooter}>
              <p>{copy.supporters.privacyNote}</p>
              <ButtonLink data-size-lock="return-home" href={home}>
                {copy.returnHome}
              </ButtonLink>
            </div>
          </Container>
        </section>
      </main>

      <SiteFooter copy={messages.marketing.footer} locale={locale} />
    </div>
  );
}
