import { Link } from 'react-router-dom'
import React from 'react';

const GetPostListContainer = ({props}) => {
  return (
    <div>
      { props.state_posts && props.state_posts.map(project => {
        return (
          <Link to={`/${project.tweet_id}`}>
            <div key={project.tweet_id}>
              <h1 style={{color: 'black'}}>{project.content}</h1>
            </div>
          </Link>
        )
      })}  
    </div>
  )
}

export default GetPostListContainer
