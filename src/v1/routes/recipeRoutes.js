const express = require("express");
const router = express.Router();

const RecipeController = require("../../controllers/recipeController");

router.get("/", (req, res) => {
  RecipeController.getAllRecipes(req, res);
});

router.get("/:recipeId", (req, res) => {
  res.send("Get an existing recipe");
});

router.post("/", (req, res) => {
    RecipeController.createNewRecipe(req, res);
});

router.patch("/:recipeId", (req, res) => {
  res.send("Update an existing recipe");
});

router.delete("/:recipeId", (req, res) => {
  res.send("Delete an existing recipe");
});

module.exports = router;
