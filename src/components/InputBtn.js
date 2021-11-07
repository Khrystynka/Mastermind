import { useState } from "react";
import classes from "./InputBtn.module.css";
const InputBtn = (props) => {
	// const [value, setValue] = useState(0);
	return (
		<button
			className={classes.InputBtn}
			onClick={() => {
				props.change(props.id);
			}}
		>
			{props.text}
		</button>
	);
};

export default InputBtn;
