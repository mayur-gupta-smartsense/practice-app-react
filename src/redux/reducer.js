import { ADD_USER, CHANGE_USERS } from "./action";

//  we are not implementing this as redux-persist states remain persistent for life.
const initialState = {
	users: [
		{
			name: "Mayur",
			age: "32",
			email: "mayurg729@gmail.com",
			oldEmail: "mayurg729@gmail.com",
			phone: "8527237250",
			address: "jkjkk",
			city: "City 4",
			state: "State 2",
			password: "admin",
			confirmPassword: "admin",
		},
	],
	loggedIn: null,
};

// const initialState = {
// 	users: [],
// 	loggedIn: null,
// };

export const userReducer = (state = initialState, action) => {
	console.log("Current State:", state);
	console.log("Action Received:", action);
	switch (action.type) {
		case ADD_USER:
			return {
				...state,
				users: [...state.users, action.payload],
			};
		case CHANGE_USERS:
			return {
				...state,
				users: [...action.payload],
			};
		case "LOGGED_IN":
			return {
				...state,
				loggedIn: { ...action.payload },
			};
		case "LOGGED_OUT":
			return {
				...state,
				loggedIn: null,
			};
		default:
			return state;
	}
};

// export default userReducer;
