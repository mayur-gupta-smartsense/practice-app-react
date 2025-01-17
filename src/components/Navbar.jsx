import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/action"; // Import the logout action
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const loggedInUser = useSelector((state) => state.loggedIn);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility

	const handleLogout = () => {
		dispatch(logoutUser());
		navigate("/login"); // Redirect to login page after logout
	};

	// Return null if the user is not logged in
	if (!loggedInUser) {
		return null; // Explicitly return null to render nothing
	}

	// Toggle dropdown visibility
	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	return (
		<nav style={styles.navbar}>
			<div style={styles.navContent}>
				<span style={styles.greeting}>
					Hello {loggedInUser.name} {/* Display the user's name */}
				</span>
				<div style={styles.dropdown}>
					<button style={styles.dropbtn} onClick={toggleDropdown}>
						▼
					</button>
					{dropdownOpen && ( // Conditionally render dropdown content
						<div style={styles.dropdownContent}>
							<button onClick={handleLogout}>Log Out</button>
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
