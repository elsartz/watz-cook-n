import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Cuisine from './Cuisine';
import SearchRecipes from './SearchRecipes';
import FoodRecipe from './FoodRecipe';

export default function Pages() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cuisine/:type' element={<Cuisine />} />
      <Route path='/search/:name' element={<SearchRecipes />} />
      <Route path='/recipe/:id' element={<FoodRecipe />} />
    </Routes>
  );
}
