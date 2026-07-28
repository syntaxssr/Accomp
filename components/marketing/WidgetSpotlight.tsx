import Image from "next/image";
import { Container, Heading, Text } from "@/components";
import {
  countdownMascotStates,
  getCountdownMascotState,
} from "@/content/widgets";
import type { Messages } from "@/lib/i18n/messages";
import styles from "./widget-spotlight.module.css";

interface WidgetSpotlightProps {
  copy: Messages["marketing"]["widgets"];
}

const previewDaysRemaining = 5;

export function WidgetSpotlight({ copy }: WidgetSpotlightProps) {
  const activeMascot = getCountdownMascotState(previewDaysRemaining);

  return (
    <section
      aria-labelledby="companion-surfaces-heading"
      className={styles.section}
      data-companion-surfaces="widgets"
    >
      <Container>
        <div className={styles.heading} data-reveal>
          <div>
            <Text as="p" variant="eyebrow">
              {copy.eyebrow}
            </Text>
            <Heading as="h2" size="section">
              <span id="companion-surfaces-heading">{copy.title}</span>
            </Heading>
          </div>
          <Text as="p" variant="lead" tone="muted">
            {copy.body}
          </Text>
        </div>

        <div aria-label={copy.sectionLabel} className={styles.grid}>
          <article className={`${styles.card} ${styles.countdownCard}`}>
            <div className={styles.cardCopy}>
              <span className={styles.cardNumber}>01</span>
              <div>
                <h3>{copy.countdown.title}</h3>
                <p>{copy.countdown.body}</p>
              </div>
            </div>

            <div
              aria-label={copy.countdown.previewAriaLabel}
              className={styles.countdownPreview}
              role="img"
            >
              <span className={styles.previewLabel}>{copy.previewLabel}</span>
              <div className={styles.countdownContent}>
                <div>
                  <small>{copy.countdown.tripLabel}</small>
                  <strong>
                    {copy.countdown.daysValue}
                    <span>{copy.countdown.daysLabel}</span>
                  </strong>
                  <p>{copy.countdown.dateLabel}</p>
                </div>
                <Image
                  alt=""
                  aria-hidden="true"
                  className={styles.activeMascot}
                  height={512}
                  sizes="(max-width: 48rem) 34vw, 11rem"
                  src={activeMascot.assetPath}
                  unoptimized
                  width={512}
                />
              </div>
            </div>

            <ol
              aria-label={copy.countdown.progressionLabel}
              className={styles.mascotProgression}
            >
              {countdownMascotStates.map((state, index) => (
                <li key={state.id}>
                  <Image
                    alt=""
                    aria-hidden="true"
                    height={512}
                    sizes="4rem"
                    src={state.assetPath}
                    unoptimized
                    width={512}
                  />
                  <span>{copy.countdown.states[index].range}</span>
                  <small>{copy.countdown.states[index].mood}</small>
                </li>
              ))}
            </ol>
          </article>

          <article className={`${styles.card} ${styles.gearCard}`}>
            <div className={styles.cardCopy}>
              <span className={styles.cardNumber}>02</span>
              <div>
                <h3>{copy.gear.title}</h3>
                <p>{copy.gear.body}</p>
              </div>
            </div>

            <div className={styles.gearPreview}>
              <span className={styles.previewLabel}>{copy.previewLabel}</span>
              <div className={styles.gearHeader}>
                <div>
                  <small>{copy.gear.tripLabel}</small>
                  <strong>{copy.gear.progressValue}</strong>
                </div>
                <span>{copy.gear.status}</span>
              </div>
              <div
                aria-label={copy.gear.progressAriaLabel}
                aria-valuemax={10}
                aria-valuemin={0}
                aria-valuenow={8}
                className={styles.progress}
                role="progressbar"
              >
                <span />
              </div>
              <p className={styles.remainingLabel}>{copy.gear.remainingLabel}</p>
              <ul className={styles.gearList}>
                {copy.gear.items.map((item) => (
                  <li key={item.name}>
                    <span aria-hidden="true" />
                    <strong>{item.name}</strong>
                    <small>{item.status}</small>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>

        <p className={styles.conceptNote}>{copy.conceptNote}</p>
      </Container>
    </section>
  );
}
