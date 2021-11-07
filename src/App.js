// import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Initial from "./components/Initial";
import Level from "./components/Level";
import GuessList from "./components/GuessList";
import Game from "./components/Game";
function App() {
	return (
		<div>
			<div>Hello!</div>
			<Routes>
				<Route path="/" element={<Initial />} />
				<Route path="/level" element={<Level />} />

				<Route path="/game" element={<Game />} />
			</Routes>
		</div>
	);
}

export default App;
