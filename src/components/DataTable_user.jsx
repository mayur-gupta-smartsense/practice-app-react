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
			<DataTable className="display">
				<thead>
					<tr>
						<th>Name</th>
						<th>Age</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Address</th>
						<th>State</th>
						<th>City</th>
					</tr>
				</thead>
				<tbody>
					{newUserData.map((row, index) => (
						<tr key={index} onClick={() => handleRowClick(row[2])}>
							{/* row[2] is the email */}
							{row.map((cell, cellIndex) => (
								<td key={cellIndex}>{cell}</td>
							))}
						</tr>
					))}
				</tbody>
			</DataTable>

			<button onClick={() => navigate("/")}>Back to Entry Form</button>
		</>
	);
}

export default DataTable_user;
