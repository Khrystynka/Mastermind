import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { gameActions } from "../store/game-slice";
import useStyles from "./GuessItem.styles";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
const InputList = (props) => {
	const classes = useStyles();

	const initialGuessArr = new Array(props.places).fill(0);
	const [guessArr, setGuessArr] = useState(initialGuessArr);
	const dispatch = useDispatch();
	const changeHandler = (btnNum) => {
		console.log("Old Guess Array", guessArr);

		const new_arr = [...guessArr];
		new_arr[btnNum] = (new_arr[btnNum] + 1) % props.choices;
		setGuessArr(new_arr);
		// console.log("Guess Array", guessArr);
	};
	const submitHandler = (guess) => {
		console.log("clicked", guess);
		dispatch(gameActions.addGuess({ guess: guess }));
		// setGuessArr(initialGuessArr);
		// updateGuess("");
	};
	let redClass = props.answer ? classes.red : null;

	return (
		<React.Fragment>
			<Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
				<Button
					variant="contained"
					// size="large"
					// color="secondary"
					className={`classes.buttonMedium ${redClass}`}
					// className={classes.red}
					onClick={props.answer ? null : () => submitHandler(guessArr)}
				>
					{props.answer ? "Answer:" : "Guess:"}
				</Button>
				<ButtonGroup
					variant="contained"
					aria-label="outlined secondary button group"
					className={classes.buttonGroupML}
				>
					{props.answer
						? props.answer.map((value) => {
								return (
									<Button className={`classes.button ${redClass}`}>
										{value}
									</Button>
								);
						  })
						: Object.keys(guessArr).map((id) => {
								return (
									<Button
										className={`classes.button ${redClass}`}
										onClick={() => changeHandler(id)}
									>
										{guessArr[id]}
									</Button>
								);
						  })}
				</ButtonGroup>
			</Box>
		</React.Fragment>
	);
};

export default InputList;
