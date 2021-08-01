import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	appBar: {
		borderRadius: 15,
		margin: "30px 0",
		padding: "10px 30px",
		display: "flex",
		flexDirection: "row",

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
	[theme.breakpoints.down("xs")]: {
		mainContainer: {
			flexDirection: "column-reverse",
		},
		appBar: {
			alignItems: "center",
			justifyContent: "center",
			textAlign: "center",
			padding: "10px 5px",
		},
	},
	[theme.breakpoints.down("sm")]: {},
}));
