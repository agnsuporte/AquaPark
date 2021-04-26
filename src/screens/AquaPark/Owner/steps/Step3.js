import React from 'react';
import type {Node} from 'react';
import {Text, TouchableOpacity, ScrollView} from 'react-native';

import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

const Title = styled.Text`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const TitleItem = styled.Text`
  font-weight: 700;
`;

const Inner = styled.View`
  flex: 1;
  padding: 20px;
`;

const ContainerItem = styled.View`
  padding: 3px;
`;

const Actions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const ImageItemSelect = styled.Image`
  height: 80px;
  width: 55px;
  margin-bottom: 20px;
  background-color: ${props => (props.avatar ? '#f2f2f2' : '#BDBDBD')};
`;

const StepThree: () => Node = props => {
  const {prevStep, saveDataOwner, avatar, DATA} = props;

  const confirm = DATA || [];

  return (
    <ScrollView>
      <Inner>
        <Title>CONFIRMAR </Title>

        <ImageItemSelect
          source={{uri: avatar}}
          resizeMode="contain"
          avatar={!!avatar}
        />

        {confirm.map(item => (
          <ContainerItem key={item.id}>
            <TitleItem>{item.title}</TitleItem>
            <Text>{item.data}</Text>
          </ContainerItem>
        ))}

        <Inner>
          <Actions>
            <TouchableOpacity onPress={prevStep}>
              <Icon name="arrow-circle-left" size={45} color="#828282" />
            </TouchableOpacity>

            <TouchableOpacity onPress={saveDataOwner}>
              <Icon name="save" size={45} color="#2D9CDB" />
            </TouchableOpacity>
          </Actions>
        </Inner>
      </Inner>
    </ScrollView>
  );
};

export default StepThree;
