import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Welcome = () => {
	const navigate = useNavigate();
	const startGameHandler = () => {
		navigate("/level", { replace: true });
	};

	return (
		<React.Fragment>
			<Button variant="contained" onClick={startGameHandler} size="large">
				Start new game
			</Button>
		</React.Fragment>
	);
};

export default Welcome;
