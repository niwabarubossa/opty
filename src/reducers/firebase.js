import { 
    FIREBASELOGIN,LOGINSTATUS,FIREBASELOGOUT,SUBMITTWEET,GET_TWEETS,GET_POSTS_REQUEST, GET_POSTS_SUCCESS,HANDLE_DRAWER_TOGGLE,HANDLE_DRAWER_TOGGLE_RESET
 } from '../actions'
import firebase from 'firebase';
import { firestore } from '../plugins/firebase'
import 'firebase/firestore';

const initialState = {
    isFetching: false,
    items: [],
    mobileOpen: false
  }

export default ( state = [initialState] , action ) => {
    console.log('acion')
    console.log(action)
    switch(action.type){
        case FIREBASELOGIN:
            console.log('----------------------firebase login action-----------------------')
            firebase.auth().signInAnonymously()
            return state
        case FIREBASELOGOUT:
            firebase.auth().signOut()
            .then(_ => {
                console.log('logout complete')
            }, err => {
            // エラーを表示する等
            });
            return state
        case LOGINSTATUS:
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                console.log('ログイン中')
                console.log(user)
                debugger;
                } else {
                console.log('ログアウト中。')
                }
            });
            return state
        case SUBMITTWEET:
            firestore.collection('tweets').add({
                title: action.new_values.title,
                body: action.new_values.body,
                created_at: new Date(),
              }).then(() => {
              });
            return state 
        case GET_TWEETS:
            const temperature = []
            firestore.collection("tweets").get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    console.log(doc.data());
                    temperature.push(doc.data())
                });
            });
            return state
        case GET_POSTS_REQUEST:
            return [
              ...state,
              {
                isFetching: true,
                items: []
              }
            ]
        case GET_POSTS_SUCCESS:
            return Object.assign({}, state, {
                mobileOpen: state.mobileOpen,
                isFetching: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
        case HANDLE_DRAWER_TOGGLE:
            return Object.assign({}, state, {
                mobileOpen: !state.mobileOpen,
                isFetching: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
        case HANDLE_DRAWER_TOGGLE_RESET:
            return Object.assign({}, state, {
                mobileOpen: false,
                isFetching: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
        default: 
            return state
    }
}