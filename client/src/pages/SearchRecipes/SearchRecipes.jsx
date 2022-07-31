import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { FaSearch } from 'react-icons/fa';
import Auth from '../../utils/auth';
import { searchFoodRecipe } from '../../utils/API';
import { saveRecipeIds, getSavedRecipeIds } from '../../utils/localStorage';
import { useMutation } from '@apollo/client';
import { SAVE_RECIPES } from '../../utils/mutations';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';

import {MainWrapper, Wave, Container, FormStyle, Layout, Grid, Card} from './SearchRecipes.style'

import wave from '../../assets/svg/wave.svg'
export default function SearchRecipes() {

    // const [saveRecipe, { error }] = useMutation(SAVE_RECIPES);
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [savedRecipeIds, setSavedRecipeIds] = useState(getSavedRecipeIds());

    let params = useParams();

    useEffect(() => {
        saveRecipeIds(savedRecipeIds);
      }, [params.id]);

       // create method to search for recipes
      const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        if (!searchInput) {
          return false;
        }
   
        try {
          const response = await searchFoodRecipe(searchInput);
    
          if (!response.ok) {
            throw new Error('something went wrong!');
          }
        
          const  {results}  = await response.json();
    
          const recipeData = results.map((recipe) => ({
            recipeId: recipe.id,
            title: recipe.title,
            image: recipe.image || '',
   
        }));

          console.log(recipeData)
          setSearchedRecipes(recipeData);
          setSearchInput('');
        } catch (err) {
          console.error(err);
        }
      };

  //   // create function to handle saving a recipe to our database
  //  const handleSaveRecipe = async (recipeId) => {
  //   const recipeInput = searchedRecipes.find((recipe) => recipe.recipeId === recipeId);

  //   // get token
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     const { data } = await saveRecipe({
  //       variables: { input: recipeInput }
  //     });

  //     if (error) {
  //       console.log(data)
  //       throw new Error('something went wrong!');
  //     }

  //     // if book successfully saves to user's account, save book id to state
  //     setSavedRecipeIds([...savedRecipeIds, recipeInput.recipeId]);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
    
  return (
   <MainWrapper>
   <Container>
    <FormStyle onSubmit={handleFormSubmit}>
    <div>
          <FaSearch />
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            name='searchInput'
            type='text'
            value={searchInput}
            size='large'
            placeholder='search for recipe'
          />
        </div>
        <Layout>
          <Button
            type='submit'
            size='large'
            variant='success'
            onClick={handleFormSubmit}            //{submitHandler}
          >
            <span>Search</span>
          </Button>
        </Layout>
    </FormStyle>
   </Container>

   <Grid>
      {searchedRecipes.map((recipe) => {
        return (
          <Card key={recipe.recipeId}>
            <Link to={'/recipe/' + recipe.recipeId}>
              <img src={recipe.image} alt={`The cover for ${recipe.title}`} variant='top' />
              <p>{recipe.title}</p>
            </Link>
          </Card>
        );
      })}
    </Grid>

      <Wave src={wave}>
      </Wave>
    
   </MainWrapper>
  )
}
