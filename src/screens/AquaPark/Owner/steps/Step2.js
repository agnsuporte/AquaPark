import React from 'react';
import type {Node} from 'react';
import {TouchableOpacity, ScrollView} from 'react-native';

import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

import AquaParkCamera from '../../../../components/AquaParkCamera';

const Title = styled.Text`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 50px;
`;

const Inner = styled.View`
  flex: 1;
  padding: 20px;
`;

const Actions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const ImageItemSelect = styled.Image`
  height: 335px;
  width: 100%;
  margin-left: 5px;
  background-color: ${props => (props.avatar ? '#f2f2f2' : '#BDBDBD')};
`;

const StepTwo: () => Node = props => {
  const {
    prevStep,
    nextStep,
    avatar,
    setAvatar,
    cameraModalOpened,
    setCameraModalOpened,
    handleOpenCamera,
  } = props;

  return (
    <Inner>
      <ScrollView style={{height: 350}}>
        <Title style={{marginBottom: 20}}>FOTO</Title>

        <ImageItemSelect
          source={{uri: avatar}}
          resizeMode="contain"
          avatar={!!avatar}
        />

        <AquaParkCamera
          image={avatar}
          setImage={setAvatar}
          cameraModalOpened={cameraModalOpened}
          setCameraModalOpened={setCameraModalOpened}
        />

        <Inner>
          <Actions>
            <TouchableOpacity onPress={prevStep}>
              <Icon name="arrow-circle-left" size={45} color="#828282" />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleOpenCamera}>
              <Icon name="camera" size={45} color="orange" />
            </TouchableOpacity>

            <TouchableOpacity onPress={nextStep}>
              <Icon name="arrow-circle-right" size={45} color="#2D9CDB" />
            </TouchableOpacity>
          </Actions>
        </Inner>
      </ScrollView>
    </Inner>
  );
};

export default StepTwo;
