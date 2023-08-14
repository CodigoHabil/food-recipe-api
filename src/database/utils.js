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

  save(DB);

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

  save(DB);

  return DB.recipes[recipeIndex];
}

const deleteOneDatabase = (recipeId) => {
  const recipeIndex = DB.recipes.findIndex(
    (recipe) => recipe.id == recipeId
  );

  if (recipeIndex === -1) {
    throw new Error("Recipe not found");
  }

  DB.recipes.splice(recipeIndex, 1);

  save(DB);
}

const save = (json) => {
  try {
    fs.writeFileSync("./src/database/db.json", JSON.stringify(json, null, 2), {
      encoding: "utf-8",
    });
  } catch (error) {
    console.log(error);
    throw new Error({ error:500, msg:"Error saving the database"});
  }
}

module.exports = { getAllDatabase, saveDatabase, updateOneDatabase, deleteOneDatabase, save };
