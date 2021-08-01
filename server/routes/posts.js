const express = require("express");

//getting all the logic for the routes from the controllers dir.
const { getPosts, getPost, createPost, updatePost, deletePost, likePost } = require("../controllers/posts");

//middleware for user verification
const { Auth } = require("../middleware/auth");
const router = express.Router();

router.get("/", getPosts);
router.post("/", Auth, createPost);
router.patch("/:id", Auth, updatePost);
router.delete("/:id", Auth, deletePost);
router.patch("/:id/likePost", Auth, likePost);
router.get("/:id", getPost);

module.exports = router;

//:id represent dynamic. bcz we need to know its id before updating a post
