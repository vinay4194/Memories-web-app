import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

import moment from "moment";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";

import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const user = JSON.parse(localStorage.getItem("profile"));

	//Likes functionality
	const Likes = () => {
		if (post.likes.length > 0) {
			return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id)) ? (
				<>
					<FavoriteIcon className={classes.likeIcon} fontSize="small" />
					&nbsp;
					{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
				</>
			) : (
				<>
					<FavoriteBorderIcon className={classes.likeIcon} fontSize="small" />
					&nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
				</>
			);
		}

		return (
			<>
				<FavoriteBorderIcon fontSize="small" />
				&nbsp;Like
			</>
		);
	};

	const openPost = () => {
		history.push(`/posts/${post._id}`);
	};

	return (
		<Card className={classes.card} raised elevation={4}>
			{/* Edit button visible only for the posts belonging to that user */}
			{(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
				<div className={classes.overlay2}>
					<Button
						style={{ color: "white" }}
						size="small"
						onClick={() => {
							setCurrentId(post._id);
						}}
					>
						<Fab color="primary" aria-label="edit" size="small">
							<EditIcon />
						</Fab>
					</Button>
				</div>
			)}
			<ButtonBase className={classes.cardAction} onClick={openPost}>
				<CardMedia className={classes.media} image={post.selectedFile} title={post.title} />

				<div className={classes.overlay}>
					<Typography variant="h6">{post.name}</Typography>
					<Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
				</div>

				<div className={classes.details}>
					<Typography variant="body2" color="textSecondary">
						{post.tags.map((tag) => `#${tag} `)}
					</Typography>
				</div>
				<Typography className={classes.title} variant="h5">
					{post.title}
				</Typography>

				<CardContent>
					<Typography variant="body1" color="textSecondary" gutterBottom>
						{post.message}
					</Typography>
				</CardContent>
			</ButtonBase>
			<CardActions className={classes.cardActions}>
				<Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
					<Likes />
				</Button>

				{/* Delete button visible only if it that post belongs to that user */}
				{(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
					<Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
						<DeleteOutlineIcon className={classes.deleteIcon} fontSize="small" color="primary" />
					</Button>
				)}
			</CardActions>
		</Card>
	);
};
export default Post;
