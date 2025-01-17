// src/components/Login.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "./../redux/action"; // Import the addUser action creator

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const users = useSelector((state) => state.users); // Get users from Redux state
	const navigate = useNavigate();
	const dispatch = useDispatch(); // Get the dispatch function from Redux
	console.log("Here here");
	const handleLogin = (e) => {
		e.preventDefault();
		const user = users.find(
			(user) => user.email === email && user.password === password
		);

		if (user) {
			dispatch(logIn(user));
			navigate("/"); // Navigate to the home page if credentials are correct
		} else {
			setError("Invalid email or password");
		}
	};

	return (
		<form onSubmit={handleLogin}>
			<div>
				<label>Email:</label>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</div>
			<div>
				<label>Password:</label>
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</div>
			{error && <span>{error}</span>}
			<button type="submit">Login</button>
		</form>
	);
};

export default Login;
