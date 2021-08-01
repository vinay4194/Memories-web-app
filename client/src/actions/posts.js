import * as api from "../api";

//Action Creators

//Get all Posts
export const getPosts = () => async (dispatch) => {
	try {
		dispatch({ type: "START_LOADING" });
		const { data } = await api.fetchPosts();

		dispatch({ type: "FETCH_ALL", payload: data });
		dispatch({ type: "END_LOADING" });
	} catch (error) {
		console.log(error.message);
	}
};

//Create Post
export const createPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.createPost(post);
		dispatch({ type: "CREATE", payload: data });
	} catch (error) {
		console.log(error);
	}
};

//Update Post
export const updatePost = (id, post) => async (dispatch) => {
	try {
		const { data } = await api.updatePost(id, post);
		dispatch({ type: "UPDATE", payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

//Delete Post
export const deletePost = (id) => async (dispatch) => {
	try {
		await api.deletePost(id);
		dispatch({ type: "DELETE", payload: id });
	} catch (error) {
		console.log(error);
	}
};

//Like Post
export const likePost = (id) => async (dispatch) => {
	try {
		const { data } = await api.likePost(id);
		dispatch({ type: "UPDATE", payload: data });
	} catch (error) {
		console.log(error);
	}
};

//Get post details
export const getPost = (id) => async (dispatch) => {
	try {
		dispatch({ type: "START_LOADING" });
		const { data } = await api.fetchPost(id);

		dispatch({ type: "FETCH_POST", payload: data });
		dispatch({ type: "END_LOADING" });
	} catch (error) {
		console.log(error);
	}
};
