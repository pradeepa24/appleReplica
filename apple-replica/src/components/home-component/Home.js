import React, { Component } from 'react'
import './Home.css';
import {Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <Link to="/landing">
            <header class="header-main">
                 <div class="apple-logo-home">
                   <img src="https://images-na.ssl-images-amazon.com/images/I/31yHeZqoYkL._AC_SY355_.jpg"></img>
                 </div>
            </header>
               <div class="main-content">
                 <h4>New Products Coming This Summer</h4>
                 <div>
                   <h2>2020</h2>
                 </div>
               </div>
            </Link>  
        )
    }
}
