import {
	blueGrey,
	grey,
	red,
	green,
	purple,
	yellow,
	blue,
} from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: blueGrey[900],
			dark: "#ffffff",
		},
		secondary: {
			main: "#ffffff",
			dark: "#ffffff",

			// dark: grey[400],
		},
		error: {
			main: red[900],
		},
		// petro: {
		// 	main: green,
		// 	dark: green,
		// },
		// button0: {
		// 	main: green,
		// 	dark: green,
		// },
		// button1: {
		// 	main: purple,
		// 	dark: purple,
		// },
		// button2: {
		// 	main: yellow,
		// 	dark: yellow,
		// },
		// button3: {
		// 	main: blue,
		// 	dark: blue,
		// },
	},
});

export default theme;

// "& button": {
// 		button0: {
// 			backgroundColor: "green",
// 		},
// 	},
// 	button1: {
// 		backgroundColor: "purple",
// 	},
// 	button2: {
// 		backgroundColor: "yellow",
// 	},
// 	button3: {
// 		backgroundColor: "blue",
// 	},
