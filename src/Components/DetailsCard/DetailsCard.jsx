import React, { Component } from 'react';
import './DetailsCard.css';
import { oneBreed, breeds } from '../../utils/dogApi';

import LargeCard from '../LargeCard/LargeCard';
import DetailsTable from '../DetailsTable/DetailsTable';

export default class DetailsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: '',
      imgSrc: '',
      temperaments: '',
      details: {},
      isAdopted: false,
    };
  }

  fetchDetails = async (idFromParams) => {
    const body = await oneBreed.fetchDetails(idFromParams);
    return body;
  };

  async componentDidMount() {
    await this.props.updateBreedsList();
    const { id: idFromParams } = this.props.match.params;
    const isAdopted = this.props.getAdoptionStatus(idFromParams);
    const response = await this.fetchDetails(idFromParams);
    const {
      id,
      name,
      imgSrc,
      temperament: temperaments,
      ...details
    } = response;

    this.setState({
      id,
      name,
      imgSrc,
      temperaments,
      details,
      isAdopted,
    });
  }

  async handleClick(id) {
    await breeds.updateOne(id, { isAdopted: true });
    await this.props.updateBreedsList();
    const isAdopted = this.props.getAdoptionStatus(id);
    this.setState({
      isAdopted,
    });
  }

  render() {
    return (
      <div className="DetailsCard-container">
        <h1>Detalhes:</h1>
        <div className="info-container drop-shadow--always-on-hover">
          <LargeCard
            id={this.state.id}
            name={this.state.name}
            imgSrc={this.state.imgSrc}
            temperaments={this.state.temperaments}
          />
          {/* quando apertar, atualizar, checar e trocar is-primary por is-outlined
          mudar o texto para adotado =D */}
          <div className="table-and-button-container">
            <DetailsTable details={this.state.details} />
            <button
              className={`button is-large is-fullwidth
              ${
                this.state.isAdopted ? 'is-outlined' : `is-rounded is-success`
              }`}
              onClick={() => this.handleClick(this.state.id)}
            >
              {this.state.isAdopted ? `Adotado =D` : `Adotar`}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
