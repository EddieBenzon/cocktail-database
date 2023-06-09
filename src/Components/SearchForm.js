import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm, setLoading } = useGlobalContext();

  return (
    <div className="search-container">
      <h1>Search for your favorite cocktails!</h1>
      <input
        type="text"
        className="input-field"
        onChange={(e) => {
          setLoading(true);
          setSearchTerm(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchForm;
