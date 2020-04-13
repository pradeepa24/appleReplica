import React, { Component } from 'react';
import './Login.css';
import {Link } from 'react-router-dom';

export default class Login extends Component {
    loginCall = (e) => {
        e.preventDefault();
        this.props.login();
        setTimeout(()=>{
          if(this.props.authorized) {
              this.props.history.push('/landing');
              this.props.enableShowMessage();
          }
        },100);
    }
    render() {
        return (
            <div className="login-wrapper">
             <Link to="/landing">
                 <header className="header-main">
                  <div className="apple-logo-home">
                   <img src="https://images-na.ssl-images-amazon.com/images/I/31yHeZqoYkL._AC_SY355_.jpg"></img>
                  </div>
                </header>
            </Link>
            <h2>Please login to view our products</h2>
            <div className="login-content">
               <form>
                 <div>
                   <label>
                       User name
                   </label>
                   <input name='userName' value={this.props.userName} onChange={this.props.onChangeInput}
                       placeholder='please enter user name'
                   />
                 </div>
                 <div>
                   <label>
                       Password
                   </label>
                   <input type="password" name='password' value={this.props.password} onChange={this.props.onChangeInput}
                       placeholder='please enter password'
                   />
                </div>
                <button onClick={this.loginCall}>LOGIN</button>
               </form>
            </div>
            {this.props.showError ? (<span className="error-message"><small>Please enter a valid user name and password</small></span>) : (<></>)}
            </div>
        )
    }
}
