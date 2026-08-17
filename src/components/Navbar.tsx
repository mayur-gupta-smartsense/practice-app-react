import { useState } from "react";
import { logoutUser } from "../store/userSlice"; // Import the logout action
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
	const loggedInUser = useAppSelector((state) => state.user.loggedIn);
	debugger;
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const [dropdownOpen, setDropdownOpen] = useState(false); // State 
	// to manage dropdown visibility
	const cartCount = useAppSelector((state) =>
		Object.values(state.cart.items).reduce((sum: number, qty: number) => sum + qty, 0)
	);
	const onProductPage = location.pathname.toLowerCase() === "/productpage";

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
				{onProductPage && (
					<div className="relative inline-block mr-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-6 h-6"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
						>
							<circle cx="9" cy="21" r="1" />
							<circle cx="20" cy="21" r="1" />
							<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
						</svg>
						{cartCount > 0 && (
							<span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
								{cartCount}
							</span>
						)}
					</div>
				)}

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

export default Navbar;

