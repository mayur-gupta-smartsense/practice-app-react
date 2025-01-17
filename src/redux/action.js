// src/redux/actions.js

// Define action types as constants to avoid hardcoding strings
export const ADD_USER = "ADD_USER";
export const CHANGE_USERS = "CHANGE_USERS";

// Action creator function to add a user
// This function returns an action object with type and payload
export const addUser = (user) => {
	return {
		type: ADD_USER, // Action type specifying what to do
		payload: user, // Payload carrying the data (user information)
	};
};

export const ModifyUsers = (users) => {
	return {
		type: CHANGE_USERS, // Action type specifying what to do
		payload: users, // Payload carrying the data (user information)
	};
};

export const logIn = (user) => {
	return {
		type: "LOGGED_IN", // Action type specifying what to do
		payload: user, // Payload carrying the data (user information)
	};
};

export const logoutUser = (user) => {
	return {
		type: "LOGGED_OUT", // Action type specifying what to do
		payload: null, // Payload carrying the data (user information)
	};
};
