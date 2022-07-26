import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

export default function Cuisine() {
  
  const [cuisine, setCuisine] = useState([]);
    let params = useParams()

    const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=10`
    );
    const recipes = await data.json();
    setCuisine(recipes.results)

  };

useEffect(() =>{
    getCuisine(params.type)
    console.log(params.type)
}, [params.type]);

  return(
  <Grid>
    {cuisine.map((item) =>{
        return(
            <Card key={item.id}>
                <img src={item.image} alt=""/>
                <h4>{item.title}</h4>
            </Card>
        )
    })}
  </Grid>
)};

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;


`;

const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
        box-shadow: 0 1px 1rem -6px #000;
        transition: all 250ms ease-in-out;
  overflow: hidden;
  flex: 1 0 250px;

  &:hover {
      border-radius: 2rem;
    box-shadow: 0 4px 1rem -4px #000;
    transform: translateY(-3px);
    cursor: pointer;
  }
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }


`;