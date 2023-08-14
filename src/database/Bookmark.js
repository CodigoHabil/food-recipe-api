const DB = require("./db.json");
const { save } = require("./utils");

const getAllByUserId = (userId) => {
  return DB.bookmarks.find((bookmark) => bookmark.userId === userId);
};

const createNewBookmark = (newBookmark) => {
    const alreadyExists = DB.bookmarks.findIndex(
        (bookmark) => bookmark.userId === newBookmark.userId
    )

    if(alreadyExists !== -1) {
        DB.bookmarks[0] = newBookmark
    } else {
        DB.bookmarks.push(newBookmark)
    }

    //console.log(DB.bookmarks)
    
    save(DB)
    const DBUpdated = require("./db.json");
    console.log(DBUpdated)


    return newBookmark
}

const deleteOneBookmark = (bookmarkId) => {
    const bookmarkIndex = DB.bookmarks.findIndex(
        (bookmark) => bookmark.id == bookmarkId
    );

    if (bookmarkIndex === -1) {
        throw new Error("Bookmark not found", {cause: 404});
    }

    DB.bookmarks.splice(bookmarkIndex, 1);

    save(DB);

}   


module.exports = { getAllByUserId, createNewBookmark, deleteOneBookmark };
