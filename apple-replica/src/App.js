import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import Home from './components/home-component/Home';
import Landing from './components/landing-page-component/Landing';
import Phone from './components/iPhone-component/Phone';
import Watch from './components/watch-component/Watch';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changePhone: true,
      changeWatch: 'White',
      watches: [{color:'White', checked:true},
                {color:'Black', checked:false}],
      isNavVisible: false
    }
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
  render() {
  return (
    <div>
      <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/landing" render = { (props) => <Landing {...props} 
           isNavVisible={this.state.isNavVisible}
           toggleVisibility = {this.toggleVisibility}
           /> } />
           <Route exact path="/iPhone" render = { (props) => <Phone {...props} 
           isNavVisible={this.state.isNavVisible}
           toggleVisibility = {this.toggleVisibility}
           changePhone={this.state.changePhone} onChangePhone={this.onChangePhone}/> } />
           <Route exact path="/watch" render = { (props) => <Watch {...props} 
           isNavVisible={this.state.isNavVisible}
           toggleVisibility = {this.toggleVisibility}
           changeWatch={this.state.changeWatch}
           watches={this.state.watches} onRadiochange={this.onRadiochange}/> } />
           {/* <Route exact path="/new-beer" render = { (props) => <NewBeer {...props} newBeer = {this.state.newBeer} setBeer = {this.setBeer} resetBeer = {this.resetBeer}/> }  />
           <Route exact path="/beers/:id" render = { (props) => <Beer {...props} beer = {this.state.beer} dispBeer = {this.dispBeer}/> }/> */}
        </Switch>
    </div>
  );
}
}
