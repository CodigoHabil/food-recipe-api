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
  res.send("Get an existing recipe");
};

const createNewRecipe = (req, res) => {
  if(!req.body.name || !req.body.ingredients || !req.body.instructions) {
    res.status(400).send({status:"Bad Request	", msg:"Missing required information"});
    return;
  }

  const newRecipe = {
    id: "63tbae02-c147-4f16-u63c-db8bd502b2d4",
    name: req.body.name,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    createdAt: new Date().getTime().toString(),
    updatedAt: new Date().getTime().toString(),
  }

  RecipeService.createNewRecipe(newRecipe);

  res.status(201).send({status: "OK", data: newRecipe});
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
