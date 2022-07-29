import gql from 'graphql-tag';

export const GET_ME = gql`
  {
    me {
      _id
      firstName
      lastName
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
`;
