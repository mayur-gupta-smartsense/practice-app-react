import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
	name: string;
	age: string;
	email: string;
	oldEmail: string;
	phone: string;
	address: string;
	city: string;
	state: string;
	password: string;
	confirmPassword: string;
};

type UserState = {
	users: User[];
	loggedIn: User | null;
};

const initialState: UserState = {
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

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<User>) => {
			state.users.push(action.payload);
		},
		ModifyUsers: (state, action: PayloadAction<User[]>) => {
			state.users = action.payload;
		},
		logIn: (state, action: PayloadAction<User>) => {
			state.loggedIn = action.payload;
		},
		logoutUser: (state) => {
			state.loggedIn = null;
		},
	},
});

export const { addUser, ModifyUsers, logIn, logoutUser } = userSlice.actions;
export default userSlice.reducer;
