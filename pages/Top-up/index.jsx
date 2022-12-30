import styles from "./../../styles/top-up_home.module.css";
import image from "./../../public/assets/Images/sticker.png";
import GameCards from "./GameCards/GameCards";
import Header from "./Header/Header";

const Home = () => {
  return (
    <div className={styles.top_up}>
      <Header />     
      <GameCards />
    </div>
  );
};

export default Home;
