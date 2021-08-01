import React, { useState } from "react";
import { Avatar, Paper, Grid, Typography, Container, TextField, Button } from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import GoogleIcon from "./Icon";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import { signin, signup } from "../../actions/auth";
import useStyles from "./styles";

const initialState = { firstName: "", lastName: "", email: "", password: "", confirmPassword: "" };

const Auth = () => {
	const classes = useStyles();

	const [isSignup, setIsSignup] = useState(false);
	const [formData, setFormData] = useState(initialState);

	const dispatch = useDispatch();
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (isSignup) {
			dispatch(signup(formData, history));
		} else {
			dispatch(signin(formData, history));
		}
	};
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const switchMode = () => {
		setIsSignup(!isSignup);
	};

	const googleSuccess = async (res) => {
		const result = res?.profileObj; //'?.' is optional chaining operator(wont throw an error if res dont exist)
		const token = res?.tokenId;

		try {
			dispatch({ type: "AUTH", data: { result, token } });

			//redirect to HomePage
			history.push("/");
		} catch (error) {
			console.log(error);
		}
	};

	const googleFailure = () => {
		console.log("Google Sign In was unsuccessful, Try again later.");
	};

	return (
		<Container component="main" maxWidth="xs">
			<Paper className={classes.paper} elevation={4}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
				<form className={classes.form} onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						{isSignup && (
							<>
								<Grid item xs={6}>
									<TextField
										className={classes.textField}
										name="firstName"
										label="First Name"
										onChange={handleChange}
										autoFocus
										xs={6}
										variant="outlined"
										fullWidth
										required
									/>
								</Grid>

								<Grid item xs={6}>
									<TextField
										className={classes.textField}
										name="lastName"
										label="Last Name"
										onChange={handleChange}
										xs={6}
										variant="outlined"
										fullWidth
										required
									/>
								</Grid>
							</>
						)}
						<Grid item xs={12}>
							<TextField
								className={classes.textField}
								name="email"
								label="Email"
								type="email"
								onChange={handleChange}
								xs={12}
								variant="outlined"
								fullWidth
								autoFocus
								required
							/>
						</Grid>

						<Grid item xs={12}>
							<TextField
								className={classes.textField}
								name="password"
								label="Password"
								type="password"
								onChange={handleChange}
								xs={12}
								variant="outlined"
								fullWidth
								required
							/>
						</Grid>
						{isSignup && (
							<Grid item xs={12}>
								<TextField
									className={classes.textField}
									name="confirmPassword"
									label=" Repeat Password"
									type="password"
									onChange={handleChange}
									xs={12}
									variant="outlined"
									fullWidth
									required
								/>
							</Grid>
						)}
					</Grid>

					<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
						{isSignup ? "Sign Up" : "Sign In"}
					</Button>
					<GoogleLogin
						clientId="729677614929-gf0c7122uk6g91hod56qcdrhg6hlpk64.apps.googleusercontent.com"
						render={(renderProps) => (
							<Button
								className={classes.googleButton}
								color="primary"
								fullWidth
								onClick={renderProps.onClick}
								disabled={renderProps.disabled}
								startIcon={<GoogleIcon />}
								variant="contained"
							>
								Google Sign In
							</Button>
						)}
						onSuccess={googleSuccess}
						onFailure={googleFailure}
						cookiePolicy="single_host_origin"
					/>
					<Grid container justify="center">
						<Grid item>
							<Button onClick={switchMode}>{isSignup ? "Already hav an account? Sign In" : "Don't have an account? Sign Up "}</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Container>
	);
};
export default Auth;
