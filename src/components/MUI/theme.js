import { blueGrey, grey, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: blueGrey[900],
		},
		secondary: {
			main: "#ffffff",
			dark: grey[400],
		},
		error: {
			main: red[900],
		},
	},
});

export default theme;
