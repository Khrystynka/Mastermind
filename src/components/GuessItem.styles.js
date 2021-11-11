import { makeStyles } from "@mui/styles";
import { borders } from "@mui/system";

const useStyles = makeStyles((theme) => ({
	correctNumber: {
		backgroundColor: "gray",
		border: "1px solid",
		borderColor: "red",
		borderRadius: "50%",
		// borderStyle: "solid",
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

	button: {
		borderRadius: "10%",
		height: "2rem",
		width: "2rem",
	},
	buttonMedium: {
		borderRadius: "10%",
		height: "2rem",
		width: "4rem",
	},
	buttonGroupML: {
		marginLeft: "1rem",
	},
	buttonGroupMR: {
		marginRight: "1rem",
	},
	buttonLarge: {
		margin: "auto",
	},
	red: {
		background: "red",
	},
}));

export default useStyles;
