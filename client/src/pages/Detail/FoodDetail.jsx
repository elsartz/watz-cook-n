import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CardWrapper,
  Card,
  Title,
  Wrapper,
  Button,
  Info,
} from './FoodDetail.style';
import { searchFoodDetail } from '../../utils/API';
import { saveRecipeIds, getSavedRecipeIds } from '../../utils/localStorage';
import { useMutation } from '@apollo/client';
import { SAVE_RECIPES } from '../../utils/mutations';
import { ListItemAvatar } from '@mui/material';
import Auth from '../../utils/auth';

export default function FoodDetail() {
  let params = useParams();
  let recipeData = [];

  const [saveRecipe, { error }] = useMutation(SAVE_RECIPES);
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [savedRecipeIds, setSavedRecipeIds] = useState(getSavedRecipeIds());

  // const [details, setDetails] = useState();
  const [activeTab, setActiveTab] = useState('instructions');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getRecipes();
    saveRecipeIds(savedRecipeIds);
  }, [params.id]);

  const getRecipes = async () => {
    try {
      const response = await searchFoodDetail(params.id);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const recipe = await response.json();

      recipeData = {
        recipeId: recipe.id,
        title: recipe.title,
        cuisines: recipe.cuisines,
        extendedIngredients: recipe.extendedIngredients,
        summary: recipe.summary,
        instructions: recipe.instructions,
        vegetarian: recipe.vegetarian,
        glutenFree: recipe.glutenFree,
        healthScore: recipe.healthScore,
        image: recipe.image || '',
        sourceUrl: recipe.sourceUrl,
      };
      // console.log(results)

      setSearchedRecipes(recipeData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };
  console.log('searchedRecipes',searchedRecipes);
  // create function to handle saving a recipe to our database
  const handleSaveRecipe = async (recipeId) => {
    const recipeInput = searchedRecipes.find(
      (recipe) => {recipeId === recipe.recipeId}
    );
    // const recipeInput = searchedRecipes    // .recipeId
    console.log('recipeInput',recipeInput)

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await saveRecipe({
        variables: { input: recipeInput },
      });

      if (error) {
        console.log(data);
        throw new Error('something went wrong!');
      }

      // if book successfully saves to user's account, save book id to state
      setSavedRecipeIds([...savedRecipeIds, recipeInput.recipeId]);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <p>Data is loading...</p>;
  }

  return (
    <Wrapper>
      <CardWrapper>
        <Card>
          <Title>
            <header>
              <h2>{searchedRecipes.title}</h2>
            </header>
          </Title>
          <img src={searchedRecipes.image} alt='' />
          <h2>More...</h2>
          <h3> Healthscore:</h3>
          <p>{searchedRecipes.healthScore}</p>
          <h3>Glutenfree:</h3>
          <p> {searchedRecipes.glutenFree ? 'Yes' : 'No'}</p>
          <h3>Vegetarian:</h3>
          <p> {searchedRecipes.vegetarian ? 'Yes' : 'No'}</p>
        </Card>
      </CardWrapper>
      <Info>
        <Button
          className={activeTab === 'instructions' ? 'active' : ''}
          onClick={() => setActiveTab('instructions')}
        >
          Instruction
        </Button>
        <Button
          className={activeTab === 'ingredients' ? 'active' : ''}
          onClick={() => setActiveTab('ingredients')}
        >
          Ingredients
        </Button>
        <Button
          // className={activeTab === 'ingredients' ? 'active' : ''}
          onClick={() => handleSaveRecipe('Add Recipe')}
        >
          Add Recipe
        </Button>
        {activeTab === 'instructions' && (
          <div>
            <h3
              dangerouslySetInnerHTML={{ __html: searchedRecipes.summary }}
            ></h3>
            <h3
              dangerouslySetInnerHTML={{ __html: searchedRecipes.instructions }}
            ></h3>
          </div>
        )}

        {activeTab === 'ingredients' && (
          <ul>
            {searchedRecipes.extendedIngredients.map((items) => (
              <li key={items.id}>{items.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </Wrapper>
  );
}
