import {
  Button,
  ButtonLink,
  Container,
  Heading,
  Icon,
  Stack,
  Text,
} from "@/components";
import {
  faqItems,
  howItWorks,
  navigation,
  packingFeatures,
  planningFeatures,
  promiseLabels,
} from "@/content/site-content";
import { FAQList } from "./FAQList";
import { FeatureRail } from "./FeatureRail";
import { MotionController } from "./MotionController";
import { SiteHeader } from "./SiteHeader";
import styles from "./marketing-page.module.css";

export function MarketingPage() {
  return (
    <div className={styles.site} data-motion-root data-phase="10">
      <MotionController />

      <a className={styles.skipLink} href="#main">
        Skip to content
      </a>

      <p className={styles.previewNote}>
        Product preview · Illustrative app UI · Waitlist submission is not active
      </p>

      <SiteHeader navigation={navigation} />

      <main id="main" tabIndex={-1}>
        <section className={styles.hero} id="top">
          <Container>
            <div className={styles.heroGrid}>
              <Stack className={styles.heroCopy} gap="lg">
                <Text as="p" variant="eyebrow">
                  Your companion for every adventure
                </Text>
                <Heading as="h1" size="display">
                  Adventure together.
                </Heading>
                <Text as="p" variant="lead" tone="muted">
                  Bring the route, the crew, the gear, and the plan into one calm
                  place—so everyone can head out ready.
                </Text>
                <div className={styles.heroActions}>
                  <ButtonLink href="#waitlist">Join the waitlist</ButtonLink>
                  <ButtonLink href="#features" variant="secondary">
                    Explore the features
                  </ButtonLink>
                </div>
                <Text as="p" tone="muted" className={styles.heroNote}>
                  A mobile app concept for planning shared outdoor trips.
                </Text>
              </Stack>

              <div
                aria-label="Illustrative Accomp trip overview with shared paths"
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
                  <small>Weekend trip</small>
                  <strong>Khao Yai</strong>
                  <p>12–14 September · Concept data</p>
                  <div className={styles.avatars}>
                    <span />
                    <span />
                    <span />
                    <b>+1</b>
                  </div>
                  <div className={styles.progressCard}>
                    <span>
                      <b>Trip readiness</b>
                      <b>72%</b>
                    </span>
                    <i>
                      <em />
                    </i>
                    <small>Illustrative status</small>
                  </div>
                  <ul>
                    <li>
                      <b>✓</b> Itinerary shared
                    </li>
                    <li>
                      <b>✓</b> Gear list ready
                    </li>
                    <li>
                      <b>↓</b> Offline map saved
                    </li>
                  </ul>
                </div>

                <span className={styles.visualLabel}>
                  Illustrative UI · not a product screenshot
                </span>
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.promise} data-reveal>
          <Container>
            <p>One place for the plan, the people, and the trail ahead.</p>
            <div aria-label="Accomp product promise">
              {promiseLabels.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
          </Container>
        </section>

        <section className={styles.chapter} id="features">
          <Container>
            <Stack gap="xl">
              <div className={styles.chapterHeading} data-reveal>
                <div>
                  <Text as="p" variant="eyebrow">
                    Plan together
                  </Text>
                  <Heading as="h2" size="section">
                    Make one plan. Bring everyone in.
                  </Heading>
                </div>
                <Text as="p" variant="lead" tone="muted">
                  Start the trip, invite your crew, and shape the days in one
                  shared space.
                </Text>
              </div>
              <FeatureRail
                cards={planningFeatures}
                label="Planning"
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
                    Pack together
                  </Text>
                  <Heading as="h2" size="section">
                    Pack once. Know who&apos;s bringing what.
                  </Heading>
                </div>
                <Text as="p" variant="lead" tone="muted">
                  Share the checklist, split responsibility, and see what still
                  needs attention.
                </Text>
              </div>
              <FeatureRail
                cards={packingFeatures}
                label="Packing"
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
                  Ready anywhere
                </Text>
                <Heading as="h2" size="section" tone="inverse">
                  Ready when the signal isn&apos;t.
                </Heading>
                <Text as="p" variant="lead" tone="sand">
                  Prepare maps and essential trip details before coverage fades.
                </Text>
                <ul className={styles.offlinePoints}>
                  <li>Save the route</li>
                  <li>Keep details close</li>
                  <li>Head out with confidence</li>
                </ul>
                <p className={styles.validationNote}>
                  Exact offline behavior remains subject to product validation.
                </p>
              </Stack>

              <div
                aria-label="Illustrative offline route and trip details"
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
                  <small>Prepared offline</small>
                  <strong>Khao Yai route</strong>
                  <p>Map, itinerary and meeting details · Illustrative UI</p>
                </div>
                <span className={styles.mapLabel}>
                  Abstract route · not real map data
                </span>
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.how} id="how-it-works">
          <Container>
            <Stack gap="xl">
              <div className={styles.chapterHeading} data-reveal>
                <div>
                  <Text as="p" variant="eyebrow">
                    How it works
                  </Text>
                  <Heading as="h2" size="section">
                    From “we should go” to ready to leave.
                  </Heading>
                </div>
                <Text as="p" variant="lead" tone="muted">
                  One shared path from the first idea to the trailhead.
                </Text>
              </div>

              <ol className={styles.steps} data-reveal>
                {howItWorks.map((step, index) => (
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
                  A shared adventure
                </Text>
                <Heading as="h2" size="section">
                  The best trips feel spontaneous. The preparation shouldn&apos;t.
                </Heading>
                <Text as="p" variant="lead" tone="muted">
                  Accomp is for the friend who starts the plan—and everyone who
                  helps turn it into a shared adventure.
                </Text>
                <p className={styles.validationNote}>
                  Original abstract composition used until photography is
                  approved.
                </p>
              </Stack>

              <div
                aria-label="Abstract illustration of three companions planning around a map"
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
                  FAQ
                </Text>
                <Heading as="h2" size="section">
                  A few things to know.
                </Heading>
                <Text as="p" variant="lead" tone="muted">
                  Honest answers before launch.
                </Text>
              </Stack>
              <FAQList items={faqItems} />
            </div>
          </Container>
        </section>

        <section className={styles.waitlist} id="waitlist">
          <Container>
            <div className={styles.waitlistField} data-reveal>
              <Stack gap="lg">
                <Text as="p" variant="eyebrow">
                  Your next trip starts together
                </Text>
                <Heading as="h2" size="section">
                  Make room for the adventure.
                </Heading>
                <Text as="p" variant="lead">
                  Bring the people and the plan together before the trail begins.
                </Text>
              </Stack>

              <div className={styles.waitlistForm}>
                <div
                  aria-label="Waitlist signup is not active yet"
                  className={styles.formPreview}
                  role="group"
                >
                  <input
                    aria-label="Email address preview"
                    disabled
                    placeholder="email@example.com"
                    type="email"
                  />
                  <Button disabled type="button" variant="dark">
                    Coming soon
                  </Button>
                </div>
                <p>No information is collected or submitted yet.</p>
              </div>

              <span className={styles.waitlistCompanions} aria-hidden="true">
                <i />
                <i />
              </span>
            </div>
          </Container>
        </section>
      </main>

      <footer className={styles.footer}>
        <Container>
          <div className={styles.footerGrid} data-reveal>
            <div>
              <a className={styles.footerBrand} href="#top">
                <Icon name="pine" size="md" decorative />
                <span>Accomp</span>
              </a>
              <p>
                One calm place for the route, the crew, the gear, and the plan.
              </p>
            </div>
            <div className={styles.footerLinks}>
              <div>
                <h2>Product</h2>
                <a href="#features">Features</a>
                <a href="#how-it-works">How it works</a>
                <a href="#offline">Offline</a>
              </div>
              <div>
                <h2>Support</h2>
                <a href="#faq">FAQ</a>
                <span>Contact · coming later</span>
              </div>
              <div>
                <h2>Legal</h2>
                <a href="/privacy">Privacy</a>
                <a href="/terms">Terms</a>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <span>© 2026 Accomp · Adventure Together.</span>
            <span>Pre-launch product concept</span>
          </div>
        </Container>
      </footer>
    </div>
  );
}
