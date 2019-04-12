import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TweetsContainer from './components/TweetsContainer'
import Header from './components/Header'
import MainContainer from './components/MainContainer'
import GetPostListContainer from './components/containers/GetPostListContainer'
import { getPostsRequest, getPostsSuccess, getPosts } from './actions'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount(){
    this.props.getPosts()
  }
  render() {
    return (
      <div className="App">
        <Header />s
        <MainContainer />
        <GetPostListContainer props={this.props} />
      </div>
    );
  }
}

const mapDispatchToProps = ({ getPostsRequest, getPostsSuccess, getPosts })
const mapStateToProps = (state) => {    
  const length = Object.keys(state.firebase).length
  const currentState = state.firebase[length-1].items
  return { state_posts: currentState }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
