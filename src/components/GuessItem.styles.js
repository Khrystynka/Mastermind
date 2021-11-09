import { makeStyles } from "@mui/styles";
import { borders } from "@mui/system";

const useStyles = makeStyles((theme) => ({
	correctNumber: {
		backgroundColor: "gray",
		border: "1px solid black",
		borderColor: "orange",
		borderRadius: 10,
		// borderStyle: "solid",
		height: 20,
		width: 20,
	},
	correctLocation: {
		backgroundColor: "black",
		border: 1,
		borderColor: "orange",
		borderRadius: 10,
		borderStyle: "solid",
		height: 20,
		width: 20,
	},

	incorrectNumber: {
		backgroundColor: "white",
		border: 1,
		borderColor: "gray",
		borderStyle: "solid",
		borderRadius: 10,
		height: 20,
		width: 20,
	},

	guess: {
		backgroundColor: "green",
		borderWidth: 1,
		color: "yellow",
		height: 20,
		width: 50,
	},

	button: {
		borderRadius: 5,
		height: 30,
		width: 30,
	},
	buttonMedium: {
		borderRadius: 5,
		height: 30,
		width: 80,
	},
	buttonGroupML: {
		marginLeft: 20,
	},
	buttonGroupMR: {
		marginRight: 20,
	},
	buttonLarge: {
		margin: "auto",
	},
}));

export default useStyles;
