import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TweetsContainer from './components/TweetsContainer'
import Header from './components/Header'
import MainContainer from './components/MainContainer'
import GetPostListContainer from './components/containers/GetPostListContainer'
import { getPostsRequest, getPostsSuccess, getPosts } from './actions'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TestComponent from './components/TestComponent'

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/:id" component={TestComponent} />
            <Route exact path="/" component={MainContainer} />
          </Switch>
        </BrowserRouter> 
      </div>
    );
  }
}

export default App;