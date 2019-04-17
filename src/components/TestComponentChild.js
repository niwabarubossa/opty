import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import React from 'react';
//子供
const TestComponentChild = ({props}) => {
  return (
    <div>
      { props.state_posts && props.state_posts.map(project => {
        return (
            <div key={project.tweet_id}>
              <h1 style={{color: 'black'}}>test component child </h1>
              <h1 style={{color: 'black'}}>{project.content}</h1>
            </div>
        )
      })}  
    </div>
  )
}

export default TestComponentChild
