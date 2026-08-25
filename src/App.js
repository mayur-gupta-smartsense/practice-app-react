import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Entryform from "./pages/Entryform";
import DataTable from "./pages/DataTable_user";
import Login from "./pages/Login";
import Project1 from "./pages/Project1";
import Netflix from "./pages/Netflix";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Project4 from "./pages/Project4";
import Project5 from "./pages/Project5";
import Project6 from "./pages/Project6";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/cartsPage"
import Cart2 from "./pages/cartsPage2"
import NewSearch from "./pages/newSearch";
import Autocomplete from "./pages/practice_css/autocomplete";
import Kanban from "./pages/practice_css/kanaban";
import ProgressBar from "./pages/practice_css/progressbar";
import Form from "./pages/practice_css/form";
import Progressbar2 from "./pages/practice_css/progressbar2";
import Kanban2 from "./pages/practice_css/kanban2";
import Form2 from "./pages/practice_css/form2";
import DataTable2 from "./pages/practice_css/datatable";


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
                   <Route
					path="/project2"
					element={
						<ProtectedRoute>
							<Project2 />
						</ProtectedRoute>
					}
				/>

                  <Route
					path="/project3"
					element={
						<ProtectedRoute>
							<Project3 />
						</ProtectedRoute>
					}
				/>

                  <Route
					path="/project4"
					element={
						<ProtectedRoute>
							<Project4 />
						</ProtectedRoute>
					}
				/>

                  <Route
					path="/project5"
					element={
						<ProtectedRoute>
							<Project5 />
						</ProtectedRoute>
					}
				/>

                  <Route
						path="/project6"
						element={
							<ProtectedRoute>
								<Project6 />
							</ProtectedRoute>
						}
				/>
				                 
					<Route
						path="/productpage"
						element={
							<ProtectedRoute>
								<ProductPage />
							</ProtectedRoute>
						}
				/>

					<Route
						path="/cartsPage"
						element={
							<ProtectedRoute>
								<Cart />
							</ProtectedRoute>
						}
				/>
				  <Route
						path="/cartsPage2"
						element={
							<ProtectedRoute>
								<Cart2 />
							</ProtectedRoute>
						}
				/>

				<Route
						path="/newSearch"
						element={
							<ProtectedRoute>
								<NewSearch />
							</ProtectedRoute>
						}
				/>

		      <Route
						path="/autocomplete"
						element={
							<ProtectedRoute>
								<Autocomplete />
							</ProtectedRoute>
						}
				/>

				 <Route
						path="/kanban"
						element={
							<ProtectedRoute>
								<Kanban />
							</ProtectedRoute>
						}
				/>

					<Route
						path="/progressbar"
						element={
							<ProtectedRoute>
								<ProgressBar />
							</ProtectedRoute>
						}
				/>
					<Route
						path="/progressbar2"
						element={
							<ProtectedRoute>
								<Progressbar2 />
							</ProtectedRoute>
						}
				/>
					<Route
						path="/kanban2"
						element={
							<ProtectedRoute>
								<Kanban2 />
							</ProtectedRoute>
						}
				/>

					<Route
						path="/form"
						element={
							<ProtectedRoute>
								<Form />
							</ProtectedRoute>
						}
				/>
				<Route
						path="/form2"
						element={
							<ProtectedRoute>
								<Form2 />
							</ProtectedRoute>
						}
				/>

				<Route
						path="/datatable"
						element={
							<ProtectedRoute>
								<DataTable2 />
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
