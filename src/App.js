import { Route, Routes } from "react-router-dom";
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
import { Navigate } from "react-router-dom";
import useStyles from "./App.styles";

const Game = React.lazy(() => import("./components/Game"));
function App() {
	const dispatch = useDispatch();
	const level = useSelector((state) => state.game.level);
	const gameLoading = useSelector((state) => state.game.isLoading);
	const classes = useStyles();
	useEffect(() => {
			const storageScore = localStorage.getItem("score");
			const storageTotalGames = localStorage.getItem("total_games");
			if (storageScore !== null && storageTotalGames !== null) {
				dispatch(
					scoreActions.setScore({
						score: storageScore,
						totalGames: storageTotalGames,
					})
				);
			}
		
	}, [dispatch]);
	return (
		<Fragment>
			<CssBaseline />
			<AppBar />
			<Container maxWidth="sm">	
				<Box className={classes.appContainer}>
					<Suspense
						fallback={
							<div className="centered">
								<Spinner />
							</div>
						}
					>
						<Routes>
							<Route path="/" element={<Welcome />} />
							<Route path="/level" element={<Level />} />
							<Route
								path="/game"
								element={level || gameLoading ? <Game /> : <Navigate to="/" />}
							/>
						</Routes>
					</Suspense>
				</Box>
			</Container>
		</Fragment>
	);
}

export default App;
