import { Routes, Route } from "react-router-dom";
import Home from './Home'
import Cuisine from "./Cuisine";
import SearchRecipes from "./SearchRecipes";

export default function Pages() {

  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cuisine/:type" element={<Cuisine />}/>
    <Route path="/search/:search" element={<SearchRecipes />}/>
  </Routes>
  );
}
