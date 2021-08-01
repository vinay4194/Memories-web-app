import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
		},
	},
	paper: {
		padding: theme.spacing(4),
		boxShadow: "0 3px 5px 0 rgba(0,0,0,0.3)",
		borderRadius: "15px",
		color: "#111",
		background: "linear-gradient(to right bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.6))",
		backdropFilter: "blur(0.3rem)",
	},
	form: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
	},
	fileInput: {
		width: "97%",
		margin: "10px 0",
	},
	buttonSubmit: {
		marginTop: 5,
		marginBottom: 15,

		background: "linear-gradient(to  bottom,  rgba(49, 99, 170, 0.7),rgba(49, 99, 170, 1))",
	},
	buttonClear: {
		background: "linear-gradient(to  bottom, rgba(224, 71, 0, 0.7), rgba(224, 71, 0, 0.8))",
	},
	[theme.breakpoints.down("xs")]: {
		paper: {
			padding: theme.spacing(2),
		},
	},
}));
