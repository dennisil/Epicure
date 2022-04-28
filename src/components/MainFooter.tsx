import React from "react";
import AppleIcon from "../assets/img/companies-logo/apple.svg";
import GoogleIcon from "../assets/img/companies-logo/google-store.svg";

export const MainFooter = () => {
  return (
    <footer className="home-layout flex column space-around ">
      <section className="footer-content flex space-around">
        <div>
          <h1>ABOUT US :</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
            vel justo fermentum bibendum non eu ipsum. Cras porta malesuada
            eros, eget blandit turpis suscipit at. Vestibulum sed massa in magna
            sodales porta. Vivamus elit urna, dignissim a vestibulum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
            vel justo fermentum bibendum no eu ipsum. Cras porta malesuada eros.
          </p>
          <div className="downloads-container flex align-center">
            <div className="download-container flex justify-center align-center">
              <img src={AppleIcon} alt="" />
              <div className="download-text">
                <p>Download on the</p>
                <span>App Store</span>
              </div>
            </div>
            <div className="download-container flex justify-center align-center">
              <img src={GoogleIcon} alt="" />
              <div className="download-text">
                <p>Get it on</p>
                <span>Google Play</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex align-center">
          <img
            className="logo"
            src={require("../assets/img/about-logo.png")}
            alt=""
          />
        </div>
      </section>
      <div className="contact-container flex justify-center align-center full">
        <h2>Contact Us</h2>
        <h2>Term of Use</h2>
        <h2>Privacy Policy</h2>
      </div>
    </footer>
  );
};
