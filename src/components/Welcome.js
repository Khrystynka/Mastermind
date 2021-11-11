import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import useStyles from "./GuessItem.styles";

const Welcome = (props) => {
	const classes = useStyles();
	const navigate = useNavigate();
	const startGameHandler = () => {
		navigate("/level", { replace: true });
	};

	return (
		<React.Fragment>
			<Button
				variant="contained"
				onClick={startGameHandler}
				size="large"
				className={classes.buttonLarge}
			>
				Start new game
			</Button>
		</React.Fragment>
	);
};

export default Welcome;
