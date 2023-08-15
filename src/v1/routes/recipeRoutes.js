const express = require("express");
const router = express.Router();

const apicache = require("apicache");
const RecipeController = require("../../controllers/recipeController");

const cache = apicache.middleware;

router.get("/", cache("2 minutes") , (req, res) => {
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
