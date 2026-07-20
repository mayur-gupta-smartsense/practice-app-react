import React, { Suspense, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // useDispatch allows us to dispatch Redux actions
import { addUser, logoutUser, ModifyUsers } from "../redux/action";
import {ErrorBoundary} from "react-error-boundary";

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
		<form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg">
			{/*Name Input Field */}
			<ErrorBoundary fallback={<div>error</div>}>
				<Suspense fallback={<div>Loading...</div>}>
					<Child value="Hello World12" />
				</Suspense>
			</ErrorBoundary>
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
				<input
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
				{errors.name && <span className="text-red-500 text-xs italic">{errors.name}</span>}
			</div>
			{/* Age Input Field*/}
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2">Age:</label>
				<input
					type="number"
					name="age"
					value={formData.age}
					onChange={handleChange}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
				{errors.age && <span className="text-red-500 text-xs italic">{errors.age}</span>}
			</div>
			{/*Email Input Field*/}
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
				{errors.email && <span className="text-red-500 text-xs italic">{errors.email}</span>}
			</div>
			{/*Phone Input Field*/}
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2">Phone:</label>
				<input
					type="tel"
					name="phone"
					value={formData.phone}
					onChange={handleChange}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
				{errors.phone && <span className="text-red-500 text-xs italic">{errors.phone}</span>}
			</div>
			{/* Address Input Field */}
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
				<input
					type="text"
					name="address"
					value={formData.address}
					onChange={handleChange}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
				{errors.address && <span className="text-red-500 text-xs italic">{errors.address}</span>}
			</div>
			{/*State Dropdown */}
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2">State:</label>
				<input
					type="text"
					name="state"
					value={formData.state}
					readOnly
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
				{errors.state && <span className="text-red-500 text-xs italic">{errors.state}</span>}
			</div>
			{/* City Dropdown */}
			<div className="mb-4">
				<label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">City:</label>
				<select
					id="city"
					name="city"
					value={formData.city}
					onChange={handleChange}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline appearance-none"
				>
					<option value="">Select City</option>
					{Object.keys(statesAndCities).map((city) => (
						<option key={city} value={city}>
							{city}
						</option>
					))}
				</select>
				{errors.city && <span className="text-red-500 text-xs italic">{errors.city}</span>}
			</div>
			{/* Password Input Field */}
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
				<input
					type="password"
					name="password"
					value={formData.password}
					onChange={handleChange}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
				{errors.password && <span className="text-red-500 text-xs italic">{errors.password}</span>}
			</div>
			{/* Confirm Password Input Field */}
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password:</label>
				<input
					type="password"
					name="confirmPassword"
					value={formData.confirmPassword}
					onChange={handleChange}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
				{errors.confirmPassword && <span className="text-red-500 text-xs italic">{errors.confirmPassword}</span>}
			</div>
			{/* Submit Button */}
			<div className="flex items-center justify-between">
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				>
					Submit
				</button>
				<button
					onClick={logout}
					type="button"
					className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				>
					Log out
				</button>
			</div>
		</form>
	);
};
const dummy = null;

function Child({ value }) {
	return <div>child has value: {value}</div>;
  }
export default Entryform;
