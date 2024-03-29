import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Chip } from "@mui/material";
import { Stack } from "@mui/material";

export default function ButtonAppBar() {
	const navigate = useNavigate();
	const level = useSelector((state) => state.game.level);
	const gameStatus = useSelector((state) => state.game.gameStatus);
	const score = useSelector((state) => state.score.score);
	const totalGames = useSelector((state) => state.score.totalGames);
	const newGameHandler = () => {
		navigate("/level", { replace: true });
	};
	return (
		<Box sx={{ flexGrow: 1, marginBottom: "1em" }}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
						MASTERMIND
					</Typography>
					<Stack direction="row" spacing={1}>
						<Chip
							color="secondary"
							variant="filled"
							label={`Score: ${score}/${totalGames}`}
						/>
						{gameStatus === "inactive" ? null : (
							<Chip
								label={gameStatus === "stay" ? "New game" : `Level: ${level}`}
								variant="filled"
								color="secondary"
								onClick={newGameHandler}
							/>
						)}
					</Stack>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
