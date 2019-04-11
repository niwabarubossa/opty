import firebase from 'firebase';
import { firestore } from '../plugins/firebase'
import 'firebase/firestore';

export const READTWEETS = 'READTWEETS'
export const FIREBASELOGIN = 'FIREBASELOGIN'
export const LOGINSTATUS = 'LOGINSTATUS'
export const FIREBASELOGOUT = 'FIREBASELOGOUT'
export const SUBMITTWEET = 'SUBMITTEXT'
export const GET_TWEETS = 'GET_TWEETS'

const aiueo = 'action/index.js　におけるconst'

export const readTweets = () => ({
    type: READTWEETS
})
export const firebaseLogin = () => ({
    type: FIREBASELOGIN
})
// export const loginStatus = () => ({
//     type: LOGINSTATUS
// })
export const loginStatus = aiueo => async dispatch => {
    dispatch({ type: LOGINSTATUS, aiueo })
}
export const firebaseLogout = () => ({
    type: FIREBASELOGOUT
})
export const submitTweet = values => async dispatch => {
    // const values = values
    const new_values = values
    dispatch({ type: SUBMITTWEET, new_values })
}
export const getTweets = () => ({
    type: GET_TWEETS
})

// -------------------------------------------------------------------------------------

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST'
export const getPostsRequest = () => {
  return {
    type: GET_POSTS_REQUEST
  }
}

export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const getPostsSuccess = (json) => {  
    debugger;
  return {
    type: GET_POSTS_SUCCESS,
    posts: json,
    receivedAt: Date.now()
  }
}

// export const getPosts = () => {
//   return (dispatch) => {
//       debugger;
//       dispatch(getPostsRequest())
//       const temperature = []
//       firestore.collection("tweets").get().then(function(querySnapshot) {
//           querySnapshot.forEach(function(doc) {
//               temperature.push(doc.data())
//           });
//       });
//       return dispatch(getPostsSuccess(temperature))
//   }
// }
const temperature = []
export const getPosts = () => async dispatch => {
    await firestore.collection("projects").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            temperature.push(doc.data())
        });
    });
    dispatch(getPostsSuccess(temperature))
}


// export const deleteEvent = id => async dispatch => {
//     await await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
//     dispatch({ type: DELETE_EVENT, id }) 
// }