import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	appContainer: {
		height: "86vh",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		bgcolor: "background.paper",
		overflow: "hidden",
		borderRadius: "1rem",
		boxShadow: 2,
		fontWeight: "bold",
		padding: "0.8rem",
		width: "100%",
		margin: "auto",
		backgroundColor: theme.palette.secondary.dark,
	},
}));

export default useStyles;
