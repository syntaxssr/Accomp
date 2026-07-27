import type { HTMLAttributes, ReactNode } from "react";
import styles from "./ui.module.css";

type HeadingElement = "h1" | "h2" | "h3";
type HeadingSize = "display" | "section" | "card";
type TextElement = "p" | "span";
type TextTone = "default" | "muted" | "inverse" | "sand" | "meadow";
type TextVariant = "body" | "lead" | "eyebrow";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as: HeadingElement;
  children: ReactNode;
  size: HeadingSize;
  tone?: TextTone;
}

export function Heading({
  as: Component,
  children,
  className,
  size,
  tone = "default",
  ...props
}: HeadingProps) {
  const classes = [styles.heading, className].filter(Boolean).join(" ");

  return (
    <Component
      className={classes}
      data-size={size}
      data-tone={tone}
      {...props}
    >
      {children}
    </Component>
  );
}

interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: TextElement;
  children: ReactNode;
  tone?: TextTone;
  variant?: TextVariant;
}

export function Text({
  as: Component = "p",
  children,
  className,
  tone = "default",
  variant = "body",
  ...props
}: TextProps) {
  const classes = [styles.text, className].filter(Boolean).join(" ");

  return (
    <Component
      className={classes}
      data-tone={tone}
      data-variant={variant}
      {...props}
    >
      {children}
    </Component>
  );
}
