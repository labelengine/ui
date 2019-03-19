import * as React from 'react';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { RootState } from 'app/reducers'
import { AuthModel } from 'app/models';
import { AuthActions } from 'app/actions/auth';
import { omit } from 'app/utils'

const styles = createStyles({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

export namespace NavBar {
  export interface Props extends WithStyles<typeof styles> {
    auth: AuthModel;
    actions: AuthActions;
  }
}

@connect(
  (state: RootState): Pick<NavBar.Props, 'auth'> => ({
    auth: state.auth
  }),
  (dispatch: Dispatch): Pick<NavBar.Props, 'actions'> => ({
    actions: bindActionCreators(omit(AuthActions, 'Type'), dispatch)
  })
)
class NavBar extends React.Component<NavBar.Props, {}> {
  constructor(props: NavBar.Props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
