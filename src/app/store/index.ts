import { createStore, Store } from "redux";
import reducers, { RootState } from "app/reducers/";
import middlewares from "app/middlewares";
import { composeWithDevTools } from "redux-devtools-extension";


export function configureStore(initialState?: RootState): Store<RootState> {
  let configuredMiddlewares = middlewares;
  if (process.env.NODE_ENV !== 'production') {
    configuredMiddlewares = composeWithDevTools(middlewares);
  }

  const store = createStore(reducers, initialState as any, configuredMiddlewares) as Store<RootState>;

  return store;
}
