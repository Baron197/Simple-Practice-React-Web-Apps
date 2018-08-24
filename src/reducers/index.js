import { combineReducers } from 'redux';
import UsersReducer from './UsersReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
    users: UsersReducer,
    auth: AuthReducer
});
