import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	correctNumber: {
		backgroundColor: "gray",
		border: "1px solid",
		borderColor: "red",
		borderRadius: "50%",
		height: "1.1rem",
		width: "1.1rem",
	},
	correctLocation: {
		backgroundColor: "black",
		border: 1,
		borderColor: "red",
		borderRadius: "50%",
		borderStyle: "solid",
		height: "1.1rem",
		width: "1.1rem",
	},

	incorrectNumber: {
		backgroundColor: "white",
		border: 1,
		borderColor: "gray",
		borderStyle: "solid",
		borderRadius: "50%",
		height: "1.1rem",
		width: "1.1rem",
	},
	ctlBox: {
		marginBottom: "1rem",
	},
	guessesPaper: {
		overflow: "auto",
		marginBottom: "0.8rem",
		marginTop: "0.8rem",
	},
	// gridFlexStart: {
	// 	direction: "row",
	// 	justifyContent: "flex-start",
	// 	alignItems: "flex-start",
	// },
	gridCentered: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	gridCenteredRow: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		borderRadius: "10%",
		height: "2em",
		width: "2em",
	},
	buttonMedium: {
		borderRadius: "10%",
		height: "2em",
		width: "4em",
	},
	marginL: {
		marginLeft: "1rem",
	},
	marginR: {
		marginRight: "1rem",
	},
	marginA: {
		margin: "auto",
	},
	buttonRed: {
		borderRadius: "10%",
		height: "2em",
		width: "2em",
		backgroundColor: "red",
	},
	button0: {
		borderRadius: "10%",
		height: "2em",
		width: "2em",
		backgroundColor: "green",
	},
}));

export default useStyles;
