import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onLoginSuccess } from '../actions';
import '../supports/css/components/loginpage.css';

class LoginPage extends Component {
    // obj1 = (fn, c) => {
    //     var d = fn(c);
    //     return (a,b = d) => [a,b];
    // }

    // test = (num) => {
    //     return num;
    // }
    onLoginClick = () => {
        var email = this.refs.email.value;
        var password = this.refs.password.value;
        var username = "";
        var check = false;
        for(var index in this.props.usersFriendly) {
            if(this.props.usersFriendly[index].email == email &&
                this.props.usersFriendly[index].password == password)
            {
                check = true;
                username = this.props.usersFriendly[index].username;
                break;
            }
        }
        if(check) {      
            this.props.onLoginSuccess({ username, email });
        }
    }
    
    render() {
        // console.log(this.obj1(this.test(7), 8)(5)[1]);
        console.log(this.props.usersFriendly);
        console.log(this.props.theAuth);
        return (
            <div className="login-background">
                <div className="container">
                    <h1 className="form-heading">Login Form</h1>
                    <div className="login-form">
                        <div className="main-div">
                            <div className="panel">
                                <h2>Its nice to have you back!</h2>
                                <p>Please enter your email and password</p>
                            </div>
                            <form id="Login">

                                <div className="form-group">


                                    <input type="email" ref="email" className="form-control" id="inputEmail" placeholder="Email Address" />

                                </div>

                                <div className="form-group">

                                    <input type="password" ref="password" className="form-control" id="inputPassword" placeholder="Password" />

                                </div>
                                <div className="forgot">
                                    <a href="reset.html">Forgot password?</a>
                                </div>
                                <input type="button" className="btn btn-primary" value="Login" onClick={this.onLoginClick}/>

                            </form>
                        </div>
                        <p className="botto-text"> Designed by Sunil Rajput</p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const users = state.users;
    const auth = state.auth;

    return { usersFriendly: users, theAuth: auth };
}

export default connect(mapStateToProps, { onLoginSuccess })(LoginPage);

// connect = (map) => {
//     var globalState = getGlobalState();
//     map(globalState);
//     return (classComp) => { };
// }