// src/pages/Login.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "../redux/action";

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
							
				  <div className="flex items-center justify-center min-h-screen bg-gray-100">
					<form onSubmit={handleLogin} className="w-11/12 max-w-md mx-auto p-8 bg-white shadow-md rounded-md">
					  <div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
						<input
						  type="email"
						  value={email}
						  onChange={(e) => setEmail(e.target.value)}
						  required
						  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						/>
					  </div>
					  <div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
						<input
						  type="password"
						  value={password}
						  onChange={(e) => setPassword(e.target.value)}
						  required
						  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						/>
					  </div>
					  {error && <span className="text-red-500 text-xs italic">{error}</span>}
					  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
						Login
					  </button>
					</form>
				  </div>
			
	);
};

export default Login;
