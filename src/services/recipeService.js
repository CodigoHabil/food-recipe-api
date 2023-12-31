const { v4: uuid } = require("uuid");

const Recipe = require("../database/Recipe");

const getAllRecipes = (queryFilters) => {
  return Recipe.getAllRecipes(queryFilters);
};

const getOneRecipe = (recipeId) => {
  return Recipe.getOneRecipe(recipeId);
};

const getRecipesById = (recipesID) => {
    return Recipe.getRecipesByIds(recipesID);
}

const createNewRecipe = (newRecipe) => {
  newRecipe = {
    ...newRecipe,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };

  return Recipe.createNewRecipe(newRecipe);
};

const updateOneRecipe = (recipeId, updateRecipe) => {
  updateRecipe = {
    ...updateRecipe,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  return Recipe.updateOneRecipe(recipeId, updateRecipe);
};

const deleteOneRecipe = (recipeId) => {
  Recipe.deleteOneRecipe(recipeId);
};

module.exports = {
  getAllRecipes,
  getOneRecipe,
  createNewRecipe,
  updateOneRecipe,
  deleteOneRecipe,
  getRecipesById
};
