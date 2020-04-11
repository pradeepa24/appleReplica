import React, { Component } from 'react';
import './Landing.css';
import BottomNav from '../bottom-nav-component/BottomNav';
import Header from '../header-component/header';

export default class Landing extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.history.location);
    } 
    render() {
        return (
            <>
            <Header currentPage={this.props.history.location.pathname}></Header>
            <div class="landing-main">
              <h1>Welcome to Apple</h1>  
              <div class="sub-link">
                  <h4>See our Products</h4>
              </div>
              <BottomNav currentPage={this.props.history.location.pathname}></BottomNav>
            </div>
            </>
        )
    }
}
