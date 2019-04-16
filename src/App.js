import React, { Component } from 'react';
import MainContainer from './components/MainContainer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TestComponent from './components/TestComponent';
import AppBarMain from './components/AppBar/AppBarMain'
import InNav from './components/AppBar/InNav'
import ManagementPage from "./components/ManagementPage/ManagementPage";

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
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class App extends Component {

  render() {
    console.log('---------theme--------------')
    console.log(this.props)
    const { classes, theme } = this.props;
    console.log('---------theme--------------')
    console.log(this.props)
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