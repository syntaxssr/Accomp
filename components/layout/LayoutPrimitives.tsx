import type { ReactNode } from "react";
import styles from "./layout-primitives.module.css";

type ContainerElement = "div" | "header" | "footer" | "section";

interface ContainerProps {
  as?: ContainerElement;
  children: ReactNode;
  className?: string;
}

export function Container({
  as: Component = "div",
  children,
  className,
}: ContainerProps) {
  const classes = [styles.container, className].filter(Boolean).join(" ");

  return <Component className={classes}>{children}</Component>;
}

type StackGap = "sm" | "md" | "lg" | "xl";
type StackElement = "article" | "div" | "section";

interface StackProps {
  as?: StackElement;
  children: ReactNode;
  className?: string;
  gap?: StackGap;
}

export function Stack({
  as: Component = "div",
  children,
  className,
  gap = "md",
}: StackProps) {
  const classes = [styles.stack, className].filter(Boolean).join(" ");

  return (
    <Component className={classes} data-gap={gap}>
      {children}
    </Component>
  );
}
