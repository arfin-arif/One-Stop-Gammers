import styles from "./../../styles/top-up_home.module.css";
import image from "./../../public/assets/Images/sticker.png";
import GameCards from "./GameCards/GameCards";
import Header from "./Header/Header";

const Home = () => {
  return (
    <div className={styles.top_up}>
      <Header />
      <div className={`${styles.sticker} container mx-auto`}>
        <div className={styles.sticker_image}>
          <img src={image} alt="" width={200} height={200} />
        </div>
        <div className={styles.sticker_image}>
          <img src={image} alt="" width={200} height={200} />
        </div>
        <div className={styles.sticker_image}>
          <img src={image} alt="" width={200} height={200} />
        </div>
      </div>
      <GameCards />
    </div>
  );
};

export default Home;
