import React, { Component } from 'react';
import MainContainer from './components/MainContainer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TestComponent from './components/TestComponent';
import AppBarMain from './components/AppBar/AppBarMain'
import ManagementPage from "./components/ManagementPage/ManagementPage";

const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    // paddingTop: '64px'
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
                {/* <AppBarMain /> */}
                  
                {/* <main className={classes.content} > */}
                <BrowserRouter>
                    <main className={classes.content} style={{textAlign: 'center'}}>
                      <AppBarMain />
                      <div className={classes.content} style={{textAlign: 'center'}}>
                        <div style={{flexGrow: 1}}>
                          <Route exact path="/" component={MainContainer} />
                          <Route path="/:id" component={TestComponent} />
                          <Route path="/management" component={ManagementPage} />
                        </div>  
                      </div>
                    </main>
                </BrowserRouter> 
                {/* </main> */}
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