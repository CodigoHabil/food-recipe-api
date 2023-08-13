const Recipe = require("../database/Recipe");

const getAllRecipes = () => {
  return Recipe.getAllRecipes();
};

const getOneRecipe = () => {
  return;
};

const createNewRecipe = (newRecipe) => {
    return Recipe.createNewRecipe(newRecipe);
};

const updateOneRecipe = () => {
  return;
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
