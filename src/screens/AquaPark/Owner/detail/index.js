import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  Inner,
  Button,
  SectionHeard,
  Avatar,
  InfoHeard,
  Name,
  Address,
  Texto
} from './styles';

const AquaParkOwnerDetail = props => {
  const { item } = props.route.params;
  return (
    <Container>

        <SectionHeard>
          <Avatar source={{uri: item.avatar}} />
          <InfoHeard>
            <Name>{item.name}</Name>
            <Address>{item.phone}</Address>
            <Address>{item.email}</Address>
          </InfoHeard>
        </SectionHeard>

        <Inner>
          <Address>{item.address}</Address>
          <Address>{item.city}/{item.region}</Address>
        </Inner>

        <Inner>
          <Button onPress={() => props.navigation.navigate('Pool', {teste:'Tela da Piscina'})}>
            <Texto>Piscina</Texto>
            <Icon name="chevron-right" size={25} color="#2D9CDB" />
          </Button>
        </Inner>

        <Inner>
          <Button>
            <Texto>Visita</Texto>
            <Icon name="chevron-right" size={25} color="#2D9CDB" />
          </Button>
        </Inner>

        <Inner>
          <Button>
            <Texto>Observações</Texto>
            <Icon name="chevron-right" size={25} color="#2D9CDB" />
          </Button>
        </Inner>                
      
    </Container>
  );
};

export default AquaParkOwnerDetail;
