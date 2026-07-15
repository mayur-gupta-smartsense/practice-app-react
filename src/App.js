import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Entryform from "./components/Entryform";
import DataTable from "./components/DataTable_user"; // Ensure case matches exactly
import Login from "./components/Login"; // Import the Login component
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Project1 from "./components/Project1";
import Netflix from "./components/Netflix";

function App() {
	//	const location = useLocation(); // Get the current location

	return (
		<Router>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<Entryform />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/data-table"
					element={
						<ProtectedRoute>
							<DataTable />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/login"
					element={
						<ProtectedRoute>
							<Login />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/project1"
					element={
						<ProtectedRoute>
							<Project1 />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/netflix"
					element={
						<ProtectedRoute>
							<Netflix />
						</ProtectedRoute>
					}
				/>
				{/* Add the login route */}
				<Route path="*" element={<ProtectedRoute></ProtectedRoute>} />
				{/* Catch-all route */}
			</Routes>
		</Router>
	);
}

export default App;
