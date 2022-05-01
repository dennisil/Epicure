import userIcon from "../assets/img/user-icon.svg";
import bagIcon from "../assets/img/bag-icon.svg";
import Logo from "../assets/img/logo.jpg";
import Hamburger from "../assets/img/hamburger.svg";
import { Input } from "./Input";
import { NavLink, Link } from "react-router-dom";

export const MainHeader = () => {
  return (
    <header className="home-layout">
      <nav className="flex align-center justify-content space-between" >
        <div style={{width: "100%"}} className="flex align-center space-between">

        <div className="hamburger-container">
          <img src={Hamburger} alt="" />
        </div>
        <div className="logo-container flex align-center justify-content">
          <img className="logo" src={Logo} alt="Logo" />
          <ul className="links flex ">
            <li>
              <Link to={"/"} className="home-link">
                Epicure
              </Link>
            </li>
            <li>
              <NavLink to={"/restaurants"}>Restaurants</NavLink>
            </li>
            <li>
              <NavLink to={"/chefs"}>Chefs</NavLink>
            </li>
          </ul>
        </div>
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
