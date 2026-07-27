import Image from "next/image";
import styles from "./ui.module.css";

type IconName = "pine";
type IconSize = "sm" | "md" | "lg";

const iconSources: Record<IconName, string> = {
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
    <Image
      alt={alt}
      className={classes}
      data-size={size}
      height={48}
      src={iconSources[name]}
      width={48}
    />
  );
}
