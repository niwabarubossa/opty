import firebase from 'firebase';
import { firestore } from '../plugins/firebase'
import 'firebase/firestore';

export const READTWEETS = 'READTWEETS'
export const readTweets = () => ({
    type: READTWEETS
})
export const FIREBASELOGIN = 'FIREBASELOGIN'
export const firebaseLogin = () => ({
    type: FIREBASELOGIN
})
export const LOGINSTATUS = 'LOGINSTATUS'
export const loginStatus = aiueo => async dispatch => {
    dispatch({ type: LOGINSTATUS, aiueo })
}
export const FIREBASELOGOUT = 'FIREBASELOGOUT'
export const firebaseLogout = () => ({
    type: FIREBASELOGOUT
})
export const SUBMITTWEET = 'SUBMITTEXT'
export const submitTweet = values => async dispatch => {
    // const values = values
    const new_values = values
    dispatch({ type: SUBMITTWEET, new_values })
}
export const GET_TWEETS = 'GET_TWEETS'
export const getTweets = () => ({
    type: GET_TWEETS
})
export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST'
export const getPostsRequest = () => {
  return {
    type: GET_POSTS_REQUEST
  }
}
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const getPostsSuccess = (json) => {  
  return {
    type: GET_POSTS_SUCCESS,
    posts: json,
    receivedAt: Date.now()
  }
}
export const getPosts = () => async dispatch => {
    const temperature = []
    await firestore.collection("projects").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            temperature.push(doc.data())
        });
    });
    dispatch(getPostsSuccess(temperature))
}
export const getSelectedPosts = (tweet_id) => async dispatch => {
    const temperature = []
    await firestore.collection("projects").where("tweet_id","==",tweet_id).get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            temperature.push(doc.data())
        });
    });
    dispatch(getPostsSuccess(temperature))
}
export const HANDLE_DRAWER_TOGGLE = 'HANDLE_DRAWER_TOGGLE'
export const handleDrawerToggle = () => ({
    type: HANDLE_DRAWER_TOGGLE
})