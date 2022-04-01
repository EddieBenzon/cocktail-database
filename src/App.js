import Navbar from "./Components/Navbar";
import SearchForm from "./Components/SearchForm.js";
import Loading from "./Components/Loading";
import Error from "./Error";
import Home from "./Home";
import About from "./About";
import CocktailDetails from "./CocktailDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  const { id } = CocktailDetails;
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
