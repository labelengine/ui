import thunk from "redux-thunk";
import createPromiseMiddleware from "redux-promise-middleware";
import createLoggerMiddleware from "redux-logger";
import { applyMiddleware } from "redux";
import { error } from "./error"

const promise = createPromiseMiddleware();
const logger = (createLoggerMiddleware as any)();

const middleware = applyMiddleware(promise, thunk, logger, error);

export default middleware;
