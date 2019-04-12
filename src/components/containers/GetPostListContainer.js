import {connect} from 'react-redux'
// import PostList from '../PostList'

import React from 'react';

const GetPostListContainer = ({props}) => {
  return (
    <div>
      { props.state_posts.map(project => {
        return (
          <div>
            <h1 style={{color: 'black'}}>{project.content}</h1>
          </div>
        )
      })}  
    </div>
  )
}

export default GetPostListContainer
