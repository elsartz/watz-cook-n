const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedRecipes` array in User.js
const recipeSchema = new Schema({
  // saved recipe id
  recipeId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  cuisines: {
    type: String,
    required: true,
  },
  extendedIngredients: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  vegetarian: {
    type: Boolean,
  },
  glutenFree:{
    type: Boolean
  },
  healthScore: {
   type: Number
  },
  image: {
    type: String,
  },
  sourceUrl: {
    type: String,
  },
});

module.exports = recipeSchema;
