const { saveDatabase, getAllDatabase, updateOneDatabase } = require("./utils.js");

const getAllRecipes = () => {
  return getAllDatabase();
};

const createNewRecipe = (newRecipe) => {
  return saveDatabase(newRecipe);
};

const getOneRecipe = (recipeId) => {
  return getAllDatabase().find((recipe) => recipe.id === recipeId);
};

const updateOneRecipe = (recipeId, updateRecipe) => {
  return updateOneDatabase(recipeId, updateRecipe);
};

module.exports = { getAllRecipes, createNewRecipe, getOneRecipe, updateOneRecipe };
