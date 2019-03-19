import * as React from "react";
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';

export interface Props {
  compiler: string;
  framework: string;
}

@connect(
  (state: )
)
export class App extends React.Component<Props, {}> {
  render() {
    return (
      <AppBar></AppBar>
      <h1>Hello from {this.props.compiler} and 121 {this.props.framework}23SS!</h1>
    );
  }
}
