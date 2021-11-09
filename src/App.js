// import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Initial from "./components/Initial";
import Level from "./components/Level";
import GuessList from "./components/GuessList";
import Game from "./components/Game";
import AppBar from "./components/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Fragment } from "react";

function App() {
	return (
		<Fragment>
			<CssBaseline />
			<AppBar />
			<Container maxWidth="sm">
				<Box
					sx={{
						height: "85vh",

						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						bgcolor: "background.paper",
						overflow: "hidden",
						borderRadius: "12px",
						boxShadow: 2,
						fontWeight: "bold",
						padding: "10px",
						// width: "100%",
						width: "300px",
						// height: "100%",
						margin: "auto",
					}}
				>
					<Routes>
						<Route path="/" element={<Initial />} />
						<Route path="/level" element={<Level />} />

						<Route path="/game" element={<Game />} />
					</Routes>
				</Box>
			</Container>
		</Fragment>
	);
}

export default App;
