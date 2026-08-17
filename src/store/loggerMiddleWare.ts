import { Middleware } from "@reduxjs/toolkit";

const loggerMiddleWare: Middleware = (store) => (next) => (action) => {
    console.log("Before state:", store.getState());
    console.log("Action:", action);
    const result = next(action)
    console.log("After state:", store.getState());
    return result;
}

export default loggerMiddleWare;

 
