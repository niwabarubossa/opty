import React, { Component } from 'react';
import '../assets/MainContainer.css'
import TweetsContainer from './TweetsContainer'
import TweetsDisplaysContainer from './TweetsDisplaysContainer'
import GetPostListContainer from './containers/GetPostListContainer'
import { connect } from 'react-redux'
import { getPostsRequest, getPostsSuccess, getPosts } from '../actions'

class MainContainer extends Component {
    componentDidMount(){
        this.props.getPosts()
    }
    render(){
        return(
            <div className="mainContainer">
                <TweetsContainer />
                <TweetsDisplaysContainer />
                <GetPostListContainer props={this.props} />
            </div>
        )
    }
}

const mapDispatchToProps = ({ getPostsRequest, getPostsSuccess, getPosts })
const mapStateToProps = (state) => {    
  const length = Object.keys(state.firebase).length
  const currentState = state.firebase[length-1].items
  return { state_posts: currentState }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
