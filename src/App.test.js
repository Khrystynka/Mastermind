import React from "react";
import { render, fireEvent, screen } from "./test-utils";
import App from "./App";

test("checking the welcome window to contain New game button and game title", () => {
	render(<App />);

	expect(screen.getByText(/mastermind/i)).toBeInTheDocument();
	expect(screen.getAllByText(/game/i)).toHaveLength(1);
});
test("checking the level window to contain levels", () => {
	render(<App />);
	const newGameButton = screen.getByRole("button", { name: /new game/i });
	fireEvent.click(newGameButton);
	expect(screen.getByText(/medium/i)).toBeInTheDocument();
	expect(screen.getByText(/easy/i)).toBeInTheDocument();
});
