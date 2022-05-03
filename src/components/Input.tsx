import { useState } from "react";
import SearchIcon from "../assets/img/search-icon.svg";

export const Input = (props: { propClassName: string }) => {
  const [searchWord, setSearchWord] = useState("");
  const handleOnChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(ev.target.value);
  };
  return (
    <div
      className={`input-container flex space-between align-center ${props.propClassName}`}
    >
      <img src={SearchIcon} alt="Search" title="Search" className="pointer" />
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
