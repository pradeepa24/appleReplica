import React, { Component } from 'react';
import './Landing.css';
import BottomNav from '../bottom-nav-component/BottomNav';
import Header from '../header-component/header';

export default class Landing extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.history.location);
        setTimeout(() =>{
           this.props.disableShowMessage();
        },2000)
    } 
    render() {
        return (
            <>
            <Header history = {this.props.history} currentPage={this.props.history.location.pathname} 
            isNavVisible={this.props.isNavVisible}
            toggleVisibility = {this.props.toggleVisibility}
            authorized = {this.props.authorized}
            logout = {this.props.logout}
            enableShowMessage = {this.props.enableShowMessage} ></Header>
             {this.props.showMessage ? (
             <span className="success-message">{this.props.authorized ? 'You are successfully logged in' : 'You are successfully logged out'}</span>) : (<></>)}
            <div class="landing-main">
              <h2>Welcome to Apple</h2>  
              <div class="sub-link">
                  <h4>See our Products</h4>
              </div>
              <BottomNav currentPage={this.props.history.location.pathname}></BottomNav>
            </div>
            </>
        )
    }
}
