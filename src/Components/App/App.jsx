import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import 'bulma/css/bulma.css';
import './App.css';

import NavBar from '../NavBar/Navbar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}