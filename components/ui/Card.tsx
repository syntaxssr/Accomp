import type { HTMLAttributes, ReactNode } from "react";
import styles from "./ui.module.css";

type CardTone = "cream" | "sand" | "meadow" | "dark";
type CardPadding = "md" | "lg";

interface CardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  padding?: CardPadding;
  tone?: CardTone;
}

export function Card({
  children,
  className,
  padding = "md",
  tone = "cream",
  ...props
}: CardProps) {
  const classes = [styles.card, className].filter(Boolean).join(" ");

  return (
    <article
      className={classes}
      data-padding={padding}
      data-tone={tone}
      {...props}
    >
      {children}
    </article>
  );
}
