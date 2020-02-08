import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bulma/css/bulma.css';
import './App.css';

import NavBar from '../NavBar/Navbar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('props do app', this.props);
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}