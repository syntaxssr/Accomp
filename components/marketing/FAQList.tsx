import type { FAQItem } from "@/content/site-content";
import styles from "./faq-list.module.css";

interface FAQListProps {
  items: FAQItem[];
}

export function FAQList({ items }: FAQListProps) {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <details key={item.question}>
          <summary>
            <span>{item.question}</span>
            <span aria-hidden="true">+</span>
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
