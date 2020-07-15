import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './compoents/header/header.component';
import signinandsignup from 
'./pages/signin and signup component/signinandsignup.component';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

unsubscribeFromAuth = null 

componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => 
    this.setState({currentUser: user}));

}

componentWillUnmount () {
  this.unsubscribeFromAuth();
}
  render() {
    return (
      <div> 
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path = '/' component = {HomePage} />
          <Route path = '/shop' component = {ShopPage} />
          <Route path = '/signin' component = {signinandsignup} />
        </Switch>
        <HomePage/> 
      </div>
    );
  } 
}

export default App;
