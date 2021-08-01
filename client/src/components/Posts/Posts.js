import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
//to access the states from the global store
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
	const posts = useSelector((state) => state.posts);
	const classes = useStyles();

	return (
		//if posts.length=0(false)=>show the circular Progress otherwise show posts inside Grid
		!posts.length ? (
			<CircularProgress />
		) : (
			<Grid className={classes.container} container alignItems="stretch" spacing={3}>
				{posts.map((post) => (
					<Grid key={post._id} item xs={12} sm={12} md={6} lg={4}>
						<Post post={post} setCurrentId={setCurrentId} />
					</Grid>
				))}
			</Grid>
		)
	);
};
export default Posts;