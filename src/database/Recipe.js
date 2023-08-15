const { saveDatabase, getAllDatabase, updateOneDatabase, deleteOneDatabase } = require("./utils.js");

const getAllRecipes = (queryFilters) => {
  const { name, ingredients, length, page } = queryFilters;
  let allRecipes = getAllDatabase();

  if (name) {
    allRecipes = allRecipes.filter((recipe) => recipe.name.toLowerCase().includes(name.toLowerCase()));
  }

  if (ingredients) {
    allRecipes = allRecipes.filter(recipe => recipe.ingredients.includes(ingredients))
  }
  if (length) {
    allRecipes = allRecipes.slice(0, length);
  }

  if (page) {
    const offset = (page - 1) * 10;
    allRecipes = allRecipes.slice(offset, offset + 10);
  }



  return allRecipes;

};

const createNewRecipe = (newRecipe) => {
  return saveDatabase(newRecipe);
};

const getOneRecipe = (recipeId) => {
  return getAllDatabase().find((recipe) => recipe.id === recipeId);
};

const getRecipesByIds = (recipesID) => {
  return getAllDatabase().filter((recipe) => recipesID.includes(recipe.id));
};

const updateOneRecipe = (recipeId, updateRecipe) => {
  return updateOneDatabase(recipeId, updateRecipe);
};

const deleteOneRecipe = (recipeId) => {
  deleteOneDatabase(recipeId);
};

module.exports = { getAllRecipes, createNewRecipe, getOneRecipe, updateOneRecipe, deleteOneRecipe, getRecipesByIds };
