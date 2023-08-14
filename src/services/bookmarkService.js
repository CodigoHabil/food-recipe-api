const Bookmark = require("../database/Bookmark");
const RecipeService = require("./recipeService");
const BookmarkDto = require("../dto/BookmarkDto")
const { v4: uuid } = require("uuid");


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
