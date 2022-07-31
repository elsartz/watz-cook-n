// route to get logged in user's info (needs the token)
const apiKey = `b562a65d069047d1ae325d35c9f77d52`  //process.env.REACT_APP_API_KEY
export const getMe = (token) => {
  return fetch('/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

// save recipe data for a logged in user
export const saveRecipe = (recipeData, token) => {
  return fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(recipeData),
  });
};

// remove saved recipe data for a logged in user
export const deleteRecipe = (recipeId, token) => {
  return fetch(`/api/users/recipe/${recipeId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

// make a search to google recipes api
// https://www.googleapis.com/recipes/v1/volumes?q=harry+potter
export const searchFoodRecipe = (query) => {
  // return fetch(`https://www.googleapis.com/recipes/v1/volumes?q=${query}`);
  
  console.log('apikey:',process.env.REACT_APP_API_KEY)
  return fetch(     // ${process.env.REACT_APP_API_KEY}
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&number=10`
  );
};

export const searchFoodDetail = (id) => {
  return fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
  );
};
