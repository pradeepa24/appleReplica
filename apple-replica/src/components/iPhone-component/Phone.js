import React, { Component } from 'react'
import './Phone.css';
import phone1Img from '../../images/apple-iphonexs-max-gold-back-2@2x.png';
import phone2Img from '../../images/Iphone 1@2x.png';
import phone1SmImg from '../../images/apple-iphonexs-max-gold-back-2.png';
import phone2SmImg from '../../images/apple-iphonexs-max-gold.png';
import phone1SmBlurImg from '../../images/apple-iphonexs-max-gold-back-1.png';
import phone2SmBlurImg from '../../images/apple-iphonexs-max-gold-1.png';
import BottomNav from '../bottom-nav-component/BottomNav';
import Header from '../header-component/header';
import {Link } from 'react-router-dom';

export default class Phone extends Component {
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
            <div className="phone-details-wrapper">
            <div className="phone-details">
               <div className="left-part">
                  <div className="phone-description">
                    <h3>iPhone</h3>
                    <div className="main-phone-title">
                      <h1>The ultimate iPhone</h1>
                    </div>
                    <p>The future is here. Join the iPhone Upgrade</p>
                    <p>Program to get the latest iPhone - NOW!</p>
                   </div>
                   <div className="bottom-phone-description">
                     <div className="phone-pricing">
                        <h2>From $699</h2>
                        <Link>Buy Now ></Link>
                     </div>
                     <div className="phone-models">
                        {this.props.changePhone ? 
                (
                        <div className="phone-mini-view">
                           <img src={phone2SmImg}/>
                           <img src={phone1SmBlurImg}/> 
                        </div>
                ) :
                (
                    <div className="phone-mini-view">
                           <img src={phone2SmBlurImg}/> 
                           <img src={phone1SmImg}/>
                        </div>
                )
                        }
                        <div className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          name="changePhone"
          id="changePhone"
          onChange={this.props.onChangePhone}
          checked={this.props.changePhone}
        />
        <label className="toggle-switch-label" htmlFor="changePhone">
          <span className="toggle-switch-inner" />
          <span className="toggle-switch-switch" />
        </label>
      </div>
                     </div>
                   </div>
               </div>
               <div className="right-part">
                {this.props.changePhone ? 
                (
                    <img src={phone2Img} className="front-view-phone" />
                ) :
                (
                    <img src={phone1SmImg}  />
                )
                }
                  
               </div>
               <BottomNav currentPage={this.props.history.location.pathname}></BottomNav>
            </div>
            
            </div>
            </>
        )
    }
}
