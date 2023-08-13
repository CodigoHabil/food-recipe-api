const { v4: uuid } = require("uuid");

const Recipe = require("../database/Recipe");

const getAllRecipes = () => {
  return Recipe.getAllRecipes();
};

const getOneRecipe = (recipeId) => {
  return Recipe.getOneRecipe(recipeId);
};

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

const deleteOneRecipe = () => {
  return;
};

module.exports = {
  getAllRecipes,
  getOneRecipe,
  createNewRecipe,
  updateOneRecipe,
  deleteOneRecipe,
};
