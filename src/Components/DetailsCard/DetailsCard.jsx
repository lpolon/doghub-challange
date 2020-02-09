import React, { Component } from 'react';
import './DetailsCard.css';
import { oneBreed } from '../../utils/dogApi';

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
    };
  }

  fetchDetails = async (idFromParams) => {
    const body = await oneBreed.fetchDetails(idFromParams);
    return body;
  };

  async componentDidMount() {
    const { id: idFromParams } = this.props.match.params;
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
              className="
            button
            is-large
            is-fullwidth
            is-rounded
            is-success
            "
            >
              Adotar
            </button>
          </div>
        </div>
      </div>
    );
  }
}
/*

  handleClick:
  - shadows como props de style??
  - PUT DB /breed com o estado true
  /breeds/:id

  - atualizar o botão falando que foi adicionado.

    - criar os stylings que ainda faltam
  botão bulma.
  usar uma table para os details
  */
