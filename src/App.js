import React, {Component} from 'react';
import AppRouter from './features/router';
import withRoot from './withRoot';
import {withStyles} from '@material-ui/core/styles';
import Layout from './components/layout';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

class App extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Layout>
          <AppRouter />
        </Layout>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(App));
