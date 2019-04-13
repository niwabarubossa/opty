import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import TestComponentChild from './TestComponentChild'

import { getPostsRequest, getPostsSuccess, getPosts ,getSelectedPosts } from '../actions'
import { connect } from 'react-redux'
class TestComponent extends Component {
    
    componentWillMount(){
        console.log(typeof Number(this.props.match.params.id))
        this.props.getSelectedPosts(Number(this.props.match.params.id))
    }

    render(){
        return(
            <div>
                <TestComponentChild props={this.props} />
            </div>
        )
    }
}

const mapDispatchToProps = ({ getPostsRequest, getPostsSuccess, getPosts,getSelectedPosts })
const mapStateToProps = (state) => {    
  const length = Object.keys(state.firebase).length
  const currentState = state.firebase[length-1].items
  return { state_posts: currentState }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent)