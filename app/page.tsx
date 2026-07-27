import type { Metadata } from "next";
import {
  Button,
  ButtonLink,
  Card,
  Container,
  Heading,
  Icon,
  Stack,
  Text,
  TextLink,
} from "@/components";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Foundation Preview",
  description:
    "Phase 4 design-system and project-foundation preview for Accomp.",
};

const colors = [
  { name: "Trail Sage", value: "#778873", token: "--color-brand" },
  { name: "Meadow Sage", value: "#A1BC98", token: "--color-meadow" },
  { name: "Trail Sand", value: "#DCCFC0", token: "--color-sand" },
  { name: "Warm Cream", value: "#FDF6ED", token: "--color-cream" },
  { name: "Brand Dark", value: "#1F1F1F", token: "--color-ink" },
  { name: "Background Dark", value: "#171717", token: "--color-night" },
];

export default function Home() {
  return (
    <main className={styles.page} data-phase="4">
      <p className={styles.phaseNote}>
        Phase 4 foundation preview · not the production marketing homepage
      </p>

      <Container as="header" className={styles.header}>
        <a className={styles.brand} href="#foundation" aria-label="Accomp home">
          <Icon name="pine" size="md" decorative />
          <span>Accomp</span>
        </a>
        <span className={styles.status}>Foundation ready</span>
      </Container>

      <section className={styles.intro} id="foundation">
        <Container>
          <div className={styles.introGrid}>
            <Stack gap="lg">
              <Text as="p" variant="eyebrow">
                Project scaffold · Design system
              </Text>
              <Heading as="h1" size="display">
                A calm foundation for what comes next.
              </Heading>
              <Text as="p" variant="lead">
                Phase 4 establishes Accomp&apos;s tokens, typography, layout,
                controls and asset conventions before the marketing page is
                implemented.
              </Text>
              <div className={styles.actions}>
                <ButtonLink href="#primitives">View primitives</ButtonLink>
                <ButtonLink href="#tokens" variant="secondary">
                  Inspect tokens
                </ButtonLink>
              </div>
            </Stack>

            <Card tone="dark" padding="lg">
              <Stack gap="lg">
                <Text as="p" variant="eyebrow" tone="meadow">
                  Phase boundary
                </Text>
                <Heading as="h2" size="section" tone="inverse">
                  Structure first. Story next.
                </Heading>
                <Text as="p" tone="sand">
                  This preview intentionally contains no production hero,
                  feature chapters, waitlist form or app claims. Those remain
                  gated behind Phase 5.
                </Text>
                <div className={styles.readiness}>
                  <span>Static-first</span>
                  <span>Strict TypeScript</span>
                  <span>Accessible states</span>
                </div>
              </Stack>
            </Card>
          </div>
        </Container>
      </section>

      <section className={styles.section} id="tokens">
        <Container>
          <Stack gap="lg">
            <div className={styles.sectionHeading}>
              <div>
                <Text as="p" variant="eyebrow">
                  Color tokens
                </Text>
                <Heading as="h2" size="section">
                  The Accomp palette, named for use.
                </Heading>
              </div>
              <Text as="p" tone="muted" className={styles.sectionSummary}>
                Semantic variables keep the same meaning across components and
                can be adjusted without rewriting markup.
              </Text>
            </div>

            <div className={styles.swatchGrid} aria-label="Accomp color tokens">
              {colors.map((color) => (
                <article className={styles.swatch} key={color.token}>
                  <span
                    className={styles.swatchColor}
                    style={{ backgroundColor: color.value }}
                    aria-hidden="true"
                  />
                  <strong>{color.name}</strong>
                  <code>{color.value}</code>
                  <small>{color.token}</small>
                </article>
              ))}
            </div>
          </Stack>
        </Container>
      </section>

      <section className={`${styles.section} ${styles.sandSection}`} id="primitives">
        <Container>
          <Stack gap="xl">
            <div className={styles.sectionHeading}>
              <div>
                <Text as="p" variant="eyebrow">
                  Core primitives
                </Text>
                <Heading as="h2" size="section">
                  Small parts with clear contracts.
                </Heading>
              </div>
              <Text as="p" tone="muted" className={styles.sectionSummary}>
                These are implementation references—not finished marketing
                sections.
              </Text>
            </div>

            <div className={styles.primitiveGrid}>
              <Card padding="lg">
                <Stack gap="md">
                  <Text as="p" variant="eyebrow">
                    Typography
                  </Text>
                  <Heading as="h3" size="card">
                    Shared plans should feel easy to read.
                  </Heading>
                  <Text as="p" tone="muted">
                    Display and body families load through the framework with
                    system fallbacks and swap behavior.
                  </Text>
                  <TextLink href="#foundation">Text link example</TextLink>
                </Stack>
              </Card>

              <Card tone="meadow" padding="lg">
                <Stack gap="md">
                  <Text as="p" variant="eyebrow">
                    Controls
                  </Text>
                  <Heading as="h3" size="card">
                    Intentional in every state.
                  </Heading>
                  <div className={styles.controlStack}>
                    <Button type="button">Primary button</Button>
                    <Button type="button" variant="secondary">
                      Secondary button
                    </Button>
                    <Button type="button" disabled>
                      Disabled state
                    </Button>
                  </div>
                </Stack>
              </Card>

              <Card tone="dark" padding="lg">
                <Stack gap="md">
                  <div className={styles.iconSample}>
                    <span className={styles.iconField}>
                      <Icon name="pine" size="lg" decorative />
                    </span>
                    <Text as="p" variant="eyebrow" tone="meadow">
                      Icon asset
                    </Text>
                  </div>
                  <Heading as="h3" size="card" tone="inverse">
                    One provisional symbol, one source.
                  </Heading>
                  <Text as="p" tone="sand">
                    The reusable icon primitive references the reviewed SVG in
                    the public brand directory.
                  </Text>
                </Stack>
              </Card>
            </div>
          </Stack>
        </Container>
      </section>

      <Container as="footer" className={styles.footer}>
        <span>Accomp · Phase 4 foundation</span>
        <span>Ready for owner review before Phase 5</span>
      </Container>
    </main>
  );
}
