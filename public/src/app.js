'use strict';
import React, {Component, Fragment} from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';

import ReactDOM from 'react-dom';

import USERLIST from './components/UserList.js';

import SpotItPage from './components/spot-it/spot-it-page.js';

class HomePage extends Component {
  render() {
   return <Fragment>
    <h1>App</h1>
    <p>stuff and things</p>
    <p><Link to="/other">Other</Link></p>
    <p><Link to="/users">Users</Link></p>
    <p><Link to="/spot-it">Spot it Game!</Link></p>

    </Fragment>
  }
}

class OtherPage extends Component {
  render() {
   return <Fragment>
    <h1>Other Page</h1>
    <p>Other stuff and things</p>
    <p><Link to="/">Home</Link></p>
    <p><Link to="/users">User</Link></p>

    </Fragment>
  }
}

class App extends Component {
  render(){
    return <BrowserRouter>
      <Fragment>
      <h1>My Router App</h1>
      <Route exact path="/" component={HomePage}/>
      <Route path="/otherpage" component={OtherPage}/>
      <Route path="/user" component={USERLIST}/>
      <Route path="/spot-it" component={SpotItPage}/>

      </Fragment>
    </BrowserRouter>
  }
}

let root = document.getElementById('root');
ReactDOM.render(<App/>, root);