import React from "react";
import './Header.css'

const Header = () => {
  return (
    <div className="header_container">
      <div className="header_slider">
        <div className="container mx-auto  p-10 h-[70vh] w-[100vw] overflow-hidden">
          <img
          className="h-full w-full object-cover"
            src="https://mp1st.com/wp-content/uploads/2018/04/fortnite-port-a-fort-min-2.jpg"

            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
