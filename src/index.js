// In src/index.js
const express = require("express");
const v1RecipeRouter = require("./v1/routes/recipeRoutes");
const v1BookmarkRouter = require("./v1/routes/bookmarkRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use("/api/v1/recipes", v1RecipeRouter);
app.use("/api/v1/bookmarks", v1BookmarkRouter);


app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});