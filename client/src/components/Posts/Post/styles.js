import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
	media: {
		height: 40,
		paddingTop: "56.25%",
		backgroundColor: "rgba(0, 0, 0, 0.4)",
		backgroundBlendMode: "darken",
	},
	border: {
		border: "solid",
	},
	fullHeightCard: {
		height: "100%",
	},
	card: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		borderRadius: "15px",
		height: "100%",

		position: "relative",
		color: "#111",
		background: "linear-gradient(to right bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.4))",
		backdropFilter: "blur(0.2rem)",
	},
	overlay: {
		position: "absolute",
		top: "20px",
		left: "20px",
		color: "white",
	},
	overlay2: {
		position: "absolute",
		top: "7px",
		right: "0",
		color: "white",

		zIndex: "999",
	},
	grid: {
		display: "flex",
	},
	details: {
		display: "flex",
		justifyContent: "space-between",
		margin: "10px 10px 10px 15px",
	},

	title: {
		padding: "0 16px",
	},
	cardActions: {
		padding: "0 16px 8px 16px",
		display: "flex",
		justifyContent: "space-between",
	},
	cardAction: {
		display: "block",
		textAlign: "initial",
	},
	deleteIcon: {
		color: "#e06126",
	},
	likeIcon: {
		color: "rgba(49, 99, 170, 1)",
	},
});
