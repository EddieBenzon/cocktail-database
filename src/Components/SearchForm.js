import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <form className="search-container">
      <h1>Search for your favorite cocktails!</h1>
      <input
        type="text"
        className="input-field"
        ref={searchValue}
        onChange={searchCocktail}
      />
    </form>
  );
};

export default SearchForm;
