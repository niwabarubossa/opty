import React, { Component } from 'react';
import '../../assets/MainContainer.css'
import TweetsContainer from './TweetsContainer'
import TweetsDisplaysContainer from './TweetsDisplaysContainer'
import GetPostListContainer from '../containers/GetPostListContainer'
import { connect } from 'react-redux'
import { getPostsRequest, getPostsSuccess, getPosts, handleDrawerToggleReset } from '../../actions'

class MainContainer extends Component {
    componentWillMount(){
        this.props.handleDrawerToggleReset()
    }
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

const mapDispatchToProps = ({ getPostsRequest, getPostsSuccess, getPosts, handleDrawerToggleReset })
const mapStateToProps = (state) => {    
    const currentState = state.firebase.items
    return { state_posts: currentState }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
