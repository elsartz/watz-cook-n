import React from 'react'; //, { useState, useEffect }
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_GET_ME } from '../utils/queries';
import { REMOVE_RECIPE } from '../utils/mutations';

import { getMe, deleteRecipe } from '../utils/API';
import Auth from '../utils/auth';
import { removeRecipeId, saveRecipeIds } from '../utils/localStorage';

const savedRecipes = () => {

  const {loading, setUserData} = useQuery(QUERY_GET_ME);
  const [deleteRecipe] = useMutation(REMOVE_RECIPE);
  const userData = setUserData?.me || {};
console.log('userdata', userData);

  const userRecipes = userData.savedRecipes.map(Recipe => Recipe.bookId);
console.log('userbooks', userRecipes);

// const [userData, setUserData] = useState({});
  // use this to determine if `useEffect()` hook needs to run again
  // const userDataLength = Object.keys(userData).length;

  // useEffect(() => {
  //   const getUserData = async () => {
  //     try {
  //       const token = Auth.loggedIn() ? Auth.getToken() : null;

  //       if (!token) {
  //         return false;
  //       }

  //       const response = await getMe(token);

  //       if (!response.ok) {
  //         throw new Error('something went wrong!');
  //       }

  //       const user = await response.json();
  //       setUserData(user);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   getUserData();
  // }, [userDataLength]);

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteRecipe = async (bookId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {  // tried and tried to ...but at the end i was consult for this action
      const response = await deleteRecipe({
        variables: {bookId: bookId},
        // update: cache => {
        //   const setUserData = cache.readQuery({ query: QUERY_GET_ME });
        //   const userDataCache = setUserData.me;
        //   const savedRecipesCache = userDataCache.savedRecipes || [];
        //   const updatedRecipeCache = savedRecipesCache.filter((book) => book.bookId !== bookId);
        //   setUserData.me.savedRecipes = updatedRecipeCache;
        //   cache.writeQuery({ query: QUERY_GET_ME , setUserData: {setUserData: {...setUserData.me.savedRecipes}}})
        // }
      });

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      // const updatedUser = await response.json();
      // setUserData(updatedUser);
      // upon success, remove book's id from localStorage
      removeRecipeId(bookId);
    } catch (err) {
      console.error(err);
    }
  };

  saveRecipeIds(userRecipes);

  // if data isn't here yet, say so
  // if (!userDataLength) {
    if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedRecipes.length
            ? `Viewing ${userData.savedRecipes.length} saved ${userData.savedRecipes.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved books!'}
        </h2>
        <CardColumns>
          {userData.savedRecipes.map((book) => {
            return (
              <Card key={book.bookId} border='dark'>
                {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className='small'>Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteRecipe(book.bookId)}>
                    Delete this Recipe!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default savedRecipes;
