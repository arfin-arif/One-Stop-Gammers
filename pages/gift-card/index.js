import React from "react";
import DollarCards from "./DollarCards/DollarCards";
import Header from "./Header/Header";
import styles from "./../../styles/gift_card.module.css";
// import { Head } from 'next/document';

const Home = () => {
  return (
    <div className={styles.top_up}>
      <Header />
      <DollarCards />
    </div>
  );
};

export default Home;
