import React, { Component } from 'react';
import './Watch.css';
import BottomNav from '../bottom-nav-component/BottomNav';
import Header from '../header-component/header';
import {Link } from 'react-router-dom';
import watch1Img from '../../images/White Watch-2.png';
import watch2Img from '../../images/Black Watch-1.png';

export default class Watch extends Component {
  constructor(props) {
    super(props);
    if (!this.props.authorized) {
      this.props.history.push('/login');
    }
  }
    displayWatchesRadio = () =>{
        return this.props.watches.map((watch,ind)=>{
            return (
                <div className="radio-input">
                   <label index={ind} className="container" >{watch.color}
                     <input type="radio"
                            id="whiteRadio"
                            name="WhiteRadio"
                            value={watch.color}
                            onChange={this.props.onRadiochange}
                            checked={watch.checked}
                            />
                       <span className={watch.color==='White'? `checkmark whiteRadio` : `checkmark blackRadio`}></span>
                    </label>
                </div>
            );
        })
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
            <div className="watch-details-wrapper">
               <div className="watch-details">
                 <div className="left-part">
                   <div className="watch-description">
                   <h3>Apple Watch</h3>
                    <div className="main-phone-title">
                      <h1>Change starts within.</h1>
                    </div>
                    <p>Apple Watch Series 4. Fundamentally redesigned and</p>
                    <p>re-engineered to help you ne even more active,</p>
                    <p>healthy, and connected.</p>
                   </div>
                   <div className="bottom-watch-description">
                     <div className="watch-pricing">
                        <h2>From $699</h2>
                        <Link>Buy Now ></Link>
                     </div>
                   </div>
                 </div>
                 <div className="watch-right-part">
                   <div>
                   {this.props.changeWatch === 'White' ? 
                (
                    <img src={watch1Img} />
                ) :
                (
                    <img src={watch2Img} />
                )
                }
                   </div>
                   <div className="radio-watch-selection">
                      {this.displayWatchesRadio()}
                   </div>
                 </div>
            <BottomNav currentPage={this.props.history.location.pathname}></BottomNav>
               </div>
            </div>
            </>
        )
    }
}
