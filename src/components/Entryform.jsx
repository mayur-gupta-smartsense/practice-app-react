import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // useDispatch allows us to dispatch Redux actions
import { addUser, logoutUser, ModifyUsers } from "./../redux/action"; // Import the addUser action creator

const Entryform = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch(); // Get the dispatch function from Redux
	const usersData = useSelector((state) => state.users);
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const emailFromParams = queryParams.get("email");
	//const emailFromParams = "test@tes.com";
	const updatedUserData = usersData.map((ele) => ({
		...ele, // Spread the existing properties
		oldEmail: ele.email, // Update the oldEmail property
	}));

	//	usersData.map((ele) => (ele.oldEmail = ele.email));
	//	dispatch(ModifyUsers(usersData));
	let edittedUSer = usersData.find((ele) => ele.oldEmail == emailFromParams);
	console.log(`userUserDataaaaaaaa`, usersData);
	let jsonData = {
		name: "",
		age: "",
		email: "",
		oldEmail: "",
		phone: "",
		address: "",
		city: "",
		state: "",
		password: "",
		confirmPassword: "",
	};
	if (edittedUSer) {
		jsonData = edittedUSer;
	}
	const [formData, setFormData] = useState(jsonData);
	const [errors, setErrors] = useState({});
	const statesAndCities = {
		"City 1": "State 1",
		"City 2": "State 1",
		"City 3": "State 1",
		"City 4": "State 2",
		"City 5": "State 2",
		"City 6": "State 3",
		"City 7": "State 3",
		"City 8": "State 4",
		"City 9": "State 4",
		"City 10": "State 4",
		"City 11": "State 5",
		"City 12": "State 5",
		"City 13": "State 5",
		"City 14": "State 5",
		"City 15": "State 5",
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name == "city") {
			setFormData((prev) => ({
				...prev,
				city: value,
				state: statesAndCities[value] || "",
			}));
		} else {
			setFormData((prev) => ({
				...prev,
				[name]: value,
			}));
		}
	};

	const validateForm = () => {
		const newErrors = {};
		if (!formData.name) newErrors.name = "Name is required";
		if (!formData.age || isNaN(formData.age) || formData.age > 150)
			newErrors.age = "Valid age is required";
		if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
			newErrors.email = "Valid email is required";
		if (!formData.phone || !/\d{10}/.test(formData.phone))
			newErrors.phone = "Valid phone number is required";
		if (!formData.address) newErrors.address = "Address is required";
		if (!formData.city) newErrors.city = "City is required";
		if (!formData.state) newErrors.state = "State is required";
		if (formData.password !== formData.confirmPassword)
			newErrors.confirmPassword = "Passwords do not match";
		setErrors(newErrors);
		return Object.keys(newErrors).length == 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault(); // prevent the default form suvbmissio behaviour, page refresh.
		if (validateForm()) {
			/*		const existingData = JSON.parse(localStorage.getItem("userData")) || [];
			localStorage.setItem(
				"userData",
				JSON.stringify([...existingData, formData])
			);
			*/
			if (edittedUSer) {
				let index = updatedUserData.findIndex(
					(ele) => ele.oldEmail == emailFromParams
				);
				formData.oldEmail = formData.email;
				updatedUserData[index] = formData;
				dispatch(ModifyUsers(updatedUserData));
			} else {
				formData.oldEmail = formData.email;
				dispatch(addUser(formData)); // Dispatch the addUser action with the form data
			}
			setFormData({
				name: "",
				age: "",
				email: "",
				phone: "",
				address: "",
				city: "",
				state: "",
				password: "",
				confirmPassword: "",
			}); // Reset the form inputs
			navigate("/data-table");
		}
	};

	const logout = () => {
		dispatch(logoutUser());
	};
	return (
		<form onSubmit={handleSubmit}>
			{/*Name Input Field */}
			<div>
			<Child value="Hello World12" />
				<label>Name: </label>
				<input
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
				/>
				{errors.name && <span>{errors.name}</span>}{" "}
				{/* Display validation error for 'name' */}
			</div>
			{/* Age Input Field*/}
			<div>
				<label> Age: </label>
				<input
					type="number"
					name="age"
					value={formData.age}
					onChange={handleChange}
				/>
				{errors.age && <span>{errors.age}</span>}{" "}
				{/* Display validation error for 'age' */}
			</div>
			{/*Email Input Field*/}
			<div>
				<label>Email: </label>
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
				/>
				{errors.email && <span>{errors.email}</span>}{" "}
				{/* Display validation error for */}
			</div>
			{/*Phone Input Field*/}
			<div>
				<label>Phone: </label>
				<input
					type="tel"
					name="phone"
					value={formData.phone}
					onChange={handleChange}
				/>
				{errors.phone && <span>{errors.phone}</span>}{" "}
				{/* Display validation error for 'phone' */}
			</div>
			{/* Address Input Field */}
			<div>
				<label> Address:</label>
				<input
					type="text"
					name="address"
					value={formData.address}
					onChange={handleChange}
				/>
				{errors.address && <span>{errors.address}</span>}{" "}
				{/* Display validation error for 'address' */}
			</div>
			{/*State Dropdown */}
			<div>
				<label>State:</label>
				<input
					type="text"
					name="state"
					value={formData.state}
					readOnly // Make the input read-only so users cannot edit it directly.
				/>
				{errors.state && <span>{errors.state}</span>}{" "}
				{/* Display validation error for 'state' */}
			</div>

			{/* City Dropdown */}
			<div>
				<label>City:</label>
				<select name="city" value={formData.city} onChange={handleChange}>
					<option value="">Select City</option>
					{/* Dynamically populate cities based on the selected state */}
					{Object.keys(statesAndCities).map((city) => (
						<option key={city} value={city}>
							{city}
						</option>
					))}
				</select>
				{errors.city && <span>{errors.city}</span>}{" "}
				{/* Display validation error for 'city' */}
			</div>
			<div>
				<label>Password: </label>
				<input
					type="password"
					name="password"
					value={formData.password}
					onChange={handleChange}
				/>
				{errors.password && <span>{errors.password}</span>}{" "}
				{/* Display validation error for */}
			</div>

			<div>
				<label>Confirm Password: </label>
				<input
					type="password"
					name="confirmPassword"
					value={formData.confirmPassword}
					onChange={handleChange}
				/>
				{errors.confirmPassword && <span>{errors.confirmPassword}</span>}{" "}
				{/* Display validation error for */}
			</div>

			{/* Submit Button */}
			<button type="submit">Submit</button>
			<button onClick={logout} type="button">
				Log out
			</button>
		</form>


	);
};
const dummy = null;

function Child({ value }) {
	return <div>child has value: {value}</div>;
  }
export default Entryform;
