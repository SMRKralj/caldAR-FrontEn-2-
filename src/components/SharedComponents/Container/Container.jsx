import styles from "./Container.module.css";

export default function Card({ title, children }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>{title}</div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
