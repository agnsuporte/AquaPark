import React from 'react';
import {Text, TouchableOpacity, ScrollView} from 'react-native';

import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

const TitleArea = styled.View`
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const Salvar = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  align-self: center;
`;

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
  flex-direction: column;
  margin-bottom: 15px;
`;

const ImageItemSelect = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 50px;
  margin-bottom: 20px;
  background-color: ${props => (props.avatar ? '#f2f2f2' : '#BDBDBD')};
`;

const StepThree = props => {
  const {prevStep, saveDataOwner, avatar, DATA} = props;

  const confirm = DATA || [];

  return (
    <ScrollView>
      <Inner>

        <TitleArea>

          <Title>CONFIRMAR </Title>

          <ImageItemSelect
            source={{uri: avatar}}
            avatar={!!avatar}
          />

        </TitleArea>

        {confirm.map(item => (
          <ContainerItem key={item.id}>
            <TitleItem>{item.title}</TitleItem>
            <Text>{item.data}</Text>
          </ContainerItem>
        ))}

          <Actions>
            <TouchableOpacity onPress={prevStep}>
              <Icon name="arrow-circle-left" size={45} color="#828282" />
            </TouchableOpacity>

            <Salvar onPress={saveDataOwner}>
              <Icon name="save" size={35} color="#2D9CDB" />
              <Text 
                style={{
                  paddingLeft: 15,
                  fontSize: 20,
                }}
              >Salvar</Text>
            </Salvar>
          </Actions>
      </Inner>
    </ScrollView>
  );
};

export default StepThree;
