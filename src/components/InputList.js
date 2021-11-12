import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { gameActions } from "../store/game-slice";
import useStyles from "./GuessItem.styles";
import { Grid } from "@mui/material";
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
	};
	const submitHandler = (guess) => {
		console.log("clicked", guess);
		dispatch(gameActions.addGuess({ guess: guess }));
	};
	let redClass = props.answer ? classes.red : null;

	return (
		<React.Fragment>
			<Grid
				container
				spacing={2}
				flexDirection="row"
				justifyContent="center"
				alignItems="center"
				margin="auto"
			>
				<Grid item sm={6}>
					<Button
						variant="contained"
						className={` ${redClass}`}
						onClick={props.answer ? null : () => submitHandler(guessArr)}
					>
						{props.answer ? "Answer:" : "Guess:"}
					</Button>
				</Grid>
				<Grid item sm={6}>
					<ButtonGroup
						variant="contained"
						aria-label="outlined secondary button group"
						// className={classes.buttonLarge}
					>
						{props.answer
							? props.answer.map((value, key) => {
									return (
										<Button key={key} className={`classes.button ${redClass}`}>
											{value}
										</Button>
									);
							  })
							: Object.keys(guessArr).map((id, key) => {
									return (
										<Button
											key={key}
											className={`classes.button ${redClass}`}
											onClick={() => changeHandler(id)}
										>
											{guessArr[id]}
										</Button>
									);
							  })}
					</ButtonGroup>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default InputList;
