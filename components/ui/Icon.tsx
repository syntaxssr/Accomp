import styles from "./ui.module.css";

type IconName = "logo" | "pine";
type IconSize = "sm" | "md" | "lg";

const iconSources: Record<IconName, string> = {
  logo: "/brand/accomp-logo-temporary.webp",
  pine: "/brand/accomp-pine-icon.svg",
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
    // The source is a fixed 1.3 kB SVG; a native image avoids shipping the
    // framework image runtime for a decorative brand mark.
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
