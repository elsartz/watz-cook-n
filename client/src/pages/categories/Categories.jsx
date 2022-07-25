import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import './categories.module.css';

export default function Categories() {
  
  const [category, setCat] = useState([]);
    let params = useParams()

    const getCat = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}=5`
    );
    const recipes = await data.json();
    setCat(recipes.results)

  };

useEffect(() =>{
    getCat(params.type)
}, [params.type]);

  return (
    <div>

      <div className="column-4 foodIcon">
        <h2 className="foodText">Italian</h2>
      </div>

      <div className="column-4 foodIcon">
        <h2 className="foodText">American</h2>
      </div>

      <div className="column-4 foodIcon">
        <h2 className="foodText">Thai</h2>
      </div>

      <div className="column-4 foodIcon">
        <h2 className="foodText">French</h2>
      </div>

      <div className="column-4 foodIcon">
        <h2 className="foodText">Chinese</h2>
      </div>

      <div className="column-4 foodIcon">
        <h2 className="foodText">Japanese</h2>
      </div>

      <div className="column-4 foodIcon">
        <h2 className="foodText">Mexican</h2>
      </div>

      {category.map((item) => {
        return (
          <Card key={item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
          </Card>
        )
      })}
    </div>
  )
};



