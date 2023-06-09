import React, { useContext, useState, useEffect } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  // const getDrinks = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch(`${url}${searchTerm.toLowerCase()}`);
  //     const data = await response.json();
  //     const { drinks } = data;
  //     if (drinks) {
  //       const newCocktails = drinks.map((item) => {
  //         const { idDrink, strDrink, strDrinkThumb } = item;
  //         return {
  //           id: idDrink,
  //           name: strDrink,
  //           image: strDrinkThumb,
  //         };
  //       });
  //       setCocktails(newCocktails);
  //       setLoading(false);
  //     } else {
  //       setCocktails([]);
  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    const getData = setTimeout(async () => {
      setLoading(true);
      try {
        const response = await fetch(`${url}${searchTerm.toLowerCase()}`);
        const data = await response.json();
        const { drinks } = data;
        if (drinks) {
          const newCocktails = drinks.map((item) => {
            const { idDrink, strDrink, strDrinkThumb } = item;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
            };
          });
          setCocktails(newCocktails);
          setLoading(false);
        } else {
          setCocktails([]);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }, 1000);
    return () => clearTimeout(getData);
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{ loading, cocktails, setSearchTerm, setLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
