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
export const submitTweet = input => async dispatch => {
    dispatch({ type: SUBMITTWEET, input: input })
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
export const HANDLE_DRAWER_TOGGLE_RESET = 'HANDLE_DRAWER_TOGGLE_reset'
export const handleDrawerToggleReset = () => ({
    type: HANDLE_DRAWER_TOGGLE_RESET
})

export const LOGIN_WITH_TWITTER_SUCCESS = 'LOGIN_WITH_TWITTER_SUCCESS'
export const loginWithTwitterSuccess = (user) => ({
    type: LOGIN_WITH_TWITTER_SUCCESS,
    user: user
})

export const LOGIN_WITH_TWITTER = 'LOGIN_WITH_TWITTER'
export const loginWithTwitter = () => async dispatch => {
    try {
        const user = await (
            signInWithProvider()
        );
        firestore.collection('users').doc(user.uid).set({
            uid: user.uid,
            createdAt: new Date()
        }).then(() => {
            console.log('success')
        }).catch((err) => {
            console.log(err)
        })
        dispatch({
            type: LOGIN_WITH_TWITTER_SUCCESS,
            user: user
        });
        return user;
    } catch(error) {
        console.log(error);
    }
}

async function signInWithProvider() {    
    try {
        var provider = new firebase.auth.TwitterAuthProvider();
        const response = await firebase.auth().signInWithPopup(provider);
        return response.user;
    } catch(error) {
      throw error;
    }
}

export const GET_CURRENT_STATE = 'GET_CURRENT_STATE'
export const getCurrentState = () => {
    return {
        type: GET_CURRENT_STATE,
    }
}
export const GET_USER_INFORMATION = 'GET_USER_INFORMATION'
export const getUserInformation = () => async dispatch => {
    await firebase.auth().onAuthStateChanged(user => {
        if (user) {
            dispatch(getUserInformationSuccess(user))
        } else {
            console.log('get user information error')
        }
    });
};
export const GET_USER_INFORMATION_SUCCESS = 'GET_USER_INFORMATION_SUCCESS'
export const getUserInformationSuccess = (current_user) => {  
    return {
        type: GET_USER_INFORMATION_SUCCESS,
        current_user: current_user
    }
}