class BookmarkDto {
  constructor(bookmark, recipes) {
    this.id = bookmark.id;
    this.userId = bookmark.userId;
    this.createdAt = bookmark?.createdAt;
    this.updatedAt = bookmark?.updatedAt;
    this.recipes = recipes;
  }
}

module.exports = BookmarkDto;