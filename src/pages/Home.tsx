import { DishList } from "../components/DishList";
import { IconBanner } from "../components/IconBanner";
import { ChefOfTheWeek } from "../components/ChefOfTheWeek";
import { MainFooter } from "../components/MainFooter";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { useEffect } from "react";

export const Home = (props: {
  restaurants: Restaurant[];
  dishes: Dish[];
  chefRes: Restaurant[];
}) => {
  return (
    <main className="home">
      <Hero />
      <section className="flex column justify-center align-center">
        <h1 className="title">THE POPULAR RESTAURANTS IN EPICURE :</h1>
        <DishList items={props.restaurants} />
        <Link className="all-res-link flex end" to={"/restaurants"}>
          All Restaurants{" >>"}
        </Link>
        <h1 className="title">SIGNATURE DISH OF :</h1>
        <DishList items={props.dishes} />
        <IconBanner />
        <ChefOfTheWeek items={props.chefRes} />
      </section>
      <MainFooter />
    </main>
  );
};
