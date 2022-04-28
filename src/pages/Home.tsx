import { DishList } from "../components/DishList";
import { Filter } from "../components/Search";
import { IconBanner } from "../components/IconBanner";
import { ChefOfTheWeek } from "../components/ChefOfTheWeek";
import { MainFooter } from "../components/MainFooter";
import { Link } from "react-router-dom";

export const Home = (props: {
  restaurants: Restaurant[];
  dishes: Dish[];
  chefRes: Restaurant[];
}) => {
  return (
    <main className="home home-layout">
      <div className="hero full">
        <Filter />
      </div>
      <div className="flex justify-center">
        <h1 className="title">THE POPULAR RESTAURANTS IN EPICURE :</h1>
      </div>
      <div className="flex justify-center">
        <DishList items={props.restaurants} />
      </div>
      <div className="res-link-container flex end">
        <Link className="all-res-link" to={"/restaurants"}>
          All Restaurants{" >>"}
        </Link>
      </div>
      <div className="flex justify-center">
        <h1 className="title">SIGNATURE DISH OF :</h1>
      </div>
      <div className="flex justify-center">
        <DishList items={props.dishes} />
      </div>
      <IconBanner />
      <div className="flex justify-center">
        <ChefOfTheWeek items={props.chefRes} />
      </div>
      <MainFooter />
    </main>
  );
};
