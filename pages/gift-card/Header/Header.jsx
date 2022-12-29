import React from "react";
import styles from "./../../../styles/gift_card_header.module.css";

const Header = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.header_slider}>
        <div className="container mx-auto  p-10 h-[70vh] w-[100vw] overflow-hidden">
          {/* <img
            className="h-full w-full object-cover"
            src="https://cavendish.co.za/content/uploads/gcards.jpg"
            alt=""
            width={500}
            height={500}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
