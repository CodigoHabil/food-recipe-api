const DB = require("./db.json");
const { save } = require("./utils");

const getAllByUserId = (userId) => {
  return DB.bookmarks.find((bookmark) => bookmark.userId === userId);
};

const createNewBookmark = (newBookmark) => {
    console.log(newBookmark)
    const alreadyExists = DB.bookmarks.findIndex(
        (bookmark) => bookmark.userId === newBookmark.userId
    )

    if(alreadyExists !== -1) {
        console.log("already exists", alreadyExists)
        DB.bookmarks[0] = newBookmark
        console.log(DB.bookmarks)

    } else {
        DB.bookmarks.push(newBookmark)
    }


    save(DB)

    console.log("new bookmark")
    console.log(DB.bookmarks)

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
