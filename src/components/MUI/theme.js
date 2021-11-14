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
			main: blueGrey[600],

			dark: blueGrey[900],
		},
		secondary: {
			main: "#ffffff",
			dark: grey[200],

			// dark: grey[400],
		},
		error: {
			main: red[900],
			dark: red[400],
		},
		// petro: {
		// 	main: green,
		// 	dark: green,
		// },
		color1: {
			main: blue[900],
			dark: blue[200],
		},
		color2: {
			main: red[900],
			dark: red[200],
		},
		color3: {
			main: yellow[900],
			dark: yellow[200],
		},
		color0: {
			main: purple[900],
			dark: purple[200],
		},
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
