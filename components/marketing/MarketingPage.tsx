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
import { PromiseCardStack } from "./PromiseCardStack";
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
                <Text as="p" variant="lead" tone="sand">
                  {copy.hero.eyebrow}
                </Text>
                <Heading as="h1" size="display" tone="inverse">
                  {copy.hero.title}
                </Heading>
                <Text
                  as="p"
                  className={styles.heroBody}
                  variant="lead"
                  tone="sand"
                >
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
              </Stack>
            </div>
          </Container>
        </section>

        <section className={styles.promise} data-reveal>
          <Container className={styles.promiseContainer}>
            <div className={styles.promisePanel}>
              <div className={styles.promiseHeading}>
                <h2 className={styles.promiseTitle}>{copy.promise.title}</h2>
              </div>
              <PromiseCardStack
                items={content.promiseLabels}
                label={copy.promise.label}
              />
            </div>
          </Container>
        </section>

        <div
          aria-label={copy.promise.label}
          data-core-feature="shared-trip-planning"
          id="features"
          role="group"
        >
        <section className={`${styles.chapter} ${styles.planChapter}`}>
          <Container className={styles.planContainer}>
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
                presentation="stack"
                tone="cream"
              />
            </Stack>
          </Container>
        </section>

        <section className={`${styles.chapter} ${styles.packChapter}`}>
          <Container className={styles.planContainer}>
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
                presentation="stack"
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
                  <defs>
                    <clipPath id="offline-terrain-clip">
                      <path d="M-30 18L126 46 160 92 232 110 252 160 320 178 330 238 396 252 410 312 470 328 482 390 548 412 552 472 620 492 618 552 690 576 676 638 748 670 830 730 830 810 610 810 574 748 500 736 472 682 398 664 380 604 310 584 296 522 226 496 218 434 150 404 152 342 88 306 102 246 40 202 58 144-10 96Z" />
                    </clipPath>
                  </defs>
                  <path
                    className={styles.mapTerrain}
                    d="M-30 18L126 46 160 92 232 110 252 160 320 178 330 238 396 252 410 312 470 328 482 390 548 412 552 472 620 492 618 552 690 576 676 638 748 670 830 730 830 810 610 810 574 748 500 736 472 682 398 664 380 604 310 584 296 522 226 496 218 434 150 404 152 342 88 306 102 246 40 202 58 144-10 96Z"
                  />
                  <g clipPath="url(#offline-terrain-clip)">
                  <path
                    className={styles.mapContour}
                    d="M-76 128C48 32 190 40 270 126S394 250 504 154 674 60 842 112"
                  />
                  <path
                    className={styles.mapContour}
                    d="M-92 190C42 84 182 86 264 178S402 302 524 206 704 112 862 160"
                  />
                  <path
                    className={styles.mapContour}
                    d="M62 342C8 262 38 166 130 124S302 130 344 218 310 374 214 402 108 390 62 342Z"
                  />
                  <path
                    className={styles.mapContour}
                    d="M104 312C66 256 90 194 150 166S258 174 286 232 258 334 198 352 134 344 104 312Z"
                  />
                  <path
                    className={`${styles.mapContour} ${styles.mapContourMajor}`}
                    d="M142 286C120 252 136 214 172 200S236 206 252 240 236 300 200 312 158 304 142 286Z"
                  />
                  <path
                    className={styles.mapContour}
                    d="M438 706C382 620 418 516 520 476S716 488 764 580 724 736 622 762 488 748 438 706Z"
                  />
                  <path
                    className={styles.mapContour}
                    d="M486 672C450 614 478 546 542 520S674 530 706 592 680 688 614 706 526 696 486 672Z"
                  />
                  <path
                    className={`${styles.mapContour} ${styles.mapContourMajor}`}
                    d="M534 642C512 606 530 564 570 550S650 556 668 594 652 654 612 666 552 660 534 642Z"
                  />
                  <path
                    className={styles.mapRouteSecondary}
                    d="M-24 420C86 348 176 438 282 388S456 286 566 338 704 462 836 408"
                    pathLength="1"
                  />
                  </g>
                  <path
                    className={styles.mapTrailHalo}
                    d="M650 690C610 668 632 620 585 598S548 532 505 516 478 460 448 438 414 382 375 365 334 325 310 286 270 262 250 212 222 188 214 160"
                  />
                  <path
                    className={styles.mapRoutePrimary}
                    d="M650 690C610 668 632 620 585 598S548 532 505 516 478 460 448 438 414 382 375 365 334 325 310 286 270 262 250 212 222 188 214 160"
                    pathLength="1"
                  />
                </svg>
                <div className={styles.offlineCard} aria-hidden="true">
                  <small>{copy.offline.cardEyebrow}</small>
                  <strong>{copy.offline.cardTitle}</strong>
                  <p>{copy.offline.cardBody}</p>
                </div>
                <div
                  className={`${styles.mapWaypoint} ${styles.mapWaypointStart}`}
                  aria-hidden="true"
                >
                  <span>↗</span>
                  <small>{copy.offline.mapStart}</small>
                </div>
                <div
                  className={`${styles.mapWaypoint} ${styles.mapWaypointCamp}`}
                  aria-hidden="true"
                >
                  <span>△</span>
                  <small>{copy.offline.mapCamp}</small>
                </div>
                <div className={styles.mapCurrent} aria-hidden="true">
                  <span className={styles.mapCurrentDot} />
                  <div>
                    <strong>{copy.offline.mapCurrent}</strong>
                    <small>{copy.offline.mapCoordinates}</small>
                  </div>
                </div>
                <div
                  className={`${styles.mapStop} ${styles.mapStopViewpoint}`}
                  aria-hidden="true"
                >
                  <span />
                  <small>{copy.offline.mapViewpoint}</small>
                </div>
                <div
                  className={`${styles.mapStop} ${styles.mapStopWaterfall}`}
                  aria-hidden="true"
                >
                  <span />
                  <small>{copy.offline.mapWaterfall}</small>
                </div>
                <div
                  className={`${styles.mapStop} ${styles.mapStopRest}`}
                  aria-hidden="true"
                >
                  <span />
                  <small>{copy.offline.mapRest}</small>
                </div>
                <div className={styles.mapNorth} aria-hidden="true">
                  <span>N</span>
                  <small>{copy.offline.mapNorth}</small>
                </div>
                <div className={styles.mapScale} aria-hidden="true">
                  <span />
                  <small>{copy.offline.mapScale}</small>
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
