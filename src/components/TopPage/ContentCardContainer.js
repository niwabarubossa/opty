import React, { Component } from 'react';
import ContentCard from './ContentCard'
import { getPostsRequest, getPostsSuccess, getPosts, handleDrawerToggleReset } from '../../actions'
import { connect } from 'react-redux'

class ContentCardContainer extends Component {
    componentWillMount(){
        this.props.handleDrawerToggleReset()
    }
    componentDidMount(){
        this.props.getPosts()
    }
    render(){
        return(
            <div>
                { this.props.state_posts && this.props.state_posts.map(project => {
                    return (
                    // <Link to={`/${project.tweet_id}`}>
                        <div key={project.tweet_id}>
                        {/* uwaaa<h1 style={{color: 'black'}}>{project.title}</h1>
                        body<h1 style={{color: 'black'}}>{project.body}</h1>
                        tweet_id<h1 style={{color: 'black'}}>{project.tweet_id}</h1>
                        <Link to={`user/${project.author_id}`}>
                            author_id<h1 style={{color: 'black'}}>{project.author_id}</h1>
                        </Link>
                        */}
                        <ContentCard props={project} />

                        </div>
                    )
                })}  

            </div>
        )
    }
}

const mapDispatchToProps = ({ getPostsRequest, getPostsSuccess, getPosts, handleDrawerToggleReset })
const mapStateToProps = (state) => {    
    const currentState = state.firebase.items
    return { state_posts: currentState }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContentCardContainer)
