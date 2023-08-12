const DB = require("./db.json");

const getAllRecipes = () => {
  return DB.workouts;
};

module.exports = { getAllRecipes };