import styles from "./StatsInfo.module.css";
const StatsInfo = () => {
  return (
    <div className={styles.rating}>
      <div className={styles.ratingWrapper}>
        <div className={styles.rating1}>Rating</div>
      </div>
      <label className={styles.wrapper} id="rating">
        <b className={styles.b}>4.5</b>
      </label>
    </div>
  );
};

export default StatsInfo;
