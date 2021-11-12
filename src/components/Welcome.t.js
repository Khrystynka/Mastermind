import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";

test("renders learn react link", () => {
	render(<Welcome />);
	const linkElement = screen.getByText(/new game/i);
	expect(linkElement).toBeInTheDocument();
});
