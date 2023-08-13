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

module.exports = { getAllDatabase, saveDatabase };
