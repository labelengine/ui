import { combineReducers } from "redux";
import auth from "./auth";
import user from "./user";
import { AuthModel } from "app/models";


export interface RootState {
  auth: AuthModel;
  user: {};
}

const reducers = combineReducers({auth, user});

export default reducers;
