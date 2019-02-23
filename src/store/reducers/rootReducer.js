import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
import authReducer from './authReducer'
import projectReducer from './projectReducer'
import {firebaseReducer} from 'react-redux-firebase'
import messageReducer from './messageReducer'


const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    message: messageReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer