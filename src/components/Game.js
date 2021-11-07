import React from "react";
// import { useState } from "react";
import GuessItem from "./GuessItem";
import { useSelector, useDispatch } from "react-redux";
// import { gameActions } from "../store/game-slice";
import InputList from "./InputList";
import GuessList from "./GuessList";
import { findNonSerializableValue } from "@reduxjs/toolkit";
import Difficulty from "./Difficulty";
const Game = (props) => {
	// const dispatch = useDispatch();
	const game_status = useSelector((state) => state.game.game_status);
	console.log("GAME COMPONENT: status", game_status);
	// const places = useSelector((state) => state.game.places);
	// const choices = useSelector((state) => state.game.choices);

	// const answer = useSelector((state) => state.game.answer);

	// console.log(allGuesses);
	let component = <Difficulty />;
	if (game_status === "active") {
		component = <GuessList />;
	}

	return <div>{component}</div>;
};

export default Game;
