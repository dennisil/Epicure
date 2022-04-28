import React from "react";
import SearchIcon from "../assets/img/search-icon.svg";

export const Input = (props: { propClassName: string }) => {
  return (
    <div style={{border: "1px solid black"}} className={`flex space-between ${props.propClassName}`}>
      <img
        src={SearchIcon}
        alt=""
      />
      <input
        className="input"
        type="text"
        name=""
        id=""
        placeholder="Search for restaurant cuisine, chef"
      />
    </div>
  );
};
