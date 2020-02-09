import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bulma/css/bulma.css';
import './App.css';
import { breeds } from '../../utils/dogApi';

import NavBar from '../NavBar/Navbar';
import CardList from '../CardList/CardList';
import LargeCard from '../LargeCard/LargeCard';
import DetailsCard from '../DetailsCard/DetailsCard';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: [],
    };
    this.updateBreedsList = this.updateBreedsList.bind(this);
    this.getAdoptionStatus = this.getAdoptionStatus.bind(this);
  }

  getAdoptionStatus(id) {
    const foundDog = this.state.breeds.find(
      (dog) => Number(dog.id) === Number(id)
    );
    return foundDog.isAdopted;
  }

  async updateBreedsList() {
    const response = await breeds.fetchAll();
    this.setState({
      breeds: response,
    });
  }

  componentDidMount() {
    this.updateBreedsList();
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <CardList
                component={LargeCard}
                breedsArr={this.state.breeds}
                header={'Para adoção:'}
                updateSelectedBreed={this.updateSelectedBreed}
              />
            )}
          />
          <Route
            path="/:id"
            render={(props) => {
              return (
                <DetailsCard
                  getAdoptionStatus={this.getAdoptionStatus}
                  updateBreedsList={this.updateBreedsList}
                  breedsArr={this.state.breeds}
                  {...props}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}
