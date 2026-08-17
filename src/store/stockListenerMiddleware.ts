import { Middleware } from "@reduxjs/toolkit";

const kreena:Middleware = ()=> (next) => (action) => {
  return next(action);
}



export default kreena