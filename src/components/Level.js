import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { gameActions } from "../store/game-slice";
import { generateNewGame } from "../store/game-slice";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import { Button } from "@mui/material";

const Level = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	// const game_loading = useSelector((state) => state.game.game_is_loading);

	const startGameHandler = (level) => {
		// dispatch(gameActions.startGame({ level: level }));
		dispatch(generateNewGame(level));

		navigate("/game");
	};
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				margin: "auto",
			}}
		>
			<Box component="span" sx={{ fontSize: 16, mt: 1 }}>
				<Button variant="contained" onClick={() => startGameHandler("easy")}>
					Easy Level
				</Button>
			</Box>
			<Box component="span" sx={{ fontSize: 16, mt: 1 }}>
				<Button variant="contained" onClick={() => startGameHandler("medium")}>
					Medium Level
				</Button>
			</Box>
			<Box component="span" sx={{ fontSize: 16, mt: 1 }}>
				<Button variant="contained" onClick={() => startGameHandler("hard")}>
					Hard Level
				</Button>
			</Box>
		</Box>
	);
};

export default Level;
