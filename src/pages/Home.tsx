import React from "react";
import { DishList } from "../components/DishList";
import { Filter } from "../components/Search";
import { IconBanner } from "../components/IconBanner";
// import { Dish } from "../models/Dish.model";
// import { Restaurant } from "../models/Restaurant.model";
import { ChefOfTheWeek } from "../components/ChefOfTheWeek";

const restaurants: Restaurant[] = [
  {
    resName: "Claro",
    chef: "Ran Shmueli",
    imgUrl: "/imgs/dishes/claro.jpg",
  },
  {
    resName: "Lumina",
    chef: "Meir Adoni",
    imgUrl: "/imgs/dishes/lumina.jpg",
  },
  {
    resName: "Tiger Lily",
    chef: "Yanir Green",
    imgUrl: "/imgs/dishes/tiger-lily.jpg",
  },
  {
    resName: "Claro",
    chef: "Ran Shmueli",
    imgUrl: "/imgs/dishes/claro.jpg",
  },
  {
    resName: "Lumina",
    chef: "Meir Adoni",
    imgUrl: "/imgs/dishes/lumina.jpg",
  },
  {
    resName: "Tiger Lily",
    chef: "Yanir Green",
    imgUrl: "/imgs/dishes/tiger-lily.jpg",
  },
  {
    resName: "Claro",
    chef: "Ran Shmueli",
    imgUrl: "/imgs/dishes/claro.jpg",
  },
  {
    resName: "Lumina",
    chef: "Meir Adoni",
    imgUrl: "/imgs/dishes/lumina.jpg",
  },
  {
    resName: "Tiger Lily",
    chef: "Yanir Green",
    imgUrl: "/imgs/dishes/tiger-lily.jpg",
  },
];

const dishes: Dish[] = [
  {
    resName: "Tiger Lily",
    chef: "Ran Shmueli",
    imgUrl: "/imgs/dishes/pad-ki-mao.jpg",
    price: 90,
    dishName: "Pad Ki Mao",
    ingredients:
      "Shrimps, Glass Noddles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chilli Brown Coconut",
  },
  {
    resName: "Kab Kem",
    chef: "Ran Shmueli",
    imgUrl: "/imgs/dishes/garbanzo.jpg",
    price: 90,
    dishName: "Garbanzo Frito",
    ingredients:
      "Polenta fingers, veal cheek, magic chili cured lemon cream yellow laska",
    special: ["vegan"],
  },
  {
    resName: "Popina",
    chef: "Ran Shmueli",
    imgUrl: "/imgs/dishes/pizza.jpg",
    price: 90,
    dishName: "Smoked Pizza",
    ingredients: 'Basil dough cashew "butter", demi-glace, bison & radish',
    special: ["spicy", "vegan"],
  },
  {
    resName: "Tiger Lily",
    chef: "Ran Shmueli",
    imgUrl: "/imgs/dishes/pad-ki-mao.jpg",
    price: 90,
    dishName: "Pad Ki Mao",
    ingredients:
      "Shrimps, Glass Noddles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chilli Brown Coconut",
  },
  {
    resName: "Kab Kem",
    chef: "Ran Shmueli",
    imgUrl: "/imgs/dishes/garbanzo.jpg",
    price: 90,
    dishName: "Garbanzo Frito",
    ingredients:
      "Polenta fingers, veal cheek, magic chili cured lemon cream yellow laska",
    special: ["vegan"],
  },
  {
    resName: "Popina",
    chef: "Ran Shmueli",
    imgUrl: "/imgs/dishes/pizza.jpg",
    price: 90,
    dishName: "Smoked Pizza",
    ingredients: 'Basil dough cashew "butter", demi-glace, bison & radish',
    special: ["spicy", "vegan"],
  },
];

const chefRes: Restaurant[] = [
  {
    resName: "Onza",
    chef: "Ran Shmueli",
    imgUrl: "/imgs/dishes/onza.jpg",
  },
  {
    resName: "Kitchen Market",
    chef: "Meir Adoni",
    imgUrl: "/imgs/dishes/pizza.jpg",
  },
  {
    resName: "Mashya",
    chef: "Yanir Green",
    imgUrl: "/imgs/dishes/mashya.jpg",
  },
];

export const Home = () => {
  return (
    <main className="home home-layout">
      <div className="hero full">
        {/* <img src={require("../assets/img/hero-picture.jpg")} alt="" /> */}
        <Filter />
      </div>
      <div className="flex justify-center">
        <h1 className="title">THE POPULAR RESTAURANTS IN EPICURE :</h1>
      </div>
      <div className="flex justify-center">
        <DishList items={restaurants} />
      </div>
      <div className="res-link-container flex end">
        <h1 className="">All Restaurants{" >>"}</h1>
      </div>
      <div className="flex justify-center">
        <h1 className="title">SIGNATURE DISH OF :</h1>
      </div>
      <div className="flex justify-center">
        <DishList items={dishes} />
      </div>
      <IconBanner />
      <div className="flex justify-center">
        <ChefOfTheWeek items={chefRes} />
      </div>
    </main>
  );
};
