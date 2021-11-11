import React from "react";
// import { useState } from "react";
import GuessItem from "./GuessItem";
import { useSelector, useDispatch } from "react-redux";
// import { gameActions } from "../store/game-slice";
import { useNavigate } from "react-router-dom";
import InputList from "./InputList";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Paper } from "@mui/material";

const GuessList = (props) => {
	// const dispatch = useDispatch();
	const allGuesses = useSelector((state) => state.game.allGuesses);
	const places = useSelector((state) => state.game.places);
	const choices = useSelector((state) => state.game.choices);
	const game_status = useSelector((state) => state.game.game_status);
	const max_attempts = useSelector((state) => state.game.max_attempts);
	const answer = useSelector((state) => state.game.answer);

	console.log("GuessList", game_status);

	const navigate = useNavigate();
	// const answer = useSelector((state) => state.game.answer);
	const newGameHandler = () => {
		navigate("/level", { replace: true });
	};
	console.log(allGuesses);
	let controls = <InputList choices={choices} places={places} answer={null} />;
	if (game_status != "active") {
		controls = <InputList choices={choices} places={places} answer={answer} />;
	}
	const empty_places = max_attempts - allGuesses.length;

	return (
		<React.Fragment
		// sx={{
		// 	width: "100%",
		// 	maxWidth: 360,
		// 	bgcolor: "background.paper",
		// 	display: "flex",
		// 	flexDirection: "column",
		// 	alignItems: "center",
		// 	justifyContent: "center",
		// }}
		>
			<Paper
				style={{
					overflow: "auto",
					marginBottom: "0.8rem",
					marginTop: "0.8rem",
				}}
			>
				<List>
					{allGuesses.map((obj) => {
						return (
							<GuessItem
								guess={obj.guess}
								inPos={obj.inPos}
								corr={obj.corr}
								incorr={places - obj.corr - obj.inPos}
							/>
						);
					})}
					{[...Array(empty_places).keys()].map(() => {
						return (
							<GuessItem
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
