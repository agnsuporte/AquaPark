import React from 'react';
import {TouchableOpacity} from 'react-native';

import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

import AquaParkInput from '../../../../components/AquaParkInput';

const Page = styled.ScrollView``;

const Inner = styled.View`
  flex: 1;
  padding: 20px;
`;

const Body = styled.View``;

const Footer = styled.View``;

const ContainerActions = styled.View`
  padding-top: 20px;
`;

const Actions = styled.View`
  align-items: center;
  margin-bottom: 15px;
`;

const Title = styled.Text`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 50px;
`;

const StepOne = props => {
  const {owner, setOwner, prevStep, nextStep} = props;

  return (
    <Page>
      <Inner>
        <Title>PROPRIETÁRIO </Title>
        <Body>
          <AquaParkInput
            value={owner.name}
            placeholder="Nome do Proprietário"
            onChangeText={txt => setOwner({...owner, name: txt})}
          />

          <AquaParkInput
            value={owner.email}
            onChangeText={txt => setOwner({...owner, email: txt})}
            placeholder="E-mail do Proprietário"
            keyboardType="email-address"
          />

          <AquaParkInput
            value={owner.phone}
            onChangeText={txt => setOwner({...owner, phone: txt})}
            placeholder="Telefone do Proprietário"
          />

          <AquaParkInput
            value={owner.address}
            onChangeText={txt => setOwner({...owner, address: txt})}
            placeholder="Endereço do Proprietário"
          />

          <AquaParkInput
            value={owner.city}
            onChangeText={txt => setOwner({...owner, city: txt})}
            placeholder="Cidade do Proprietário"
          />

          <AquaParkInput
            value={owner.region}
            onChangeText={txt => setOwner({...owner, region: txt})}
            placeholder="Estado do Proprietário"
          />
        </Body>
        <Footer>
          <ContainerActions>
            <Actions>
              <TouchableOpacity onPress={nextStep}>
                <Icon name="arrow-circle-right" size={45} color="#2D9CDB" />
              </TouchableOpacity>
            </Actions>
          </ContainerActions>
        </Footer>
      </Inner>
    </Page>
  );
};

export default StepOne;
