import axios from "axios";
import { ActionWithPayload } from "app/actions";
import { Action, Dispatch } from "redux";
// import { createAction } from "redux-actions";
import { AuthModel } from "app/models";

// TODO: implement actions by redux-actions

export namespace AuthActions {
  export enum Type {
    SUGN_IN = 'SUGN_IN',
    SIGN_IN_PENDING = 'SIGN_IN_PENDING',
    SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
    SIGN_IN_FAILURE = 'SIGN_IN_FAILURE',

    SUGN_UP = 'SUGN_UP',
    SIGN_UP_PENDING = 'SIGN_UP_PENDING',
    SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
    SIGN_UP_FAILURE = 'SIGN_UP_FAILURE',

    SIGN_OUT = 'SIGN_OUT',
    SIGN_OUT_PENDING = 'SIGN_OUT_PENDING',
    SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS',
    SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE',
  }

  export const signUp = (dispatch: Dispatch) => {
    dispatch(signUpPending());
  }

  export const signUpPending = (): Action => {
    return { type: Type.SIGN_UP_PENDING };
  }

  export const signUpSuccess = (): Action => {
    return { type: Type.SIGN_UP_SUCCESS };
  }

  export const signUpFailure = (error: any): ActionWithPayload<Pick<AuthModel, "error">> => {
    return {
      type: Type.SIGN_UP_FAILURE,
      payload: { error }
    };
  }

  export const signIn = (username: string, password: string): any => {
    return (dispatch: Dispatch) => {
      dispatch(signInPending());
      axios.post('/api/', {
        username,
        password
      }).then((response: any) => {
        dispatch(signInSuccess(response.data))
      }).catch((error: string) => {
        dispatch(signInFailure(error))
      });
    }
  }


  export const signInSuccess = (payload: AuthModel): ActionWithPayload<AuthModel> => {
    return {
      type: Type.SIGN_UP_SUCCESS,
      payload
    };
  }

  export const signInFailure = (error: any): ActionWithPayload<Pick<AuthModel, "error">> => {
    return {
      type: Type.SIGN_UP_FAILURE,
      payload: { error }
    };
  }
  export const signInPending = () => {
    return { type: Type.SIGN_IN_PENDING };
  }
  // export const signInPending = createAction<AuthModel>(Type.SIGN_IN_PENDING,
  //   (authModel) => {});
}

export type AuthActions = Omit<typeof AuthActions, 'Type'>;
