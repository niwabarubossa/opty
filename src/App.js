import React, { Component } from 'react';
import MainContainer from './components/MainContainer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TestComponent from './components/TestComponent';
import AppBarMain from './components/AppBar/AppBarMain'
import InNav from './components/AppBar/InNav'
import ManagementPage from "./components/ManagementPage/ManagementPage";
import UserPage from './components/UserPage/UserPage'

const drawerWidth = 240;
const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class App extends Component {

  render() {

    const { classes, theme } = this.props;
    return (
      <BrowserRouter>
            <div className="App" style={{textAlign: 'center'}}>
              <div className={classes.root}>   
                <AppBarMain />
                <nav className={classes.drawer}>
                  <InNav />
                </nav>   

                <main className={classes.content} style={{textAlign: 'center'}}>
                  <Route exact path="/" component={MainContainer} />
                  <Route path="/:id" component={TestComponent} />
                  <Route path="/management" component={ManagementPage} />
                  <Route path="/user/:id" component={UserPage} />
                </main>
              </div>
            </div>
      </BrowserRouter> 
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(App);