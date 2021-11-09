import React, { useState } from "react";
// import { useState } from "react";
import GuessItem from "./GuessItem";
import { useSelector, useDispatch } from "react-redux";
import { gameActions } from "../store/game-slice";
import InputList from "./InputList";
import GuessList from "./GuessList";
import Backdrop from "./UI/Backdrop";
import Modal from "./UI/Modal";
import GameOver from "./GameOver";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Spinner from "./UI/Spinner";
const Game = (props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const game_status = useSelector((state) => state.game.game_status);
	const game_loading = useSelector((state) => state.game.game_is_loading);
	const attempts = useSelector((state) => state.game.attempts);
	const max_attempts = useSelector((state) => state.game.max_attempts);
	const loading_error = useSelector((state) => state.game.error);
	const difficulty = useSelector((state) => state.game.difficulty);

	// const [showModal, setShowModal] = useState(true);
	let showModal = true;
	if (
		game_status == "inactive" ||
		game_status === "active" ||
		game_status == "stay"
	) {
		showModal = false;
	}
	const newGameHandler = () => {
		navigate("/level", { replace: true });
	};
	const cancelGameHandler = () => {
		dispatch(gameActions.change_game_status({ status: "stay" }));
	};

	const gameSummary = (
		<GameOver
			status={game_status}
			newGameHandler={newGameHandler}
			cancelGameHandler={cancelGameHandler}
		></GameOver>
	);
	let game = (
		<React.Fragment>
			<Typography variant="body" display="block" gutterBottom>
				Level: {difficulty}
			</Typography>
			<Typography variant="body" display="block">
				Attempts: {max_attempts - attempts}
			</Typography>
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
		</React.Fragment>
	);
	if (game_loading) {
		game = <Spinner />;
	}
	if (loading_error) {
		game = <div>An error ocurred while fetching the game...</div>;
	}
	return game;
};

export default Game;
