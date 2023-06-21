import Logo from "../components/Logo";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";
import StatsInfo from "../components/StatsInfo";
import Icon from "../components/Icon";
import styles from "./Card.module.css";
const Card = () => {
  return (
    <div className={styles.card}>
      <Logo />
      <div className={styles.names}>
        <div className={styles.cardTitle}>
          <SubTitle />
        </div>
        <h4 className={styles.cardname} id="title">
          <Title />
        </h4>
      </div>
      <div className={styles.info}>
        <StatsInfo />
        <div className={styles.size}>
          <div className={styles.sizeWrapper}>
            <div className={styles.size1}>Size</div>
          </div>
          <label className={styles.mbWrapper} id="size">
            <b className={styles.mb}>23.5 mb</b>
          </label>
        </div>
        <div className={styles.downloads}>
          <div className={styles.sizeWrapper}>
            <div className={styles.size1}>Downloads</div>
          </div>
          <label className={styles.mWrapper} htmlFor="downloads">
            <b className={styles.mb}>5m</b>
          </label>
        </div>
      </div>
      <button className={styles.downArrow}>
        <Icon />
      </button>
    </div>
  );
};

export default Card;
