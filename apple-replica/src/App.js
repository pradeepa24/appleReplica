import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import Home from './components/home-component/Home';
import Landing from './components/landing-page-component/Landing';
import Phone from './components/iPhone-component/Phone';
import Watch from './components/watch-component/Watch';
import Login from './components/login-component/Login';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changePhone: true,
      changeWatch: 'White',
      watches: [{color:'White', checked:true},
                {color:'Black', checked:false}],
      isNavVisible: false,
      userName: null,
      password: null,
      authorized: false,
      authorizedCredential: {
        userName: 'reactPerson',
        password: 'happyPath'
      },
      showError: false,
    }
}
enableShowError = () => {
  this.setState({
    showError: true
  })
}
disableShowError = () => {
  this.setState({
    showError: false
  })
}
enableShowMessage = () => {
  this.setState({
    showMessage: true
  })
}
disableShowMessage = () => {
  this.setState({
    showMessage: false
  })
}
onChangePhone = e => {
  console.log(e.target.checked);
  this.setState({
      changePhone: e.target.checked
  })
};
onRadiochange = e => {
  let watchesCopy = [...this.state.watches];
  watchesCopy.find((watch)=>watch.color === e.target.value).checked = true;
  watchesCopy.find((watch)=>!(watch.color === e.target.value)).checked = false;
  this.setState({
      changeWatch: e.target.value,
      watches: watchesCopy
  });
  console.log(e.target.checked);
};
toggleVisibility = (visibility) => {
  this.setState({
    isNavVisible: visibility
  })
}
login = () => {
  if (this.state.userName === this.state.authorizedCredential.userName && this.state.password === this.state.authorizedCredential.password) {
    this.setState({
      authorized: true
    })
  } else {
    this.setState({
      showError: true
    })
  }
}
logout = () => {
  this.setState({
    userName: null,
    password: null,
    authorized: false
  })
}
onChangeInput = (e) => {
this.setState({
  [e.target.name]: e.target.value,
  showError: false
})
}
  render() {
  return (
    <div>
      <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/login" render = { (props) => <Login {...props} 
           userName={this.state.userName}
           password = {this.state.password}
           authorized = {this.state.authorized}
           onChangeInput = {this.onChangeInput}
           enableShowMessage = {this.enableShowMessage}
           login = {this.login}
           showError = {this.state.showError}
           /> } />
           <Route exact path="/landing" render = { (props) => <Landing {...props} 
           isNavVisible={this.state.isNavVisible}
           toggleVisibility = {this.toggleVisibility}
           authorized = {this.state.authorized}
           logout = {this.logout}
           showMessage = {this.state.showMessage}
           enableShowMessage = {this.enableShowMessage}
           disableShowMessage = {this.disableShowMessage}
           /> } />
           <Route exact path="/iPhone" render = { (props) => <Phone {...props} 
           isNavVisible={this.state.isNavVisible}
           toggleVisibility = {this.toggleVisibility}
           changePhone={this.state.changePhone} onChangePhone={this.onChangePhone}
           authorized = {this.state.authorized}
           logout = {this.logout}
           enableShowMessage = {this.enableShowMessage}
           /> } />
           <Route exact path="/watch" render = { (props) => <Watch {...props} 
           isNavVisible={this.state.isNavVisible}
           toggleVisibility = {this.toggleVisibility}
           changeWatch={this.state.changeWatch}
           watches={this.state.watches} onRadiochange={this.onRadiochange}
           authorized = {this.state.authorized}
           logout = {this.logout}
           enableShowMessage = {this.enableShowMessage}
           /> } />
           {/* <Route exact path="/new-beer" render = { (props) => <NewBeer {...props} newBeer = {this.state.newBeer} setBeer = {this.setBeer} resetBeer = {this.resetBeer}/> }  />
           <Route exact path="/beers/:id" render = { (props) => <Beer {...props} beer = {this.state.beer} dispBeer = {this.dispBeer}/> }/> */}
        </Switch>
    </div>
  );
}
}
