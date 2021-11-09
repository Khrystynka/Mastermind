import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { gameActions } from "../store/game-slice";
import useStyles from "./GuessItem.styles";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
const InputList = (props) => {
	const classes = useStyles();

	const initialGuessArr = [0, 0, 0, 0];
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
		// console.log(allGuesses);
	};
	return (
		<React.Fragment>
			<ButtonGroup
				variant="contained"
				aria-label="outlined secondary button group"
				className={classes.buttonGroupMR}
			>
				{Object.keys(guessArr).map((id) => {
					return (
						<Button
							disableElevation
							className={classes.button}
							onClick={() => changeHandler(id)}
						>
							{guessArr[id]}
						</Button>
					);
				})}
			</ButtonGroup>
			<Button
				variant="contained"
				// size="large"
				// color="secondary"
				className={classes.buttonMedium}
				onClick={() => submitHandler(guessArr)}
			>
				Guess
			</Button>
		</React.Fragment>
	);
};

export default InputList;
