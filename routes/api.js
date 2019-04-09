const express = require("express")
const router = express.Router()

// Middleware
const { apiErrorMiddleware } = require("../middleware/api")

//Helper
const { sendJsonResp } = require("../helper")

// Controller
const {
  getBookmarks,
  getBookmarkByID,
  postBookmark
} = require("../controller/bookmark")
const apiRoutes = {
  allBookmarks: "/bookmarks",
  bookmarkByID: "/bookmarks/:id",
  postBookmark: "/bookmarks"
}

router.get("/", (req, res) => {
  res.json({ availableRoutes: Object.values(apiRoutes) })
})

router.get(apiRoutes.allBookmarks, getBookmarks)
router.get(apiRoutes.bookmarkByID, getBookmarkByID)

router.post(apiRoutes.postBookmark, postBookmark)
router.use(sendJsonResp)

router.use(apiErrorMiddleware)

module.exports = router
