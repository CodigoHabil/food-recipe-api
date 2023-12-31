const express = require("express");
const router = express.Router();

const apicache = require("apicache");

const BookmarkController = require("../../controllers/bookmarkController");
const { route } = require("./recipeRoutes");

const cache = apicache.middleware;

router.get("/", cache("2 minutes"), (req, res) => {
    BookmarkController.getAllBookmarks(req, res);
});

router.post("/", (req, res) => {
    BookmarkController.createNewBookmark(req, res);
});

router.delete("/:bookmarkId", (req, res) => {
    BookmarkController.deleteOneBookmark(req, res);
});

router.patch("/:bookmarkId", (req, res) => {
    BookmarkController.updateOneBookmark(req, res);
});

router.get("/user/:userId", (req, res) => {
    BookmarkController.getAllByUserId(req, res);
});

module.exports = router;