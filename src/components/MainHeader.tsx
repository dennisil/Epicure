import userIcon from "../assets/img/user-icon.svg";
import bagIcon from "../assets/img/bag-icon.svg";
import { Input } from "./Input";
import { NavLink } from "react-router-dom";

export const MainHeader = () => {
  return (
    <header className="home-layout full">
      <nav className="flex align-center justify-content space-between">
        <div className="logo-container flex align-center justify-content">
          <img
            className="logo"
            src={require("../assets/img/logo.jpg")}
            alt=""
          />
          <ul className="links flex ">
            <li>
              <NavLink to={"/"} className="home-link">
                Epicure
              </NavLink>
            </li>
            <li>
              <NavLink to={"/restaurants"}>Restaurants</NavLink>
            </li>
            <li>
              <NavLink to={"/chefs"}>Chefs</NavLink>
            </li>
          </ul>
        </div>
        <div className="search-container flex">
          <Input propClassName={"header-search"} />
          <img src={userIcon} alt="" />
          <img src={bagIcon} alt="" />
        </div>
      </nav>
    </header>
  );
};
