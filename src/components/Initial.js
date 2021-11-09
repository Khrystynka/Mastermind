import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import useStyles from "./GuessItem.styles";
// import classes from "./GuessItem.module.css";
const Initial = (props) => {
	const classes = useStyles();
	const navigate = useNavigate();
	const startGameHandler = () => {
		navigate("/level", { replace: true });
	};
	return (
		<React.Fragment>
			<Button
				variant="contained"
				onClick={startGameHandler}
				size="large"
				className={classes.buttonLarge}
			>
				Start new game
			</Button>
		</React.Fragment>
	);
};

export default Initial;
