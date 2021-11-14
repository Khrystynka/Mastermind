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
	const gameStatus = useSelector((state) => state.game.gameStatus);
	const gameLoading = useSelector((state) => state.game.isLoading);
	const attempts = useSelector((state) => state.game.attempts);
	const maxAttempts = useSelector((state) => state.game.maxAttempts);
	const loadingError = useSelector((state) => state.game.error);
	const score = useSelector((state) => state.score.score);
	const timed = useSelector((state) => state.game.timed);
	const totalGames = useSelector((state) => state.score.totalGames);
	const finishTime = useSelector((state) => state.game.finishTime);
	const [showModal, setShowModal] = useState(true);
	const [timeLeft, setTimeLeft] = useState(null);
	useEffect(() => {
		let timer = null;
		if (finishTime && gameStatus === "active") {
			timer = setInterval(() => {
				const time = finishTime - Date.now();
				setTimeLeft(time);
			}, 500);
		}

		return () => clearInterval(timer);
	}, [gameStatus, finishTime, timeLeft]);

	useEffect(() => {
		if (
			gameStatus === "inactive" ||
			gameStatus === "active" ||
			gameStatus === "stay"
		) {
			setShowModal(false);
		} else {
			setShowModal(true);
			dispatch(scoreActions.addGames());
			dispatch(scoreActions.addScore({ status: gameStatus }));
		}
	}, [gameStatus, dispatch]);

	useEffect(() => {
		if (gameStatus === "won" || gameStatus === "lost") {
			localStorage.setItem("score", score);
			localStorage.setItem("total_games", totalGames);
		}
	}, [score, totalGames, gameStatus]);

	const newGameHandler = () => {
		navigate("/level", { replace: true });
	};
	const cancelGameHandler = () => {
		dispatch(gameActions.changeGameStatus({ status: "stay" }));
	};
	const formatTime = (ms) => {
		const minutes = Math.floor(ms / 60000);
		const seconds = ((ms % 60000) / 1000).toFixed(0);
		return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
	};

	const gameSummary = (
		<GameOver
			status={gameStatus}
			newGameHandler={newGameHandler}
			cancelGameHandler={cancelGameHandler}
		></GameOver>
	);
	let game = (
		<React.Fragment>
			<Container>
				<Button variant="body" display="block">
					Attempts left: {maxAttempts - attempts}
				</Button>
				{timed ? (
					<Button variant="body" display="block">
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
	if (gameLoading) {
		game = <Spinner />;
	}
	if (loadingError) {
		game = (
			<Typography variant="body" display="block">
				An error ocurred while fetching the game...
			</Typography>
		);
	}
	return game;
};

export default Game;
