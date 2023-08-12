const RecipeService = require("../services/recipeService");

const getAllRecipes = (req, res) => {
  const allRecipes = RecipeService.getAllRecipes();
  res.json(allRecipes);
  //res.send("Get all recipes");
};

const getOneRecipe = (req, res) => {
  res.send("Get an existing recipe");
};

const createNewRecipe = (req, res) => {
  res.send("Create a new recipe");
};

const updateOneRecipe = (req, res) => {
  res.send("Update an existing recipe");
};

const deleteOneRecipe = (req, res) => {
  res.send("Delete an existing recipe");
};

module.exports = {
  getAllRecipes,
  getOneRecipe,
  createNewRecipe,
  updateOneRecipe,
  deleteOneRecipe,
};
