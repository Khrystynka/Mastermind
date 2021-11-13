import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gameActions } from "../store/game-slice";
import { scoreActions } from "../store/score-slice";
import GuessList from "./GuessList";
import Modal from "./UI/Modal";
import GameOver from "./GameOver";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Spinner from "./UI/Spinner";
import { Container } from "@mui/material";
const Game = (props) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const game_status = useSelector((state) => state.game.game_status);
	const game_loading = useSelector((state) => state.game.game_is_loading);
	const attempts = useSelector((state) => state.game.attempts);
	const max_attempts = useSelector((state) => state.game.max_attempts);
	const loading_error = useSelector((state) => state.game.error);
	const score = useSelector((state) => state.score.score);
	const timed = useSelector((state) => state.game.timed);
	const total_games = useSelector((state) => state.score.total_games);
	const finishTime = useSelector((state) => state.game.finishTime);
	const [showModal, setShowModal] = useState(true);
	const [timeLeft, setTimeLeft] = useState(null);
	useEffect(() => {
		let timer = null;
		if (finishTime && game_status === "active") {
			timer = setInterval(() => {
				const time = finishTime - Date.now();
				setTimeLeft(time);
			}, 500);
		}

		return () => clearInterval(timer);
	}, [game_status, finishTime, timeLeft]);

	useEffect(() => {
		if (
			game_status === "inactive" ||
			game_status === "active" ||
			game_status === "stay"
		) {
			setShowModal(false);
		} else {
			setShowModal(true);
			dispatch(scoreActions.add_games());
			dispatch(scoreActions.add_score({ status: game_status }));
		}
	}, [game_status, dispatch]);

	useEffect(() => {
		if (game_status === "won" || game_status === "lost") {
			localStorage.setItem("score", score);
			localStorage.setItem("total_games", total_games);
		}
	}, [score, total_games, game_status]);

	const newGameHandler = () => {
		navigate("/level", { replace: true });
	};
	const cancelGameHandler = () => {
		dispatch(gameActions.change_game_status({ status: "stay" }));
	};
	const formatTime = (ms) => {
		const minutes = Math.floor(ms / 60000);
		const seconds = ((ms % 60000) / 1000).toFixed(0);
		return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
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
			<Container>
				<Button variant="body" display="block" gutterBottom>
					Attempts left: {max_attempts - attempts}
				</Button>
				{timed ? (
					<Button variant="body" display="block" gutterBottom>
						Time left: {formatTime(timeLeft)}
					</Button>
				) : null}
			</Container>

			<Modal
				show={showModal}
				modalClosed={() => {
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
