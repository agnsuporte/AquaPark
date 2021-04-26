import React from 'react';
import type {Node} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';

import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

import AquaParkInput from '../../../../components/AquaParkInput';

const Title = styled.Text`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 50px;
`;

const Body = styled.View`
  justify-content: space-between;
`;

const Inner = styled.View`
  padding: 20px;
`;

const Actions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
  margin-bottom: 15px;
`;

const StepOne: () => Node = props => {
  const {owner, setOwner, prevStep, nextStep} = props;

  return (
    <ScrollView>
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
          <Inner>
            <Actions>
              <TouchableOpacity onPress={prevStep}>
                <Icon name="arrow-circle-left" size={45} color="#828282" />
              </TouchableOpacity>

              <TouchableOpacity onPress={nextStep}>
                <Icon name="arrow-circle-right" size={45} color="#2D9CDB" />
              </TouchableOpacity>
            </Actions>
          </Inner>
        </Body>
      </Inner>
    </ScrollView>
  );
};

export default StepOne;
