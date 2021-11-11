import React, { useState, useEffect } from "react";
// import { useState } from "react";
import GuessItem from "./GuessItem";
import { useSelector, useDispatch } from "react-redux";
import { gameActions } from "../store/game-slice";
import { scoreActions } from "../store/score-slice";

import InputList from "./InputList";
import GuessList from "./GuessList";
import Backdrop from "./UI/Backdrop";
import Modal from "./UI/Modal";
import GameOver from "./GameOver";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Spinner from "./UI/Spinner";
let Initial = true;

const Game = (props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const game_status = useSelector((state) => state.game.game_status);
	const game_loading = useSelector((state) => state.game.game_is_loading);
	const attempts = useSelector((state) => state.game.attempts);
	const max_attempts = useSelector((state) => state.game.max_attempts);
	const loading_error = useSelector((state) => state.game.error);

	const score = useSelector((state) => state.score.score);
	const total_games = useSelector((state) => state.score.total_games);

	const [showModal, setShowModal] = useState(true);
	useEffect(() => {
		if (
			game_status == "inactive" ||
			game_status === "active" ||
			game_status == "stay"
		) {
			setShowModal(false);
		} else {
			setShowModal(true);
			dispatch(scoreActions.add_games());
			dispatch(scoreActions.add_score({ status: game_status }));
		}
	}, [game_status]);

	useEffect(() => {
		if (game_status === "won" || game_status === "lost") {
			localStorage.setItem("score", score);
			localStorage.setItem("total_games", total_games);
		}
	}, [score, total_games]);

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
			<Button variant="body" display="block" gutterBottom>
				Attempts left: {max_attempts - attempts}
			</Button>
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
		game = (
			<Typography variant="body" display="block">
				An error ocurred while fetching the game...
			</Typography>
		);
	}
	return game;
};

export default Game;
