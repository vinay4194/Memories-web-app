import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	media: {
		borderRadius: "15px",
		objectFit: "cover",

		maxHeight: "500px",
	},
	card: {
		display: "flex",
		width: "100%",
		justifyContent: "space-around",
		[theme.breakpoints.down("sm")]: {
			flexWrap: "wrap",
			flexDirection: "column",
		},
	},
	paper: {
		padding: theme.spacing(4),
		boxShadow: "0 3px 5px 0 rgba(0,0,0,0.3)",
		borderRadius: "15px",
		color: "#111",
		background: "linear-gradient(to right bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.3))",
		backdropFilter: "blur(0.3rem)",
	},
	section: {
		borderRadius: "20px",
		margin: "10px",
	},

	[theme.breakpoints.down("sm")]: {
		media: {
			marginLeft: 0,
			maxWidth: "90vw",
			borderRadius: "20px",
		},
	},

	[theme.breakpoints.down("xs")]: {
		paper: {
			padding: 0,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			paddingBottom: "15px",
		},
		card: {
			display: "flex",

			justifyContent: "center",
		},
		section: {
			width: "80vw",
		},
		imageSection: {
			marginTop: "30px",
			display: "flex",
			width: "100%",
			alignItems: "center",
			justifyContent: "center",
		},
		media: {
			width: "90%",
			borderRadius: "10px",
		},
	},
}));
