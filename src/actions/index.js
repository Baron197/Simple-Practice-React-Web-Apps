import axios from 'axios';
import { API_URL_1 } from '../supports/api-url/apiurl';

export const onLogin = (user) => {
    return(dispatch) => {
        axios.get(API_URL_1 + '/users', {
            params: {
                email: user.email,
                password: user.password
            }
        }).then(user => {
            dispatch({
                type: "USER_LOGIN_SUCCESS", 
                payload: { username: user.data[0].username, email: user.data[0].email }
            });
        }).catch(err => {
            console.log(err);
            dispatch({
                type: "USER_LOGIN_FAIL"
            });
        })
    }
};