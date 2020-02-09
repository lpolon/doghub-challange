import React from 'react';
import './DetailsCard.css';
import { oneBreed } from '../../utils/dogApi';

export default function DetailsCard({ match }) {
  const { id } = match.params;
  console.log(id);

  const fetchDetails = async (id) => {
    const body = await oneBreed.fetchDetails(id);
    console.log('foi?', body);
    return body;
  };

  return <h1>oi</h1>
}
  /*

  handleClick:
  - PUT DB /breed com o estado true
  /breeds/:id
  - pegar o id por params match e pegar infos
  - NÃO DEVE PRECISAR SALVAR SELECTEDBREED NO STATE
  - A FUNÇÃO HANDLECLICK PASSA A SER DO DETAILS.
  checar status e atualizar ou não.
  - atualizar o botão falando que foi adicionado.
  -atualizar 

    - criar os stylings que ainda faltam
  botão bulma.
  usar uma table para os details
  */
