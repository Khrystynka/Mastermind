import {
	blueGrey,
	grey,
	red,
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
		},
		error: {
			main: red[900],
			dark: red[400],
		},

		color1: {
			main: blue[900],
			dark: blue[200],
			contrastText: "#ffffff",
		},
		color2: {
			main: red[900],
			dark: red[200],
			contrastText: "#ffffff",
		},
		color3: {
			main: yellow[900],
			dark: yellow[200],
			contrastText: "#ffffff",
		},
		color0: {
			main: purple[900],
			dark: purple[200],
			contrastText: "#ffffff",
		},
	},
});

export default theme;
