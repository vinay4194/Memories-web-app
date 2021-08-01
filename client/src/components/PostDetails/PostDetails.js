import React, { useEffect } from "react";
import { Paper, Typography, CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useHistory } from "react-router-dom";

import { getPost } from "../../actions/posts";
import useStyles from "./styles";

const PostDetails = () => {
	const post = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	const classes = useStyles();
	const { id } = useParams();

	useEffect(() => {
		dispatch(getPost(id));
	}, [id]);

	if (!post) return null;
	if (!post.title) return <CircularProgress />;
	return (
		<Paper className={classes.paper}>
			<div className={classes.card}>
				<div className={classes.section}>
					<Typography variant="h3" component="h2">
						{post.title}
					</Typography>
					<Typography gutterBottom variant="h6" color="textSecondary" component="h2">
						{post.tags?.map((tag) => `#${tag} `)}
					</Typography>
					<Typography gutterBottom variant="body1" component="p">
						{post.message}
					</Typography>
					<Typography variant="h6">Created by: {post.name}</Typography>
					<Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
				</div>
				<div className={classes.imageSection}>
					<img className={classes.media} src={post.selectedFile} alt={post.title} />
				</div>
			</div>
		</Paper>
	);
};

export default PostDetails;
