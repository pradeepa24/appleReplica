import React, { Component } from 'react';
import './Mac.css';
import Header from '../header-component/header';
import BottomNav from '../bottom-nav-component/BottomNav';

export default class Mac extends Component {
    constructor(props) {
        super(props);
        if (!this.props.authorized) {
          this.props.history.push('/login');
        }
      }
    render() {
        return (
            <>
          <Header currentPage={this.props.history.location.pathname} 
          isNavVisible={this.props.isNavVisible}
          history = {this.props.history}
          toggleVisibility = {this.props.toggleVisibility}
          authorized = {this.props.authorized}
            logout = {this.props.logout}
            enableShowMessage = {this.props.enableShowMessage}></Header>
            <div className="mac-content">
               <h2>Coming Soon ....</h2> 
            </div>
            </>
        )
    }
}
