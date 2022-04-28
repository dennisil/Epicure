import { useEffect, useState } from "react";
import { DishList } from "../components/DishList";

export const Restaurants = (props: { restaurants: Restaurant[] }) => {
  const [filterWord, setFilterWord] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOnFilterClick = (filterOption: string) => {
    setFilterWord(filterOption);
  };
  if (props.restaurants) {
    return (
      <main className="res-page">
        <nav className="flex justify-center">
          <ul className="filter-links flex">
            <li>
              <a href="#" onClick={() => handleOnFilterClick("")}>
                All
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleOnFilterClick("new")}>
                New
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleOnFilterClick("popular")}>
                Most Popular
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleOnFilterClick("open")}>
                Open Now
              </a>
            </li>
          </ul>
        </nav>
        <section className="main-res-container flex justify-center">
          <DishList
            items={
              !filterWord
                ? props.restaurants
                : props.restaurants.filter((res) =>
                    res.tags?.includes(filterWord)
                  )
            }
            disableSwipe={true}
            wrap={true}
          />
        </section>
      </main>
    );
  }
  return <div>Loading...</div>;
};
