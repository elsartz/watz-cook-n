import gql from 'graphql-tag';

// mutation for logged in user
export const LOGIN = gql`
    mutation loginUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        token
            user {
                _id
                username
                email
                recipeCount
                savedRecipes {
                    recipeId
                    title
                    cuisines
                    extendedIngredients
                    summary
                    instructions
                    vegetarian
                    glutenFree
                    healthScore
                    image
                    sourceUrl
         }
       }
     }
   }
`;

// mutation to add user 
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
        token
            user {
                _id
                username
                email
                recipeCount
                savedRecipes {
                    recipeId
                    title
                    cuisines
                    extendedIngredients
                    summary
                    instructions
                    vegetarian
                    glutenFree
                    healthScore
                    image
                    sourceUrl
                }
            }
        }
    }
`;

// mutation to save recipes
export const SAVE_RECIPES = gql`
    mutation saveRecipe($input: recipeInput!) {
        saveRecipe(input: $input) {
            _id
            username
            email
            savedRecipes {
                recipeId
                    title
                    cuisines
                    extendedIngredients
                    summary
                    instructions
                    vegetarian
                    glutenFree
                    healthScore
                    image
                    sourceUrl
            }
        }
    }
`;

// mutation to remove recipes
export const REMOVE_Recipe = gql`
    mutation removeRecipe($recipeId: String!) {
        removeRecipe(recipeId: $recipeId) {
            _id
            username
            email
            recipesCount
            savedRecipes {
                recipeId
                    title
                    cuisines
                    extendedIngredients
                    summary
                    instructions
                    vegetarian
                    glutenFree
                    healthScore
                    image
                    sourceUrl
            }
        }
    }
`;