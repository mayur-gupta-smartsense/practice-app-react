/* // store2.ts — SCRATCH FILE for interview revision only.
// Not wired into the app. Same idea as store.ts but with the
// "user" slice and redux-persist stripped out — those two together
// made it hard to see the plain Redux Toolkit setup underneath.

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productsSlice";
import loggerMiddleware from "./loggerMiddleWare";

// --------------------------------------------------------------
// 1) SLICES (imported, not redefined here)
// createSlice() (see cartSlice.ts / productsSlice.ts) bundles:
//   - initialState
//   - reducers, written as "mutating" code — Immer turns each one
//     into an immutable update under the hood
//   - auto-generated action creators (e.g. addToCart(...))
//   - an auto-generated reducer function (the default export)
// --------------------------------------------------------------

// --------------------------------------------------------------
// 2) MIDDLEWARE (imported from loggerMiddleWare.ts)
// Shape: (store) => (next) => (action) => { ... }
//   - store  : gives you getState() / dispatch()
//   - next   : call it to pass the action further down the chain
//   - action : the action currently being dispatched
// If you never call next(action), the action dead-ends here and
// no reducer ever sees it.
// --------------------------------------------------------------

// --------------------------------------------------------------
// 3) ROOT REDUCER
// combineReducers merges each slice's reducer into one reducer.
// The key you give it becomes the key in the state tree, e.g.:
//   { cart: {...}, product: {...} }
// --------------------------------------------------------------

const rootReducer = combineReducers({
    cart: cartReducer,
    product: productReducer,
});

// --------------------------------------------------------------
// 4) STORE
// configureStore = createStore, but with good defaults already
// wired in (redux-thunk, devtools, dev-only checks like the
// serializable/immutable middleware).
// --------------------------------------------------------------

export const store = configureStore({
    reducer: rootReducer,
    // getDefaultMiddleware() = RTK's defaults (thunk + dev checks).
    // Extend that array instead of replacing it outright.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loggerMiddleware),
    // .concat(x)  -> x runs AFTER the defaults
    // .prepend(x) -> x runs BEFORE the defaults
});

// --------------------------------------------------------------
// 5) TYPES
// Used by typed hooks (see hooks.ts: useAppDispatch / useAppSelector)
// so components get autocomplete + type-checking on state/dispatch.
// --------------------------------------------------------------

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// --------------------------------------------------------------
// What redux-persist would add on top of this (left out here on
// purpose — revise separately once this base makes sense):
//   1. persistConfig = { key, storage, whitelist: [...] }
//   2. persistedReducer = persistReducer(persistConfig, rootReducer)
//   3. pass persistedReducer to configureStore instead of rootReducer
//   4. ignore FLUSH/REHYDRATE/PAUSE/PERSIST/PURGE/REGISTER in the
//      serializableCheck (those actions carry non-serializable data)
//   5. export const persistor = persistStore(store) and wrap <App/>
//      in <PersistGate persistor={persistor}>
// --------------------------------------------------------------
*/

import { configureStore } from '@reduxjs/toolkit'
import  cartReducer from "./cartSlice"
import productReducer from "./productsSlice"
import loggerMiddleWare from './loggerMiddleWare'
// ...

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleWare)
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store