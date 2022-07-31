import gql from 'graphql-tag';

export const QUERY_GET_ME = gql`
  {
    me {
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
