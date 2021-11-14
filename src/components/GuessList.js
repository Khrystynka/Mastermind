import React from "react";
import GuessItem from "./GuessItem";
import { useSelector } from "react-redux";
import InputList from "./InputList";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import useStyles from "./Styles.styles";
import { Paper } from "@mui/material";

const GuessList = (props) => {
	const allGuesses = useSelector((state) => state.game.allGuesses);
	const places = useSelector((state) => state.game.places);
	const choices = useSelector((state) => state.game.choices);
	const gameStatus = useSelector((state) => state.game.gameStatus);
	const maxAttempts = useSelector((state) => state.game.maxAttempts);
	const answer = useSelector((state) => state.game.answer);
	const classes = useStyles();
	let controls = <InputList choices={choices} places={places} answer={null} />;
	if (gameStatus !== "active") {
		controls = <InputList choices={choices} places={places} answer={answer} />;
	}
	const emptyPlaces = maxAttempts - allGuesses.length;

	return (
		<React.Fragment>
			<Paper className={classes.guessesPaper}>
				<List>
					{allGuesses.map((obj, key) => {
						return (
							<GuessItem
								key={key}
								guess={obj.guess}
								corrPos={obj.corrPos}
								corrNum={obj.corrNum}
								inCorr={places - obj.corrNum - obj.corrPos}
							/>
						);
					})}
					{[...Array(emptyPlaces).keys()].map((_, key) => {
						return (
							<GuessItem
								key={key}
								guess={Array.from("x".repeat(places))}
								corrPos={0}
								corrNum={0}
								inCorr={places}
							/>
						);
					})}
				</List>
			</Paper>
			<Box marginTop="auto" className={classes.ctrlBox}>
				{controls}
			</Box>
		</React.Fragment>
	);
};

export default GuessList;
