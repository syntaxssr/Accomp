import styles from "./ui.module.css";

type IconName = "logo" | "pine";
type IconSize = "sm" | "md" | "lg";

const iconSources: Record<IconName, string> = {
  logo: "/brand/accomp-logo.svg",
  pine: "/brand/accomp-logo.svg",
};

interface IconProps {
  className?: string;
  decorative?: boolean;
  label?: string;
  name: IconName;
  size?: IconSize;
}

export function Icon({
  className,
  decorative = false,
  label,
  name,
  size = "md",
}: IconProps) {
  const classes = [styles.icon, className].filter(Boolean).join(" ");
  const alt = decorative ? "" : (label ?? `${name} icon`);

  return (
    // Native images keep these small decorative brand assets dependency-free.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={alt}
      className={classes}
      data-name={name}
      data-size={size}
      decoding="async"
      height={48}
      src={iconSources[name]}
      width={48}
    />
  );
}
