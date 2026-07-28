import { ButtonLink, Container, Icon } from "@/components";
import { SiteFooter } from "@/components/marketing/SiteFooter";
import { SiteHeader } from "@/components/marketing/SiteHeader";
import {
  createRoadmapNavigation,
} from "@/content/site-content";
import {
  roadmapEntries,
  type RoadmapStatus,
} from "@/content/roadmap";
import type { Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/config";
import type { Messages } from "@/lib/i18n/messages";
import styles from "./roadmap-page.module.css";

interface RoadmapPageProps {
  locale: Locale;
  messages: Messages;
}

function statusLabel(
  copy: Messages["roadmap"],
  status: RoadmapStatus,
): string {
  return copy.status[status];
}

export function RoadmapPage({ locale, messages }: RoadmapPageProps) {
  const copy = messages.roadmap;
  const home = localizedPath(locale);
  const navigation = createRoadmapNavigation(messages, locale);

  return (
    <div className={styles.site} data-phase="2.3">
      <a className={styles.skipLink} href="#main">
        {copy.skipToContent}
      </a>

      <SiteHeader
        copy={messages.navigation}
        homeHref={home}
        languagePathname="/roadmap"
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
                <p className={styles.curatedNote}>{copy.curatedNote}</p>
              </div>

              <div
                aria-label={copy.visualLabel}
                className={styles.routeVisual}
                role="img"
              >
                <span className={styles.contourOne} aria-hidden="true" />
                <span className={styles.contourTwo} aria-hidden="true" />
                <span className={styles.routeLine} aria-hidden="true" />
                <span className={styles.routeStart} aria-hidden="true" />
                <span className={styles.routeMiddle} aria-hidden="true" />
                <span className={styles.routeEnd} aria-hidden="true">
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
          aria-labelledby="roadmap-heading"
          className={styles.journey}
        >
          <Container>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>{copy.timelineEyebrow}</p>
              <h2 id="roadmap-heading">{copy.timelineTitle}</h2>
              <p>{copy.timelineBody}</p>
            </div>

            <ol
              aria-label={copy.timelineLabel}
              className={styles.timeline}
            >
              {roadmapEntries.map((entry) => {
                const item = copy.items[entry.copyKey];
                const headingId = `${entry.id}-title`;
                const stageLabel = `${copy.stageLabel} ${entry.stage}`;

                return (
                  <li
                    aria-current={
                      entry.status === "current" ? "step" : undefined
                    }
                    className={styles.timelineItem}
                    data-status={entry.status}
                    id={entry.id}
                    key={entry.id}
                  >
                    <span className={styles.horizon}>
                      {copy.horizon[entry.horizon]}
                    </span>
                    <article
                      aria-labelledby={headingId}
                      className={styles.milestone}
                    >
                      <div className={styles.milestoneMeta}>
                        <span className={styles.phase}>{stageLabel}</span>
                        <span
                          className={styles.status}
                          data-status={entry.status}
                        >
                          <span aria-hidden="true" />
                          {statusLabel(copy, entry.status)}
                        </span>
                      </div>
                      <h3 id={headingId}>{item.title}</h3>
                      <p>{item.summary}</p>
                      <ul>
                        {item.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                      {entry.status === "current" ? (
                        <strong className={styles.currentNote}>
                          {copy.currentNote}
                        </strong>
                      ) : null}
                    </article>
                  </li>
                );
              })}
            </ol>
          </Container>
        </section>

        <section className={styles.nextStep}>
          <Container>
            <div className={styles.nextStepPanel}>
              <div>
                <p className={styles.eyebrow}>{copy.nextEyebrow}</p>
                <h2>{copy.nextTitle}</h2>
                <p>{copy.nextBody}</p>
              </div>
              <ButtonLink href={home}>{copy.returnHome}</ButtonLink>
            </div>
          </Container>
        </section>
      </main>

      <SiteFooter copy={messages.marketing.footer} locale={locale} />
    </div>
  );
}
