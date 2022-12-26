import React from "react";
import DollarCards from './../DollarCards/DollarCards'
import Header from "../Header copy/Header";
import "./Home.css";
// import image from './../../../../assets/sticker.png'

const Home = () => {
  return (
    <div className="top_up">
      <Header />
      {/* <div className="sticker container mx-auto">
        <div className="sticker_image">
          <img src={image} alt="" />
        </div>
        <div className="sticker_image">
          <img src={image} alt="" />
        </div>
        <div className="sticker_image">
          <img src={image} alt="" />
        </div>
      </div> */}
      <DollarCards/>
    </div>
  );
};

export default Home;
