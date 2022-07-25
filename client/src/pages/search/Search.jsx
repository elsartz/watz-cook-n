import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function search() {

    const [searchRecipes, setSearchRecipes] = useState([]);

    let params = useParams();

    const getSearch = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query${name}=5`
    );

    const recipes = await data.json();
    setSearchRecipes(recipes.results)
    console.log(recipes.results)
    }

    useEffect(()=>{
        getSearch(params.search);
    }, [params.search])

  return (
   console.log('')
  )
}


