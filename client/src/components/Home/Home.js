import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import useStyles from "./styles";

const Home = () => {
	const [currentId, setCurrentId] = useState(null);
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [currentId, dispatch]);

	return (
		<Grow in>
			<Container maxWidth="xl">
				<Grid className={classes.homeContainer} container justify="space-between" alignItems="stretch" spacing={10}>
					<Grid className={classes.posts} item xs={12} sm={6} md={8}>
						<Posts setCurrentId={setCurrentId} />
					</Grid>
					<Grid className={classes.form} item xs={12} sm={6} md={4}>
						<Form currentId={currentId} setCurrentId={setCurrentId} />
					</Grid>
				</Grid>
			</Container>
		</Grow>
	);
};
export default Home;
