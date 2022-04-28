import { MainHeader } from "./components/MainHeader";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Restaurants } from "./pages/Restaurants";
import { SmallFooter } from "./components/SmallFooter";

const restaurants: Restaurant[] = [
  {
    resName: "Claro",
    chef: "Ran Shmueli",
    imgUrl: "/imgs/dishes/claro.jpg",
    tags: ["popular"],
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
    tags: ["open", "popular"],
  },
  {
    resName: "Lumina",
    chef: "Meir Adoni",
    imgUrl: "/imgs/dishes/lumina.jpg",
    tags: ["new", "popular"],
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
    tags: ["new"],
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

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <MainHeader />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                restaurants={restaurants}
                dishes={dishes}
                chefRes={chefRes}
              />
            }
          />
          <Route
            path="/restaurants"
            element={<Restaurants restaurants={restaurants} />}
          />
        </Routes>
        <SmallFooter/>
      </main>
    </BrowserRouter>
  );
}

export default App;
