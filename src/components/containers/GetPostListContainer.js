import {connect} from 'react-redux'
// import PostList from '../PostList'

import React from 'react';

const GetPostListContainer = ({props}) => {
  return (
    <div>
      { props.state_posts && props.state_posts.map(project => {
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

// const mapStateToProps = (state) => {    
//   // const count = state.posts.count
//   const length = Object.keys(state.firebase).length
//   const currentState = state.firebase[length-1].items
//   console.log('---------current state----------')
//   console.log(currentState);
//   return { state_posts: currentState }
// }

// const GetPostListContainer = connect(
//   mapStateToProps
// )(PostList)

// export default GetPostListContainer;