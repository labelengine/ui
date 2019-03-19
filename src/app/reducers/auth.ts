import { ActionWithPayload } from "app/actions";
import { handleActions } from "redux-actions";
import { AuthModel } from "app/models/auth";
import { AuthActions } from "app/actions/auth";

const initialState: AuthModel = {
  authenticated: !!localStorage.getItem('access_token'),
  access_token: localStorage.getItem('access_token'),
  pending: false
}

const reducer = (state: AuthModel = initialState,
  action: ActionWithPayload<AuthModel>) : AuthModel => {
  const { type, payload } = action;
  switch (type) {
    case AuthActions.Type.SIGN_IN_PENDING:
      return {
        ...state,
        pending: true
      };
    case AuthActions.Type.SIGN_IN_SUCCESS:
      return {
        ...state,
        pending: false,
        authenticated: true,
        access_token: action.payload.access_token
      };
    case AuthActions.Type.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload.error
      };
  }
  return state;
};

export default reducer;

// const reducer = handleActions({

// })
