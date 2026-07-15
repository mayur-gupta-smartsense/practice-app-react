import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/action"; // Import the logout action
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
	const loggedInUser = useSelector((state) => state.loggedIn);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility

	const handleLogout = () => {
		dispatch(logoutUser());
		navigate("/login"); // Redirect to login page after logout
	};

	// Netflix page has its own top bar (logo, search, cart, profile) — skip the global one to avoid overlap
	if (location.pathname === "/netflix") {
		return null;
	}

	// Return null if the user is not logged in
	if (!loggedInUser) {
		return null; // Explicitly return null to render nothing
	}

	// Toggle dropdown visibility
	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	return (
		<nav className="bg-gray-800 p-4 flex justify-end items-center text-white">
			<div className="flex items-center">
				<span className="mr-4">
					Hello {loggedInUser.name} {/* Display the user's name */}
				</span>
				<div className="relative inline-block">
					<button className="bg-transparent border-none text-white cursor-pointer" onClick={toggleDropdown}>
						▼
					</button>
					{dropdownOpen && ( // Conditionally render dropdown content
						<div className="absolute right-0 bg-white text-black min-w-[160px] shadow-lg z-10">
							<button className="w-full text-left px-4 py-2 hover:bg-gray-200" onClick={handleLogout}>Log Out</button>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
};

const styles = {
	navbar: {
		backgroundColor: "#282c34",
		padding: "10px",
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		color: "white",
	},
	navContent: {
		display: "flex",
		alignItems: "center",
	},
	greeting: {
		marginRight: "10px",
	},
	dropdown: {
		position: "relative",
		display: "inline-block",
	},
	dropbtn: {
		backgroundColor: "transparent",
		border: "none",
		color: "white",
		cursor: "pointer",
	},
	dropdownContent: {
		display: "block", // Ensure it is displayed when dropdownOpen is true
		position: "absolute",
		right: 0,
		backgroundColor: "#f9f9f9",
		minWidth: "160px",
		boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
		zIndex: 1,
	},
};

export default Navbar;
