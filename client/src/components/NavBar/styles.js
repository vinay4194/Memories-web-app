import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	appBar: {
		borderRadius: 15,
		margin: "30px 0",
		padding: "10px 30px",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		color: "#111",
		background: "linear-gradient(to right bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.4))",
		backdropFilter: "blur(0.2rem)",
	},
	heading: {
		color: "rgba(0,183,255, 1)",
		fontFamily: "",
	},
	image: {
		marginLeft: "15px",
	},
	toolbar: {
		display: "flex",
		justifyContent: "flex-end",
		padding: "0px 5px",
	},
	links: {
		padding: "0px 5px",
	},
	profile: {
		display: "flex",
		justifyContent: "space-between",
		width: "auto",
		gap: "15px",
	},
	userName: {
		display: "flex",
		alignItems: "center",
	},
	signinBtn: {
		background: "linear-gradient(to  bottom,  rgba(49, 99, 170, 0.7),rgba(49, 99, 170, 1))",
	},
	logoutBtn: {
		background: "linear-gradient(to  bottom, rgba(224, 71, 0, 0.7), rgba(224, 71, 0, 0.8))",
	},
	[theme.breakpoints.down("xs")]: {
		mainContainer: {
			flexDirection: "column-reverse",
		},
		appBar: {
			justifyContent: "space-between",
			textAlign: "center",
			padding: "10px 5px",
		},
		imageLogo: {
			height: "30px",
		},
		image: {
			display: "none",
		},
		avatar: {
			height: 35,
			width: 35,
		},

		profile: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",

			width: "100%",
			gap: "5px",
		},

		signinBtn: {
			height: "30px",

			fontSize: "10px",
		},
		logoutBtn: {
			height: "30px",
			width: "30px",
			fontSize: "10px",
		},
		userName: {
			fontSize: "15px",
		},
	},
	[theme.breakpoints.down("sm")]: {
		appBar: {
			padding: "10px 10px",
		},
	},
}));
