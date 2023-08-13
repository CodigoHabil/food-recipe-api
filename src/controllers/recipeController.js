const RecipeService = require("../services/recipeService");

const getAllRecipes = (req, res) => {
  const allRecipes = RecipeService.getAllRecipes();
  if (!allRecipes) {
    res.status(404).send("No recipes found");
    return;
  }
  res.json({ status: "OK", data: allRecipes});
};

const getOneRecipe = (req, res) => {
  const recipeId = req.params.recipeId;

  if(!recipeId) {
    res.status(400).send({status:"Bad Request	", msg:"Missing required information"});
    return;
  }

  const recipe = RecipeService.getOneRecipe(recipeId);

  if(!recipe) {
    res.status(404).send({status:"Not Found", msg:"Recipe not found"});
    return;
  }

  res.status(200).send({status: "OK", data: recipe})
};

const createNewRecipe = (req, res) => {
  if(!req.body.name || !req.body.ingredients || !req.body.instructions) {
    res.status(400).send({status:"Bad Request	", msg:"Missing required information"});
    return;
  }

  const newRecipe = {
    name: req.body.name,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
  }

  RecipeService.createNewRecipe(newRecipe);

  res.status(201).send({status: "OK", data: newRecipe});
};

const updateOneRecipe = (req, res) => {
  const recipeId = req.params.recipeId;
  const recipe = RecipeService.getOneRecipe(recipeId);
  if(!recipe) {
    res.status(404).send({status:"Not Found", msg:"Recipe not found"});
    return;
  }

  const current = req.body;
  
  const updated = {
    ...recipe,
    ...current,
  };


  const updatedRecipe = RecipeService.updateOneRecipe(recipeId, updated);

  if(!updatedRecipe) {
    res.status(404).send({status:"Not Found", msg:"Recipe not found"});
    return;
  }

  res.status(200).send({status: "OK", data: updatedRecipe});
  
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
