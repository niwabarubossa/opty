import React, { Component } from 'react';
import '../../assets/MainContainer.css'
import ContentCardContainer from './ContentCardContainer'
import { connect } from 'react-redux'
import { getPostsRequest, getPostsSuccess, getPosts, handleDrawerToggleReset } from '../../actions'
import ContentsContainer from './ContentsContainer'

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
                {/* <ContentsContainer /> */}
                <ContentCardContainer />
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
