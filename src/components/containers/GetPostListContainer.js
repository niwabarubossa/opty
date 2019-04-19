import { Link } from 'react-router-dom'
import React from 'react';

const GetPostListContainer = ({props}) => {
  return (
    <div>
      { props.state_posts && props.state_posts.map(project => {
        return (
          // <Link to={`/${project.tweet_id}`}>
          <Link to={`user/${project.author_id}`}>
            <div key={project.tweet_id} style={{backgroundColor: 'orange'}}>
              title<h1 style={{color: 'black'}}>{project.title}</h1>
              body<h1 style={{color: 'black'}}>{project.body}</h1>
              tweet_id<h1 style={{color: 'black'}}>{project.tweet_id}</h1>
              author_id<h1 style={{color: 'black'}}>{project.author_id}</h1>
            </div>
          </Link>
        )
      })}  
    </div>
  )
}

export default GetPostListContainer
