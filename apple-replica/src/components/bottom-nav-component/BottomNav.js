import React, { Component } from 'react'
import './BottomNav.css';
import {Link } from 'react-router-dom';

export default class BottomNav extends Component {
    render() {
        return (
            <div className="page-links" style={(this.props.currentPage === '/landing')?{flexDirection: 'row'}:{flexDirection: 'column'}}>
                  <Link className={(this.props.currentPage === '/iPhone') ? 'active-bottom-nav' : ''} to="/iPhone"><img src="https://i.ya-webdesign.com/images/the-transparent-case-5.png"/></Link>
                  <Link><img src="https://st3.depositphotos.com/2962971/13016/v/450/depositphotos_130163388-stock-illustration-laptop-with-blank-screen-13.jpg" /></Link>
                  <Link className={(this.props.currentPage === '/watch') ? 'active-bottom-nav' : ''} to="/watch"><img src="https://static.bhphoto.com/images/images1000x1000/1554381368_1469819.jpg" /></Link>
              </div>
        )
    }
}
