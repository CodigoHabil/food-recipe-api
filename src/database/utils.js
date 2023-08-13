const fs = require("fs");

const DB = require("./db.json");

const getAllDatabase = () => {
  return DB.recipes;
};

const saveDatabase = (newRecipe) => {
  const alreadyExists = DB.recipes.find(
    (recipe) => recipe.name === newRecipe.name
  );

  if (alreadyExists) {
    return;
  }
  
  DB.recipes.push(newRecipe);
  fs.writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2), {
    encoding: "utf-8",
  });

  return newRecipe;
};

const updateOneDatabase = (updateId, updateRecipe) => {
  console.log(updateRecipe);
  const recipeIndex = DB.recipes.findIndex(
    (recipe) => recipe.id == updateId
  );

  console.log(recipeIndex);
  
  if (recipeIndex === -1) {
    throw new Error("Recipe not found");
  }

  DB.recipes[recipeIndex] = {
    ...DB.recipes[recipeIndex],
    ...updateRecipe,
  };

  fs.writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2), {
    encoding: "utf-8",
  });

  return DB.recipes[recipeIndex];
}

module.exports = { getAllDatabase, saveDatabase, updateOneDatabase };
