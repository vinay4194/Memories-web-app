const mongoose = require("mongoose");
//get models
const PostMessage = require("../models/postMessage");

//Get Posts
const getPosts = async (req, res) => {
	try {
		const postMessages = await PostMessage.find();
		res.status(200).json(postMessages);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

//Get post Details
const getPost = async (req, res) => {
	const { id } = req.params;
	try {
		const post = await PostMessage.findById(id);
		res.status(200).json(post);
	} catch (error) {
		res.status(404).json({ message: eror.message });
	}
};

//Create Post
const createPost = async (req, res) => {
	const post = req.body;
	const newPost = new PostMessage({ ...post, creator: req.userId });

	try {
		await newPost.save();
		res.status(201).json(newPost);
	} catch (error) {
		res.status(409).json(error);
	}
};

//Update Post
const updatePost = async (req, res) => {
	const { id: _id } = req.params; //id here comes from router.patch("/:id")

	//receiving data from front-end
	const post = req.body;

	//Check to know if _id is a real mongoose id
	if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");

	//if id is valid
	const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });
	res.json(updatedPost);
};

//Delete Post
const deletePost = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id");

	await PostMessage.findByIdAndRemove(id);
	res.json({ message: "Post deleted successfully" });
};

//Like Post
const likePost = async (req, res) => {
	const { id } = req.params;

	if (!req.userId) return res.json({ message: "Unauthenticated" });
	if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id");

	const post = await PostMessage.findById(id);

	const index = post.likes.findIndex((id) => id === String(req.userId));

	if (index === -1) {
		//like the post if not already liked
		post.likes.push(req.userId);
	} else {
		//remove the like if already liked
		post.likes = post.likes.filter((id) => id !== String(req.userId));
	}

	const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });

	res.json(updatedPost);
};

module.exports = { getPosts, getPost, createPost, updatePost, deletePost, likePost };
