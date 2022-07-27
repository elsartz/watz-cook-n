import React from 'react';
import { useEffect, useState} from 'react';
import './App.css';
import RecipeCard from './recipeCard';
import Navbar from './navbar';
import searchIcon from './search.svg';


const API_URL = 'https://spoonacular.com?apikey=a35c71b1fb11426bb5a5cea82260fa06'

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState ('');

  const searchRecipe = async (title) => {

    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.search);
  }

  useEffect(() => {
    searchRecipe('salad');
  }, []);
  return (
    <div className='app'>
      
      <Navbar />

      <div className='search'>
        <input
          placeholder='search for recipies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img 
          src={searchIcon}
          alt='search'
          onClick={() => searchRecipe(searchTerm)}
        />
      </div>

        {
          recipes?.length > 0

          ?(
            <div className='container'>
            {recipes.map((recipe) => (
              <RecipeCard recipe={recipe} />
            ))} 
          </div>
          ) :
          (
            <div className='empty'>
              <h2>No recipes found</h2>
              </div>
          )
        }

    </div>
  );
}

export default App;
