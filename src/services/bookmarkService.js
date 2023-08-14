const Bookmark = require("../database/Bookmark");
const RecipeService = require("./recipeService");
const { v4: uuid } = require("uuid");

class BookmarkDto {
  constructor(bookmark, recipes) {
    this.id = bookmark.id;
    this.userId = bookmark.userId;
    this.createdAt = bookmark?.createdAt;
    this.updatedAt = bookmark?.updatedAt;
    this.recipes = recipes;
  }
}


const getAllByUserId = (userId) => {
  const bookmark = Bookmark.getAllByUserId(userId)

  if(!bookmark) {
    return []  
  }

  const recipesID = bookmark.recipesID

  const recipes = RecipeService.getRecipesById(recipesID)

  return new BookmarkDto(bookmark, recipes)
};

const createNewBookmark = (newBookmark) => {
  const bookmarkObj = {
    ...newBookmark,
    id: uuid(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  const bookmark = Bookmark.createNewBookmark(bookmarkObj)
  const recipesID = bookmark.recipesID

  const recipes = RecipeService.getRecipesById(recipesID)

  return  new BookmarkDto(bookmark, recipes)
}

const deleteOneBookmark = (bookmarkId) => {
  return Bookmark.deleteOneBookmark(bookmarkId)
};



module.exports = { getAllByUserId, deleteOneBookmark, createNewBookmark }
