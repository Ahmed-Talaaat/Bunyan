
import styles from "./CardStatus.module.css";

function CardStatus({ counter, title, icon }) {
  return (
    <div className={`${styles.cardStatus} d-flex align-items-center justify-content-between p-3`}>

      <div className="d-flex flex-column align-items-center gap-4">
        <i className={`${icon} ${styles.icon}`}></i>
        <span className={styles.title}>{title}</span>
      </div>

      <div className="d-flex flex-column align-items-center gap-2">
        <span className={styles.counter}>{counter}</span>
        <span className={styles.title}>{title}</span>
      </div>

    </div>
  );
}

export default CardStatus;


