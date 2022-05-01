// import VeganIcon from "/imgs/special-icon/vegan-icon.svg";
// import SpicyIcon from "/imgs/special-icon/spicy-icon.svg";
// import VegetarianIcon from "/imgs/special-icon/vegetarian.svg";

export const IconBanner = () => {
  return (
    <section
      className="icon-banner flex justify-center align-center"
    >
      <div className="banner-container">
        <h1>THE MEANING OF OUR ICONS :</h1>
        <div className=" icon-container full flex justify-center align-center">
          <div className="flex justify-center column align-center">
            <img src={"/imgs/special-icon/spicy-icon.svg"} alt="Spicy" />
            <h1>Spicy</h1>
          </div>
          <div className="flex justify-center column align-center">
            <img src={"/imgs/special-icon/vegetarian.svg"} alt="Vegetarian" />
            <h1>Vegetarian</h1>
          </div>
          <div className="flex justify-center column align-center">
            <img src={"/imgs/special-icon/vegan-icon.svg"} alt="Vegan" />
            <h1>Vegan</h1>
          </div>
        </div>
      </div>
    </section>
  );
};
