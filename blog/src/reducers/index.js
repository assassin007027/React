import { combineReducers } from 'redux';
import { postReducer, userReducer } from './postReducer';

export default combineReducers({
    posts: postReducer,
    users: userReducer
});
