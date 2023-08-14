const express = require("express");
const router = express.Router();

const RecipeController = require("../../controllers/recipeController");

router.get("/", (req, res) => {
  RecipeController.getAllRecipes(req, res);
});

router.get("/:recipeId", (req, res) => {
  RecipeController.getOneRecipe(req, res);
});

router.post("/", (req, res) => {
  RecipeController.createNewRecipe(req, res);
});

router.patch("/:recipeId", (req, res) => {
  RecipeController.updateOneRecipe(req, res);
});

router.delete("/:recipeId", (req, res) => {
  RecipeController.deleteOneRecipe(req, res);
});

module.exports = router;
