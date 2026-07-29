import {
  Button,
  ButtonLink,
  Container,
  Heading,
  Stack,
  Text,
} from "@/components";
import { createSiteContent } from "@/content/site-content";
import type { Locale } from "@/lib/i18n/config";
import type { Messages } from "@/lib/i18n/messages";
import { FAQList } from "./FAQList";
import { FeatureRail } from "./FeatureRail";
import { MotionController } from "./MotionController";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { WidgetSpotlight } from "./WidgetSpotlight";
import styles from "./marketing-page.module.css";

interface MarketingPageProps {
  locale: Locale;
  messages: Messages;
}

export function MarketingPage({ locale, messages }: MarketingPageProps) {
  const content = createSiteContent(messages, locale);
  const copy = messages.marketing;

  return (
    <div className={styles.site} data-motion-root data-phase="2.4">
      <MotionController />

      <a className={styles.skipLink} href="#main">
        {copy.skipToContent}
      </a>

      <SiteHeader
        copy={messages.navigation}
        languageSwitcher={messages.languageSwitcher}
        locale={locale}
        navigation={content.navigation}
      />

      <main id="main" tabIndex={-1}>
        <section className={styles.hero} id="top">
          <Container className={styles.heroContainer}>
            <div className={styles.heroStage}>
              <div
                aria-label={copy.hero.visualLabel}
                className={styles.heroVisual}
                role="img"
              >
                <div className={styles.contours} aria-hidden="true" />
                <span className={styles.pathOne} aria-hidden="true" />
                <span className={styles.pathTwo} aria-hidden="true" />
                <span className={styles.companionOne} aria-hidden="true" />
                <span className={styles.companionTwo} aria-hidden="true" />

                <div className={styles.phone} aria-hidden="true">
                  <span className={styles.phoneNotch} />
                  <small>{copy.hero.phone.tripType}</small>
                  <strong>{copy.hero.phone.place}</strong>
                  <p>{copy.hero.phone.date}</p>
                  <div className={styles.avatars}>
                    <span />
                    <span />
                    <span />
                    <b>+1</b>
                  </div>
                  <div className={styles.progressCard}>
                    <span>
                      <b>{copy.hero.phone.readiness}</b>
                      <b>{copy.hero.phone.readinessValue}</b>
                    </span>
                    <i>
                      <em />
                    </i>
                    <small>{copy.hero.phone.status}</small>
                  </div>
                  <ul>
                    <li>
                      <b>✓</b> {copy.hero.phone.itinerary}
                    </li>
                    <li>
                      <b>✓</b> {copy.hero.phone.gear}
                    </li>
                    <li>
                      <b>↓</b> {copy.hero.phone.offline}
                    </li>
                  </ul>
                </div>

                <span className={styles.visualLabel}>
                  {copy.hero.visualDisclaimer}
                </span>
              </div>

              <Stack className={styles.heroCopy} gap="md">
                <Text
                  as="p"
                  className={styles.heroTagline}
                  variant="eyebrow"
                >
                  {copy.hero.eyebrow}
                </Text>
                <Heading as="h1" size="display" tone="inverse">
                  {copy.hero.title}
                </Heading>
                <Text as="p" variant="lead" tone="sand">
                  {copy.hero.body}
                </Text>
                <div className={styles.heroActions}>
                  <ButtonLink
                    data-motion="download"
                    data-size-lock="waitlist"
                    href="#waitlist"
                  >
                    {copy.hero.primaryCta}
                  </ButtonLink>
                </div>
                <Text as="p" tone="sand" className={styles.heroNote}>
                  {copy.hero.note}
                </Text>
              </Stack>
            </div>
          </Container>
        </section>

        <section className={styles.promise} data-reveal>
          <Container>
            <div className={styles.promisePanel}>
              <div className={styles.promiseHeading}>
                <p className={styles.promiseKicker}>{copy.promise.kicker}</p>
                <h2 className={styles.promiseTitle}>{copy.promise.title}</h2>
              </div>
              <ol
                aria-label={copy.promise.label}
                className={styles.promisePath}
              >
                {content.promiseLabels.map((label, index) => (
                  <li className={styles.promiseStep} key={label}>
                    <span aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <strong>{label}</strong>
                  </li>
                ))}
              </ol>
            </div>
          </Container>
        </section>

        <div
          aria-label={copy.promise.label}
          data-core-feature="shared-trip-planning"
          id="features"
          role="group"
        >
        <section className={styles.chapter}>
          <Container>
            <Stack gap="xl">
              <div className={styles.chapterHeading} data-reveal>
                <div>
                  <Text as="p" variant="eyebrow">
                    {copy.plan.eyebrow}
                  </Text>
                  <Heading as="h2" size="section">
                    {copy.plan.title}
                  </Heading>
                </div>
                <Text as="p" variant="lead" tone="muted">
                  {copy.plan.body}
                </Text>
              </div>
              <FeatureRail
                artwork={copy.featureArtwork}
                cards={content.planningFeatures}
                copy={messages.accessibility.featureRail}
                label={copy.plan.railLabel}
                tone="cream"
              />
            </Stack>
          </Container>
        </section>

        <section className={`${styles.chapter} ${styles.packChapter}`}>
          <Container>
            <Stack gap="xl">
              <div className={styles.chapterHeading} data-reveal>
                <div>
                  <Text as="p" variant="eyebrow">
                    {copy.pack.eyebrow}
                  </Text>
                  <Heading as="h2" size="section">
                    {copy.pack.title}
                  </Heading>
                </div>
                <Text as="p" variant="lead" tone="muted">
                  {copy.pack.body}
                </Text>
              </div>
              <FeatureRail
                artwork={copy.featureArtwork}
                cards={content.packingFeatures}
                copy={messages.accessibility.featureRail}
                label={copy.pack.railLabel}
                tone="sand"
              />
            </Stack>
          </Container>
        </section>

        <section className={styles.offline} id="offline">
          <Container>
            <div className={styles.offlineGrid} data-reveal>
              <Stack gap="lg">
                <Text as="p" variant="eyebrow" tone="meadow">
                  {copy.offline.eyebrow}
                </Text>
                <Heading as="h2" size="section" tone="inverse">
                  {copy.offline.title}
                </Heading>
                <Text as="p" variant="lead" tone="sand">
                  {copy.offline.body}
                </Text>
                <ul className={styles.offlinePoints}>
                  {copy.offline.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p className={styles.validationNote}>
                  {copy.offline.validation}
                </p>
              </Stack>

              <div
                aria-label={copy.offline.visualLabel}
                className={styles.offlineVisual}
                role="img"
              >
                <svg
                  aria-hidden="true"
                  className={styles.offlineMapRoutes}
                  viewBox="0 0 800 760"
                >
                  <path
                    className={styles.mapRouteSecondary}
                    d="M-30 570C130 410 230 652 390 486S650 250 850 368"
                    pathLength="1"
                  />
                  <path
                    className={styles.mapRoutePrimary}
                    d="M-20 298C120 392 246 218 390 342S626 590 840 470"
                    pathLength="1"
                  />
                </svg>
                <span className={styles.mapPin} aria-hidden="true" />
                <div className={styles.offlineCard} aria-hidden="true">
                  <small>{copy.offline.cardEyebrow}</small>
                  <strong>{copy.offline.cardTitle}</strong>
                  <p>{copy.offline.cardBody}</p>
                </div>
                <span className={styles.mapLabel}>
                  {copy.offline.mapLabel}
                </span>
              </div>
            </div>
          </Container>
        </section>
        <WidgetSpotlight copy={copy.widgets} />
        </div>

        <section className={styles.how} id="how-it-works">
          <Container>
            <Stack gap="xl">
              <div className={styles.chapterHeading} data-reveal>
                <div>
                  <Text as="p" variant="eyebrow">
                    {copy.howItWorks.eyebrow}
                  </Text>
                  <Heading as="h2" size="section">
                    {copy.howItWorks.title}
                  </Heading>
                </div>
                <Text as="p" variant="lead" tone="muted">
                  {copy.howItWorks.body}
                </Text>
              </div>

              <ol className={styles.steps} data-reveal>
                {content.howItWorks.map((step, index) => (
                  <li
                    data-reveal
                    data-reveal-order={index + 1}
                    key={step.title}
                  >
                    <span>{index + 1}</span>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </li>
                ))}
              </ol>
            </Stack>
          </Container>
        </section>

        <section className={styles.editorial}>
          <Container>
            <div className={styles.editorialGrid} data-reveal>
              <Stack gap="lg">
                <Text as="p" variant="eyebrow">
                  {copy.editorial.eyebrow}
                </Text>
                <Heading as="h2" size="section">
                  {copy.editorial.title}
                </Heading>
                <Text as="p" variant="lead" tone="muted">
                  {copy.editorial.body}
                </Text>
                <p className={styles.validationNote}>
                  {copy.editorial.validation}
                </p>
              </Stack>

              <div
                aria-label={copy.editorial.visualLabel}
                className={styles.editorialArt}
                role="img"
              >
                <span className={styles.personOne} />
                <span className={styles.personTwo} />
                <span className={styles.personThree} />
                <span className={styles.paperOne} />
                <span className={styles.paperTwo} />
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.faq} id="faq">
          <Container>
            <div className={styles.faqGrid} data-reveal>
              <Stack gap="md">
                <Text as="p" variant="eyebrow">
                  {copy.faq.eyebrow}
                </Text>
                <Heading as="h2" size="section">
                  {copy.faq.title}
                </Heading>
                <Text as="p" variant="lead" tone="muted">
                  {copy.faq.body}
                </Text>
              </Stack>
              <FAQList items={content.faqItems} />
            </div>
          </Container>
        </section>

        <section className={styles.waitlist} id="waitlist">
          <Container>
            <div className={styles.waitlistField} data-reveal>
              <Stack gap="lg">
                <Text as="p" variant="eyebrow">
                  {copy.waitlist.eyebrow}
                </Text>
                <Heading as="h2" size="section">
                  {copy.waitlist.title}
                </Heading>
                <Text as="p" variant="lead">
                  {copy.waitlist.body}
                </Text>
              </Stack>

              <div className={styles.waitlistForm}>
                <div
                  aria-label={copy.waitlist.groupLabel}
                  className={styles.formPreview}
                  role="group"
                >
                  <input
                    aria-label={copy.waitlist.emailLabel}
                    disabled
                    placeholder={copy.waitlist.emailPlaceholder}
                    type="email"
                  />
                  <Button
                    data-size-lock="compact"
                    disabled
                    type="button"
                    variant="dark"
                  >
                    {copy.waitlist.button}
                  </Button>
                </div>
                <p>{copy.waitlist.notice}</p>
              </div>

              <span className={styles.waitlistCompanions} aria-hidden="true">
                <i />
                <i />
              </span>
            </div>
          </Container>
        </section>
      </main>

      <SiteFooter copy={copy.footer} locale={locale} />
    </div>
  );
}
