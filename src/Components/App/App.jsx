import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bulma/css/bulma.css';
import './App.css';
import { dogApi } from '../../utils/dogApi';

import NavBar from '../NavBar/Navbar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: [],
      selectedBreed: {},
    };
  }

  async componentDidMount() {
    const response = await dogApi.fetchAll();
    this.setState({
      breeds: response,
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}
