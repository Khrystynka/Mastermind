import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { generateNewGame } from "../store/game-slice";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import useStyles from "./GuessItem.styles";
const Level = () => {
	let classes = useStyles();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const startGameHandler = (level) => {
		dispatch(generateNewGame(level));

		navigate("/game");
	};
	return (
		<Grid
			container
			spacing={2}
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			margin="auto"
		>
			<Grid item flexGrow>
				<Button
					size="large"
					variant="contained"
					onClick={() => startGameHandler("easy")}
				>
					Easy
				</Button>
			</Grid>
			<Grid item>
				<Button
					size="large"
					variant="contained"
					onClick={() => startGameHandler("medium")}
				>
					Medium
				</Button>
			</Grid>

			<Grid item justifyContent="center">
				<Button
					size="large"
					variant="contained"
					onClick={() => startGameHandler("hard")}
					className={classes.buttonLarge}
				>
					Hard
				</Button>
			</Grid>
		</Grid>
	);
};

export default Level;
