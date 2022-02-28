const { getAllPosts, createPost, deletePost, likePost } = require('../controllers/postControllers')

const router = require('express').Router()

router.get("/", getAllPosts)
router.post("/", createPost)
router.delete("/:id", deletePost)
router.put("/:id", likePost)

module.exports = router;