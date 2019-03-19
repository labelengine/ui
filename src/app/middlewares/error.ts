import { Middleware } from "redux";

export const error: Middleware = (store) => (next) => (action) => {
  try {
    next(action);
  } catch(e) {
    console.log("Something goes wrong: ", e);
  }
}
