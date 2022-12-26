import React from "react";
import Header from "../../Header/Header";
import image from "./../../../../public/assets/Images/sticker.png";
import "./Home.module.css";

const Home = () => {
  return (
    <div className="top_up">
      <Header />
      <div className="sticker container mx-auto">
        <div className="sticker_image">
          <img src={image} alt="" />
        </div>
        <div className="sticker_image">
          <img src={image} alt="" />
        </div>
        <div className="sticker_image">
          <img src={image} alt="" />
        </div>
      </div>
      {/* <GameCards /> */}
      {/* <DollarCards /> */}
    </div>
  );
};

export default Home;
