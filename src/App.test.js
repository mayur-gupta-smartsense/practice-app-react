import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Navbar component", () => {
	render(<App />);
	const navbarElement = screen.getByRole("navigation");
	expect(navbarElement).toBeInTheDocument();
});

test("renders Entryform component on root path", () => {
	render(<App />);
	const entryformElement = screen.getByText(/entryform/i);
	expect(entryformElement).toBeInTheDocument();
});

test("renders DataTable component on /data-table path", () => {
	render(<App />);
	const dataTableElement = screen.getByText(/datatable/i);
	expect(dataTableElement).toBeInTheDocument();
});

test("renders Login component on /login path", () => {
	render(<App />);
	const loginElement = screen.getByText(/login/i);
	expect(loginElement).toBeInTheDocument();
});

test("renders ProtectedRoute component on catch-all route", () => {
	render(<App />);
	const protectedRouteElement = screen.getByText(/protectedroute/i);
	expect(protectedRouteElement).toBeInTheDocument();
});
