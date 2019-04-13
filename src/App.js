import React, { Component } from 'react';
import MainContainer from './components/MainContainer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TestComponent from './components/TestComponent';
import AppBarMain from './components/appbar/AppBarMain'

const styles = theme => ({
  root: {
    display: 'flex',
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
        <Switch>
            <div className="App" style={{textAlign: 'center'}}>
              <div className={classes.root}>
                <AppBarMain />
                  
                <main className={classes.content} >
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
export default withStyles(styles, { withTheme: true })(App);