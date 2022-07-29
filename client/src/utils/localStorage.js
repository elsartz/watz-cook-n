export const getSavedRecipeIds = () => {
    const savedRecipeIds = localStorage.getItem('saved_recipes')
      ? JSON.parse(localStorage.getItem('saved_recipes'))
      : [];
  
    return savedRecipeIds;
  };
  
  export const saveRecipeIds = (recipeIdArr) => {
    if (recipeIdArr.length) {
      localStorage.setItem('saved_recipe', JSON.stringify(recipeIdArr));
    } else {
      localStorage.removeItem('saved_recipes');
    }
  };
  
  export const removeRecipeId = (recipeId) => {
    const savedRecipeIds = localStorage.getItem('saved_recipes')
      ? JSON.parse(localStorage.getItem('saved_recipes'))
      : null;
  
    if (!savedRecipeIds) {
      return false;
    }
  
    const updatedSavedRecipeIds = savedRecipeIds?.filter((savedRecipeId) => savedRecipeId !== RecipeId);
    localStorage.setItem('saved_recipes', JSON.stringify(updatedSavedRecipeIds));
  
    return true;
  };
  