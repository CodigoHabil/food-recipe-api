const { saveDatabase, getAllDatabase } = require("./utils.js");

const getAllRecipes = () => {
  return getAllDatabase();
};

const createNewRecipe = (newRecipe) => {
  return saveDatabase(newRecipe);
};

module.exports = { getAllRecipes, createNewRecipe };
