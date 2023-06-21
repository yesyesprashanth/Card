import styles from "./Logo.module.css";
const Logo = () => {
  return (
    <div className={styles.logo}>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <button className={styles.free}>
        <div className={styles.free1}>Free</div>
      </button>
    </div>
  );
};

export default Logo;
