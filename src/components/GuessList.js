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
	const game_status = useSelector((state) => state.game.game_status);
	const max_attempts = useSelector((state) => state.game.max_attempts);
	const answer = useSelector((state) => state.game.answer);
	const classes = useStyles();
	let controls = <InputList choices={choices} places={places} answer={null} />;
	if (game_status !== "active") {
		controls = <InputList choices={choices} places={places} answer={answer} />;
	}
	const empty_places = max_attempts - allGuesses.length;

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
					{[...Array(empty_places).keys()].map((_, key) => {
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
