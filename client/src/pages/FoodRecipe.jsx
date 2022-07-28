import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function FoodRecipe() {
  let params = useParams();
  const [details, setDetails] = useState();

  const getRecipes = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)

    const detailData = await data.json();
    setDetails(detailData);

    console.log(detailData)
  };

  useEffect(() => {
    getRecipes();
  }, [params.id]);

  return (
    <div>
      <h2>Recipes</h2>
      <h1>{details.title}</h1>
    </div>
  );
}
