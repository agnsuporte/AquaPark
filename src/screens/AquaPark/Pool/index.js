import React from 'react';


import {Container, Texto} from './styles';

const AquaParkFavorites = props => {
  return (
    <Container>
      <Texto>Pool Screen</Texto>
      <Texto>{JSON.stringify(props)}</Texto>
    </Container>
  );
};

export default AquaParkFavorites;
