// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { userReducer } from "./reducer"; // Import your root reducer

// Configuration for Redux Persist
const persistConfig = {
	key: "root",
	storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, userReducer);

// Create the Redux store
const store = configureStore({
	reducer: persistedReducer,
});

// Create a persistor
const persistor = persistStore(store);

export { store, persistor };
