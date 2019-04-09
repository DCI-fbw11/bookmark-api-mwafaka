const db = require("../db")

module.exports = {
  getBookmarks: (req, res, next) => {
    res.locals.response = Object.assign({}, res.locals.response || {}, {
      bookmark: db.get("bookmarks").value()
    })

    next()
  },
  getBookmarkByID: (req, res, next) => {
    const { id } = req.params

    if (!id) {
      throw new Error("No ID defined, bookmarks/:id")
    }

    const bookmark = db
      .get("bookmarks")
      .find({ id })
      .value()

    if (!bookmark) {
      throw new Error("No bookmark found for id")
    }

    res.locals.response = Object.assign({}, res.locals.response || {}, {
      bookmark
    })

    next()
  }
}
