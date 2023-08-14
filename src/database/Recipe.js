const { saveDatabase, getAllDatabase, updateOneDatabase, deleteOneDatabase } = require("./utils.js");

const getAllRecipes = () => {
  return getAllDatabase();
};

const createNewRecipe = (newRecipe) => {
  return saveDatabase(newRecipe);
};

const getOneRecipe = (recipeId) => {
  return getAllDatabase().find((recipe) => recipe.id === recipeId);
};

const getRecipesByIds = (recipesID) => {
  console.log(recipesID);
  return getAllDatabase().filter((recipe) => recipesID.includes(recipe.id));
};

const updateOneRecipe = (recipeId, updateRecipe) => {
  return updateOneDatabase(recipeId, updateRecipe);
};

const deleteOneRecipe = (recipeId) => {
  deleteOneDatabase(recipeId);
};

module.exports = { getAllRecipes, createNewRecipe, getOneRecipe, updateOneRecipe, deleteOneRecipe, getRecipesByIds };
