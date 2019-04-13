import React, { Component } from 'react';
import classes from './App.css';
import MainContainer from './components/MainContainer'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TestComponent from './components/TestComponent';
// import AppBarDrawer from './components/appbar/AppBarDrawer'
import AppBarMain from './components/appbar/AppBarMain'

const drawerWidth = 240;

const content_style = {
  flexGrow: 1,
  padding: '5px',
  paddingTop: '64px'
}

class App extends Component {

  render() {
    // const { classes, theme } = this.props;
    return (
      <BrowserRouter>
        <Switch>
            <div className="App">
              <div className={classes.root}>
                <AppBarMain />
                  
                <main className={classes.content} style={content_style} >
                <BrowserRouter>
                  <Switch>
                    <Route exact path="/" component={MainContainer} />
                    <Route path="/:id" component={TestComponent} />
                  </Switch>
                </BrowserRouter> 
                </main>
              </div>
            </div>
        </Switch>
      </BrowserRouter> 
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};
// export default withStyles(styles, { withTheme: true })(App);
export default App;