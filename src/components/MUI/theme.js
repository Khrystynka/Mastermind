import { green, orange, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: orange[900],
		},
		secondary: {
			main: green[900],
		},
		error: {
			main: red[900],
		},
	},
});

export default theme;
