// Tools to build the Redux store and combine multiple reducers into one
import { combineReducers, configureStore } from "@reduxjs/toolkit";
// redux-persist saves our store to storage (e.g. localStorage) and reloads it on refresh
// These action names need special handling so Redux's "serializable" check doesn't complain about them
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist";
// storage = where redux-persist saves data (localStorage by default)
import storage from "redux-persist/lib/storage";
// Each slice manages its own piece of state (cart, products, user)
import cartSlice from "./cartSlice"
import productSlice from "./productsSlice"
import userSlice from "./userSlice"
// Custom middleware: logs every action that runs through the store
import loggerMiddleWare from "./loggerMiddleWare";
// Custom middleware: listens for stock-related changes and reacts to them
import stockListenerMiddleware from "./stockListenerMiddleware"

// Combine all separate slices into one big reducer.
// The state will look like: { cart: ..., product: ..., user: ... }
const rootReducer = combineReducers({
    cart: cartSlice,
    product: productSlice,
    user: userSlice,
});

// Settings for redux-persist:
// - key: name used to store the data
// - whitelist: only the "user" slice gets saved/persisted (cart and product do not)
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"],
};

// Wrap our rootReducer so it knows how to save/load from storage
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the actual Redux store
export const store = configureStore({
    reducer: persistedReducer,
    middleware:(getMiddleWare)=>
        getMiddleWare({
            // redux-persist actions aren't plain serializable data,
            // so tell Redux to ignore them during its serializable check
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).
            // prepend = run this middleware before the default ones
            prepend(stockListenerMiddleware).
            // concat = run this middleware after the default ones
            concat(loggerMiddleWare)

});

// persistor controls the saving/loading process (used to wrap <App /> with PersistGate)
export const persistor = persistStore(store);

// Type helpers so TypeScript knows the shape of our state and dispatch function
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch