export const onLoginSuccess = (user) => {
    return {
        type: "USER_LOGIN_SUCCESS", 
        payload: user
    };
};