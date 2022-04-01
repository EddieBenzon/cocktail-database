import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Components/Loading";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const CocktailDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  const { setSearchTerm } = useGlobalContext();
  const cleanUp = () => {
    setSearchTerm("a");
  };
  useEffect(() => {
    setLoading(true);
    const getCocktail = async () => {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strInstructions: instructions,
            strIngredient1: ingredient1,
            strIngredient2: ingredient2,
            strIngredient3: ingredient3,
            strIngredient4: ingredient4,
            strIngredient5: ingredient5,
            strIngredient6: ingredient6,
            strMeasure1: measure1,
            strMeasure2: measure2,
            strMeasure3: measure3,
            strMeasure4: measure4,
            strMeasure5: measure5,
            strMeasure6: measure6,
          } = data.drinks[0];
          const ingredients = [
            ingredient1,
            ingredient2,
            ingredient3,
            ingredient4,
            ingredient5,
            ingredient6,
          ];
          const measures = [
            measure1,
            measure2,
            measure3,
            measure4,
            measure5,
            measure6,
          ];
          const newCocktail = {
            name,
            image,
            instructions,
            ingredients,
            measures,
          };
          setCocktail(newCocktail);
          setLoading(false);
        } else {
          setCocktail(null);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getCocktail();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2>No cocktails to display</h2>;
  }
  const { name, image, instructions, ingredients, measures } = cocktail;
  return (
    <main className="details-main">
      <img src={image} alt={name} className="details-img" />
      <div className="details-container">
        <div className="details-container-upper">
          <h2 className="details-title">{name}</h2>
          <h3>Ingredients :</h3>
          <div className="ingredient-container">
            <div className="ingredients">
              {ingredients.map((item, index) => {
                return item ? <p key={index}>{item}</p> : null;
              })}
            </div>
            <div className="ingredients">
              {measures.map((item, index) => {
                return item ? <p key={index}>{item}</p> : null;
              })}
            </div>
          </div>
          <h3>Preparation :</h3>
          <p>{instructions}</p>
        </div>
        <div className="details-container-lower">
          <Link to="/" className="btn-container">
            <button className="btn-details-details" onClick={cleanUp}>
              Back to Search
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default CocktailDetails;
