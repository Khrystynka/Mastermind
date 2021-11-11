// import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome";
import Level from "./components/Level";
import GuessList from "./components/GuessList";
import Game from "./components/Game";
import AppBar from "./components/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { scoreActions } from "./store/score-slice";
import React, { useEffect } from "react";
let Initial = true;
function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		if (Initial) {
			Initial = false;
			const storageScore = localStorage.getItem("score");
			const storageTotalGames = localStorage.getItem("total_games");
			if (storageScore !== null && storageTotalGames !== null) {
				dispatch(
					scoreActions.set_score({
						score: storageScore,
						total_games: storageTotalGames,
					})
				);
			}
		}
	}, [dispatch]);
	return (
		<Fragment>
			<CssBaseline />
			<AppBar />
			<Container maxWidth="sm">
				<Box
					sx={{
						height: "90vh",

						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						bgcolor: "background.paper",
						overflow: "hidden",
						borderRadius: "1rem",
						boxShadow: 2,
						fontWeight: "bold",
						padding: "0.8rem",
						width: "100%",
						backgroundColor: "secondary.dark",

						margin: "auto",
					}}
				>
					<Routes>
						<Route path="/" element={<Welcome />} />
						<Route path="/level" element={<Level />} />

						<Route path="/game" element={<Game />} />
					</Routes>
				</Box>
			</Container>
		</Fragment>
	);
}

export default App;
