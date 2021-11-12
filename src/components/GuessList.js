import React from "react";
import GuessItem from "./GuessItem";
import { useSelector } from "react-redux";
import InputList from "./InputList";
import Box from "@mui/material/Box";
import List from "@mui/material/List";

import { Paper } from "@mui/material";

const GuessList = (props) => {
	const allGuesses = useSelector((state) => state.game.allGuesses);
	const places = useSelector((state) => state.game.places);
	const choices = useSelector((state) => state.game.choices);
	const game_status = useSelector((state) => state.game.game_status);
	const max_attempts = useSelector((state) => state.game.max_attempts);
	const answer = useSelector((state) => state.game.answer);

	let controls = <InputList choices={choices} places={places} answer={null} />;
	if (game_status !== "active") {
		controls = <InputList choices={choices} places={places} answer={answer} />;
	}
	const empty_places = max_attempts - allGuesses.length;

	return (
		<React.Fragment>
			<Paper
				style={{
					overflow: "auto",
					marginBottom: "0.8rem",
					marginTop: "0.8rem",
					// margin: "0.8rem",
				}}
			>
				<List>
					{allGuesses.map((obj, key) => {
						return (
							<GuessItem
								key={key}
								guess={obj.guess}
								inPos={obj.inPos}
								corr={obj.corr}
								incorr={places - obj.corr - obj.inPos}
							/>
						);
					})}
					{[...Array(empty_places).keys()].map((_, key) => {
						return (
							<GuessItem
								key={key}
								guess={Array.from("x".repeat(places))}
								inPos={0}
								corr={0}
								incorr={places}
							/>
						);
					})}
				</List>
			</Paper>
			<Box
				sx={{
					marginTop: "auto",
				}}
			>
				{controls}
			</Box>
		</React.Fragment>
	);
};

export default GuessList;
