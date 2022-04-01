import React from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import Cocktail from "./Cocktail";

const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h4 className="no-cocktails-matched">
        No cocktails matched your search term
      </h4>
    );
  }
  return (
    <section className="cocktail-grid">
      {cocktails.map((item) => {
        return <Cocktail key={item.id} {...item} />;
      })}
    </section>
  );
};

export default CocktailList;
