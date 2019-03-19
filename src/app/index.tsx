import * as React from "react";
import * as ReactDOM from "react-dom";
import { Switch, Route } from "react-router-dom";
import { App as MainApp } from "app/containers/App";
// export interface Props {

// }

export const App: React.SFC<any> = (props) => (
  <Switch>
    <Route path="/" component={MainApp} />
  </Switch>
);
