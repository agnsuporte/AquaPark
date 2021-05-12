import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  Scroll,
  Inner,
  Button,
  SectionHeard,
  Avatar,
  InfoHeard,
  Name,
  Description,
  Texto
} from './styles';

const AquaParkOwnerDetail = props => {
  const { owner } = props.route.params;
  return (
    <Container>

      <Scroll>
        <SectionHeard>
          <Avatar source={{uri: owner.avatar}} />
          <InfoHeard>
            <Name>{owner.name}</Name>
            <Description>{owner.phone}</Description>
            <Description>{owner.email}</Description>
          </InfoHeard>
        </SectionHeard>

        <Inner>
          <Description>{owner.address}</Description>
          <Description>{owner.city}/{owner.region}</Description>
        </Inner>


        <Inner>
          <Button onPress={() => props.navigation.navigate('Pool', {owner_id: owner.id})}>
            <Texto>Classificação e tipos de piscina</Texto>
            <Icon name="chevron-right" size={20} color="#2D9CDB" />
          </Button>
        </Inner>

        <Inner>
          <Button>
            <Texto>Visita (parâmetros físico-químicos)</Texto>
            <Icon name="chevron-right" size={20} color="#2D9CDB" />
          </Button>
        </Inner>

        <Inner>
          <Button>
            <Texto>Observações</Texto>
            <Icon name="chevron-right" size={20} color="#2D9CDB" />
          </Button>
        </Inner>         
      </Scroll>
      
    </Container>
  );
};

export default AquaParkOwnerDetail;
