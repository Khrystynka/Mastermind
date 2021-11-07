import React from "react";
// import { useState } from "react";
import GuessItem from "./GuessItem";
import { useSelector, useDispatch } from "react-redux";
import { gameActions } from "../store/game-slice";
import InputList from "./InputList";
import GuessList from "./GuessList";
import Backdrop from "./UI/Backdrop";
import Modal from "./UI/Modal";
import GameOver from "./GameOver";

import { useNavigate } from "react-router-dom";
import { findNonSerializableValue } from "@reduxjs/toolkit";
const Game = (props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const game_status = useSelector((state) => state.game.game_status);
	console.log("GAME COMPONENT: status", game_status);
	// const places = useSelector((state) => state.game.places);
	// const choices = useSelector((state) => state.game.choices);

	// const answer = useSelector((state) => state.game.answer);

	// console.log(allGuesses);
	// let component = <GameOver />;
	// if (game_status === "active") {
	// 	component = <GuessList />;
	// }
	let showModal = true;
	if (game_status === "active" || game_status == "stay") {
		showModal = false;
	}
	const newGameHandler = () => {
		console.log("Starting new game");
		navigate("/level", { replace: true });
	};
	const cancelGameHandler = () => {
		console.log("Not Starting new game");
		dispatch(gameActions.change_game_status({ status: "stay" }));
	};

	const gameSummary = (
		<GameOver
			status={game_status}
			newGameHandler={newGameHandler}
			cancelGameHandler={cancelGameHandler}
		></GameOver>
	);
	return (
		<div>
			<Modal
				show={showModal}
				modalClosed={() => {
					console.log("Modal closed");
					cancelGameHandler();
				}}
			>
				{gameSummary}
			</Modal>
			<GuessList />
		</div>
	);
};

export default Game;
