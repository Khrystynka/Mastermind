// import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome";
import Level from "./components/Level";
import AppBar from "./components/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { scoreActions } from "./store/score-slice";
import { useSelector } from "react-redux";
import React, { useEffect, Suspense } from "react";
import Spinner from "./components/UI/Spinner";

const Game = React.lazy(() => import("./components/Game"));
let InitialLoad = true;
function App() {
	const dispatch = useDispatch();
	const game_status = useSelector((state) => state.game.game_status);
	const game_loading = useSelector((state) => state.game.game_is_loading);

	useEffect(() => {
		if (InitialLoad) {
			InitialLoad = false;
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
	let routes = (
		<Routes>
			<Route path="/" element={<Welcome />} />
			<Route path="/level" element={<Level />} />
			<Route path="/game" element={<Game />}></Route>
		</Routes>
	);
	if (game_status === "inactive" && !game_loading) {
		routes = (
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/level" element={<Level />} />
			</Routes>
		);
	}

	return (
		<Fragment>
			<CssBaseline />
			<AppBar />
			<Container maxWidth="sm">
				<Box
					sx={{
						height: "86vh",
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
					<Suspense
						fallback={
							<div className="centered">
								<Spinner />
							</div>
						}
					>
						{routes}
					</Suspense>
				</Box>
			</Container>
		</Fragment>
	);
}

export default App;
