import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { gameActions } from "../store/game-slice";
import useStyles from "./Styles.styles";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const InputList = (props) => {
	const classes = useStyles();

	const initialGuessArr = new Array(props.places).fill(0);
	const [guessArr, setGuessArr] = useState(initialGuessArr);
	const dispatch = useDispatch();
	const changeHandler = (btnNum) => {
		const tempArr = [...guessArr];
		tempArr[btnNum] = (tempArr[btnNum] + 1) % props.choices;
		setGuessArr(tempArr);
	};
	const submitHandler = (guess) => {
		dispatch(gameActions.addGuess({ guess: guess }));
	};
	return (
		<React.Fragment>
			<Grid container spacing={1} p={1} className={classes.gridCenteredRow}>
				<Grid item>
					<Button
						variant="contained"
						className={classes.buttonInputM}
						onClick={props.answer ? null : () => submitHandler(guessArr)}
						color={props.answer ? "error" : null}
					>
						{props.answer ? "Answer:" : "Guess:"}
					</Button>
				</Grid>
				<Grid item>
					<ButtonGroup variant="contained">
						{props.answer
							? props.answer.map((value, key) => {
									return (
										<Button
											key={key}
											className={classes.buttonInputSm}
											color={props.level === "easy" ? `color${value}` : null}
										>
											{props.level === "easy" ? "o" : value}
										</Button>
									);
							  })
							: Object.keys(guessArr).map((id, key) => {
									return (
										<Button
											key={key}
											className={classes.buttonInputSm}
											onClick={() => changeHandler(id)}
											color={
												props.level === "easy" ? `color${guessArr[id]}` : null
											}
										>
											{props.level === "easy" ? "o" : guessArr[id]}
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
