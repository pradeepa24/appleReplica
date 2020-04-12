import React, { Component } from 'react'
import './header.css';
import {Link, NavLink} from 'react-router-dom';
import hamBurger from '../../images/ham-burger-menu-icon.png';

export default class header extends Component {
  displayNav = () => {
    this.props.toggleVisibility(!this.props.isNavVisible);
  }
    render() {
        return (
          <>
          <header>
               <Link to="/">
                 <div class="apple-logo">
                   <img src="https://images-na.ssl-images-amazon.com/images/I/31yHeZqoYkL._AC_SY355_.jpg"></img>
                 </div>
                 </Link>
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
                 <div className="dropdown">
                   <button onClick={this.displayNav} className="nav-shrink">
                    <img src={hamBurger} />
                   </button>
                   {this.props.isNavVisible ? 
               ( <div className="drop-down">
                 <ul>
                 <li><Link
                     exact
                     className={this.props.currentPage === '/iPhone' ? "navbar__link--active" : ''}
                     to="/iPhone"
                     onClick={()=>{this.props.toggleVisibility(false)}}
                     ><p>iPhone</p></Link></li>
                     <li><Link onClick={()=>{this.props.toggleVisibility(false)}}><p>MacBookPro</p></Link></li>
                     <li><Link 
                     exact
                     className={this.props.currentPage === '/watch' ? "navbar__link--active" : ''}
                     to="/watch"
                     onClick={()=>{this.props.toggleVisibility(false)}}
                     ><p>Watch</p></Link></li>
                     <li><button>Notify me</button></li>
                 </ul>
               </div>
               ) :
               (
                 <></>
               )
               }
                 </div>
                 
               </header> 
              
               </>
        )
    }
}
