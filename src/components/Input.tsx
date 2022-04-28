import React, { ChangeEvent, useState } from "react";
import SearchIcon from "../assets/img/search-icon.svg";

export const Input = (props: { propClassName: string }) => {
  const [searchWord, setSearchWord] = useState("");
  const handleOnChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(ev.target.value);
  };
  return (
    <div
      style={{ border: "1px solid black" }}
      className={`flex space-between ${props.propClassName}`}
    >
      <img src={SearchIcon} alt="" />
      <input
        onChange={handleOnChange}
        className="input"
        type="text"
        name=""
        id=""
        placeholder="Search for restaurant cuisine, chef"
      />
      {searchWord && <div className="autocomplete-container"></div>}
    </div>
  );
};
