import { MainHeader } from "./components/MainHeader";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Restaurants } from "./pages/Restaurants";
import { SmallFooter } from "./components/SmallFooter";
import { RestaurantDetails } from "./pages/RestaurantDetails";
import { dishService } from "./services/dishService";
import { useEffect, useState } from "react";
import { restaurantService } from "./services/restaurantService";

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
function App() {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const getDishes = async () => {
    let tempDishes = await dishService.query();
    setDishes(tempDishes);
  };
  const getRestaurants = async () => {
    let tempRestaurants = await restaurantService.query();
    setRestaurants(tempRestaurants);
  };
  useEffect(() => {
    getDishes();
    getRestaurants();
  }, []);

  return (
    <main className="App">
      <MainHeader />
      <Routes>
        <Route
          path="/"
          element={
            <Home restaurants={restaurants} dishes={dishes} chefRes={chefRes} />
          }
        />
        <Route
          path="/restaurants"
          element={<Restaurants restaurants={restaurants} />}
        />
        <Route path="/restaurant/:resId" element={<RestaurantDetails />} />
      </Routes>
      <SmallFooter />
    </main>
  );
}

export default App;
