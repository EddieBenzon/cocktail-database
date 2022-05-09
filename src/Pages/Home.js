import React from "react";
import CocktailList from "../Components/CocktailList";
import SearchForm from "../Components/SearchForm";

const Home = () => {
  return (
    <div className="home-main">
      <SearchForm />
      <CocktailList />
    </div>
  );
};

export default Home;
