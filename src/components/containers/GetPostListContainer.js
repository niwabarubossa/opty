import {connect} from 'react-redux'
// import PostList from '../PostList'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import React from 'react';
//子供
const GetPostListContainer = ({props}) => {
  return (
    <div>
      { props.state_posts && props.state_posts.map(project => {
        return (
          <Link to={`/${project.tweet_id}`}>
            <div>
              <h1 style={{color: 'black'}}>{project.content}</h1>
            </div>
          </Link>
        )
      })}  
    </div>
  )
}

export default GetPostListContainer
