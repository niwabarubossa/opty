import React, { Component } from 'react';
import Post from './Post'

class PostList extends Component{
  render() {
    return(
      <div>
        { this.props.state_posts && this.props.state_posts.map((state_post) => 
          <Post key={state_post.content} {...state_post} />
        )}
        aaa
      </div>
    )
    
  }
}
export default PostList