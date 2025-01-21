import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import { useSelector } from "react-redux"; // useSelector retrieves data from the Redux store
import { useNavigate } from "react-router-dom";
import { ModifyUsers } from "./../redux/action"; // Import the addUser action creator

DataTable.use(DT);
function DataTable_user() {
	const navigate = useNavigate();
	const userUserData = useSelector((state) => {
		console.log("State in DataTable_user:", state);
		return state.users;
	});
	// JSON.parse(localStorage.getItem("userData"));
	userUserData.map((ele) => {
		ele.password = "admin";
		ele.confirmPassword = "admin";
		return ele;
	});
	ModifyUsers(userUserData);
	let newUserData = userUserData.map((ele) => {
		return [
			ele.name,
			ele.age,
			ele.email,
			ele.phone,
			ele.address,
			ele.state,
			ele.city,
		];
	});
	/*const [tableData, setTableData] = useState([
		["Tiger Nixon", "System Architect"],
		["Garrett Winters", "Accountant"],
		// ...
	]);
*/
	const handleRowClick = (email) => {
		navigate(`/?email=${email}`); // Navigate to the desired route with email as a query parameter
	};
	return (
		<>
			<DataTable className="display w-full text-left mx-4">
				<thead className="bg-gray-200">
					<tr>
						<th className="p-2">Name</th>
						<th className="p-2">Age</th>
						<th className="p-2">Email</th>
						<th className="p-2">Phone</th>
						<th className="p-2">Address</th>
						<th className="p-2">State</th>
						<th className="p-2">City</th>
					</tr>
				</thead>
				<tbody>
					{newUserData.map((row, index) => (
						<tr
							key={index}
							onClick={() => handleRowClick(row[2])}
							className="hover:bg-gray-100 cursor-pointer"
						>
							{/* row[2] is the email */}
							{row.map((cell, cellIndex) => (
								<td key={cellIndex} className="p-2 border-b">
									{cell}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</DataTable>

			<button
				onClick={() => navigate("/")}
				className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
			>
				Back to Entry Form
			</button>
		</>
	);
}

export default DataTable_user;
