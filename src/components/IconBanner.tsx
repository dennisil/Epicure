import React from "react";
// import VeganIcon from "/imgs/special-icon/vegan-icon.svg";
// import SpicyIcon from "/imgs/special-icon/spicy-icon.svg";
// import VegetarianIcon from "/imgs/special-icon/vegetarian.svg";

export const IconBanner = () => {
  return (
    <div style={{ maxWidth: "1440px" }} className="icon-banner full flex justify-center align-center">
      <div className="banner-container full" style={{ maxWidth: "920px" }}>
        <h1>THE MEANING OF OUR ICONS :</h1>
        <div className=" icon-container full flex justify-center align-center">
          <div className="flex justify-center column align-center">
            <img src={"/imgs/special-icon/spicy-icon.svg"} alt="" />
            <h1>Spicy</h1>
          </div>
          <div className="flex justify-center column align-center">
            <img src={"/imgs/special-icon/vegetarian.svg"} alt="" />
            <h1>Vegetarian</h1>
          </div>
          <div className="flex justify-center column align-center">
            <img src={"/imgs/special-icon/vegan-icon.svg"} alt="" />
            <h1>Vegan</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
