import React, { Component } from 'react';
import './DetailsCard.css';
import { oneBreed } from '../../utils/dogApi';

import LargeCard from '../LargeCard/LargeCard';

export default class DetailsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: '',
      imgSrc: '',
      temperaments: '',
    };
  }

  fetchDetails = async (idFromParams) => {
    const body = await oneBreed.fetchDetails(idFromParams);
    console.log('dados do details!', body);
    return body;
  };

  async componentDidMount() {
    const { id: idFromParams } = this.props.match.params;
    const response = await this.fetchDetails(idFromParams);
    const { id, name, imgSrc, temperament: temperaments } = response;
    this.setState({
      id,
      name,
      imgSrc,
      temperaments,
    });
  }

  render() {
    return (
      <LargeCard
        id={this.state.id}
        name={this.state.name}
        imgSrc={this.state.imgSrc}
        temperaments={this.state.temperaments}
      />
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
