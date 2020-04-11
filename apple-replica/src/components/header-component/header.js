import React, { Component } from 'react'
import './header.css';
import {Link, NavLink} from 'react-router-dom';

export default class header extends Component {
    render() {
        return (
            <Link to="/">
               <header>
                 <div class="apple-logo">
                   <img src="https://images-na.ssl-images-amazon.com/images/I/31yHeZqoYkL._AC_SY355_.jpg"></img>
                 </div>
                 <nav>
                    <Link
                     exact
                     className={this.props.currentPage === '/iPhone' ? "navbar__link--active" : ''}
                     to="/iPhone"
                     ><p>iPhone</p></Link>
                     <Link><p>MacBookPro</p></Link>
                     <Link 
                     exact
                     className={this.props.currentPage === '/watch' ? "navbar__link--active" : ''}
                     to="/watch"><p>Watch</p></Link>
                     <button>Notify me</button>
                 </nav>
               </header> 
            </Link>
        )
    }
}
