import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Entryform from "./pages/Entryform";
import DataTable from "./pages/DataTable_user";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

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
				{/* Add the login route */}
				<Route path="*" element={<ProtectedRoute></ProtectedRoute>} />
				{/* Catch-all route */}
			</Routes>
		</Router>
	);
}

export default App;
