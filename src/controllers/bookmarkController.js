const BookmarkService = require("../services/bookmarkService");

const getAllBookmarks = async (req, res) => {
  res.send({ status: "OK", data: "bookmarks" });
};

const getAllByUserId = async (req, res) => {
  const userId = req.params.userId;
  try {
    const bookmarks = BookmarkService.getAllByUserId(userId);
    if (!bookmarks || bookmarks.length === 0) {
      res.status(404).send({ status: "Not Found", msg: "Bookmarks not found" });
      return;
    }

    res.status(200).send({ status: "OK", data: bookmarks });
  } catch (error) {
    res
      .status(500)
      .send({ status: "Internal Server Error", msg: "Something went wrong"});
  }
};

const createNewBookmark = async (req, res) => {
    const newBookmark = {
        userId: req.body.userId,
        recipesID: req.body.recipesID
    }

    if(!newBookmark.userId || !newBookmark.recipesID) {
        res.status(400).send({ status: "Bad Request", msg: "Missing required information" })
        return
    }

    try {
        const bookmark = BookmarkService.createNewBookmark(newBookmark)
        res.status(201).send({ status: "Created", data: bookmark })
    } catch (error) {
        res.status(500).send({ status: "Internal Server Error", msg: "Something went wrong" })
    }
}

const deleteOneBookmark = async (req, res) => {
    const bookmarkId = req.params.bookmarkId;
    console.log(bookmarkId)
    try {
        BookmarkService.deleteOneBookmark(bookmarkId)
        res.status(200).send({ status: "OK", msg: "Bookmark deleted" })
    } catch (error) {
        if(error.cause === 404) {
            res.status(404).send({ status: "Not Found", msg: "Bookmark not found" })
            return
        }
        res.status(500).send({ status: "Internal Server Error", msg: "Something went wrong",})
    }
    
}


module.exports = { getAllByUserId, getAllBookmarks, createNewBookmark, deleteOneBookmark };
