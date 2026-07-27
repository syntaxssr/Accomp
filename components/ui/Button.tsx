import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import styles from "./ui.module.css";

type ButtonVariant = "primary" | "secondary" | "dark";

function buttonClasses(variant: ButtonVariant, className?: string) {
  return [styles.button, styles[`button-${variant}`], className]
    .filter(Boolean)
    .join(" ");
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

export function Button({
  children,
  className,
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonClasses(variant, className)}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
}

export function ButtonLink({
  children,
  className,
  href,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={buttonClasses(variant, className)}
      href={href}
      {...props}
    >
      {children}
    </a>
  );
}

interface TextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
}

export function TextLink({
  children,
  className,
  href,
  ...props
}: TextLinkProps) {
  const classes = [styles.textLink, className].filter(Boolean).join(" ");

  return (
    <a className={classes} href={href} {...props}>
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}
