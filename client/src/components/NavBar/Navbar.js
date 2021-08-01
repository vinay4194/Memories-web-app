import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Button, Avatar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import decode from "jwt-decode";

import useStyles from "./styles";
import logoImg from "../../images/logo.png";
import lensImg from "../../images/lens.png";
import Link from "@material-ui/core/Link";

const Navbar = () => {
	const classes = useStyles();
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

	const dispatch = useDispatch();
	const history = useHistory();
	const location = useLocation();

	const logout = () => {
		dispatch({ type: "LOGOUT" });
		history.push("/");

		setUser(null);
	};

	useEffect(() => {
		const token = user?.token;

		//logout if the token expires
		if (token) {
			const decodedToken = decode(token);
			if (decodedToken.exp * 1000 < new Date().getTime()) logout();
		}

		setUser(JSON.parse(localStorage.getItem("profile")));
	}, [location]);

	return (
		<AppBar className={classes.appBar} position="static" color="inherit">
			<Link href="/" className={classes.links}>
				<img className={classes.imageLogo} src={logoImg} alt="memories" height="40" />
				<img className={classes.image} src={lensImg} alt="memories" height="35" width="35" />
			</Link>
			<Toolbar className={classes.toolbar}>
				{user ? (
					<div className={classes.profile}>
						<Avatar className={classes.avatar} src={user.result.imageUrl}>
							{user.result.name.charAt(0)}
						</Avatar>
						<Typography className={classes.userName} variant="h6">
							{user.result.name}
						</Typography>
						<Button variant="contained" className={classes.logoutBtn} color="secondary" onClick={logout}>
							Logout
						</Button>
					</div>
				) : (
					<Button className={classes.signinBtn} href="/auth" variant="contained" color="primary">
						Sign In
					</Button>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
