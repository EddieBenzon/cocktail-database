import Navbar from "./Components/Navbar";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import About from "./Pages/About";
import CocktailDetails from "./Pages/CocktailDetails";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Cocktail Recipes";
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cocktail/:id" element={<CocktailDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
