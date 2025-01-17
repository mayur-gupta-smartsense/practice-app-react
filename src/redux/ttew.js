// src/redux/store.js

// Import createStore to create a Redux store
import { createStore } from 'redux';
// Import the reducer that manages the application's state
import userReducer from './reducer';

// Create a Redux store using the reducer and enabling Redux DevTools for debugging
const store = createStore(
    userReducer, // The reducer function
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // DevTools integration
);

// Export the store so it can be used throughout the app
export default store;

// -----------------------------------------------------------

// src/redux/actions.js

// Define action types as constants to avoid hardcoding strings
export const ADD_USER = 'ADD_USER';

// Action creator function to add a user
// This function returns an action object with type and payload
export const addUser = (user) => {
    return {
        type: ADD_USER, // Action type specifying what to do
        payload: user,  // Payload carrying the data (user information)
    };
};

// -----------------------------------------------------------

// src/redux/reducer.js

// Import the action type constant
import { ADD_USER } from './actions';

// Define the initial state of the application
const initialState = {
    users: [], // An empty array to hold user information
};

// Reducer function to handle state changes
// It takes the current state and an action, and returns the new state
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER: // Check if the action type is ADD_USER
            return {
                ...state, // Copy the current state
                users: [...state.users, action.payload], // Add the new user to the users array
            };
        default: // If no matching action type, return the current state unchanged
            return state;
    }
};

// Export the reducer so it can be used in the store
export default userReducer;

// -----------------------------------------------------------

// src/index.js

// Import necessary modules
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'; // Provider makes the Redux store available to the app
import store from './redux/store'; // Import the Redux store

// Render the app, wrapping it with the Provider to supply the Redux store
ReactDOM.render(
    <Provider store={store}> {/* All components within App can now access the store */}
        <App />
    </Provider>,
    document.getElementById('root') // Mount the app to the DOM
);

reportWebVitals();

// -----------------------------------------------------------

// src/components/Entryform.jsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // useDispatch allows us to dispatch Redux actions
import { addUser } from '../redux/actions'; // Import the addUser action creator

const Entryform = () => {
    // Local state to manage form inputs
    const [formData, setFormData] = useState({ name: '', age: '', phone: '' });
    const dispatch = useDispatch(); // Get the dispatch function from Redux

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        dispatch(addUser(formData)); // Dispatch the addUser action with the form data
        setFormData({ name: '', age: '', phone: '' }); // Reset the form inputs
    };

    // Handle input changes and update local state
    const handleChange = (e) => {
        const { name, value } = e.target; // Get input name and value
        setFormData({ ...formData, [name]: value }); // Update the corresponding state field
    };

    return (
        <form onSubmit={handleSubmit}> {/* Trigger handleSubmit on form submission */}
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name" // Match this with the state key
                    value={formData.name} // Controlled input value
                    onChange={handleChange} // Update state on change
                    required // Make input mandatory
                />
            </div>
            <div>
                <label>Age:</label>
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Phone:</label>
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Add User</button> {/* Submit button to trigger handleSubmit */}
        </form>
    );
};

export default Entryform;

// -----------------------------------------------------------

// src/components/DataTable_user.jsx

import React from 'react';
import { useSelector } from 'react-redux'; // useSelector retrieves data from the Redux store

const DataTable_user = () => {
    const users = useSelector((state) => state.users); // Access the users array from the store

    return (
        <div>
            <h2>User Information</h2>
            {users.length === 0 ? ( // Check if there are no users
                <p>No users added yet.</p>
            ) : (
                <table border="1"> {/* Simple table to display user information */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}> {/* Use index as key for simplicity */}
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default DataTable_user;
