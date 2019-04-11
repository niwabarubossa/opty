import React, { Component } from 'react';
import Post from './Post'

class PostList extends Component{
  render() {
    console.log('i am post list in state_posts')
    console.log(this.props.state_posts);
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

var hairetu = [{title: 'aiueo',body: 'aiueo'},{title: 'kaki',body: 'bady'}]
hairetu.map((one) =>
    console.log(one.body)
)
var hairetu = [{title: 'aiueo',body: 'aiueo'},{title: 'kaki',body: 'bady'}]
export default PostList