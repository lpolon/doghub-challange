import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bulma/css/bulma.css';
import './App.css';
import { dogApi } from '../../utils/dogApi';

import NavBar from '../NavBar/Navbar';
import CardList from '../CardList/CardList';
import LargeCard from '../LargeCard/LargeCard';

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
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route
            exact
            to="/"
            render={(props) => (
              <CardList
                component={LargeCard}
                breeds={this.state.breeds}
                {...props}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}
