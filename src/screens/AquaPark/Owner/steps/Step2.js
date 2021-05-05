import React from 'react';

import {ToastAndroid, TouchableOpacity} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

const Title = styled.Text`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 50px;
`;

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
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Scroll = styled.ScrollView``;

const ImageItemSelect = styled.Image`
  height: 335px;
  width: 100%;
  background-color: ${props => (props.avatar ? '#f2f2f2' : '#BDBDBD')};
`;

const StepTwo = props => {
  const {prevStep, nextStep, avatar, setAvatar} = props;

  const options = {
    quality: 0.5,
    cameraType: 'back',
    mediaType: 'photo',
  };

  const pickImageCallBack = response => {
    let resp = false;
    if (response.didCancel) {
      ToastAndroid.show('Nenhuma foto selecionada', ToastAndroid.SHORT);
    } else if (response.errorCode) {
      const erro = response.errorCode;
      switch (erro) {
        case 'camera_unavailable':
          ToastAndroid.show(
            'Câmera não disponível no dispositivo',
            ToastAndroid.SHORT,
          );
          break;
        case 'permission':
          ToastAndroid.show('Permissão negada', ToastAndroid.SHORT);
          break;
        default:
          ToastAndroid.show(
            'Ocorreu um erro ao selecionar a imagem',
            ToastAndroid.SHORT,
          );
          break;
      }
    } else {
      resp = true;
    }
    return resp;
  };

  const pickImageGallery = () => {
    launchImageLibrary(options, async response => {
      setAvatar(null);
      const resp = await pickImageCallBack(response);
      if (resp) {
        setAvatar(response.uri);
      }
    });
  };

  const pickImageCamera = () => {
    launchCamera(options, async response => {
      setAvatar(null);
      const resp = await pickImageCallBack(response);
      if (resp) {
        setAvatar(response.uri);
      }
    });
  };

  return (
    <Scroll>
      <Inner>
        <Title style={{marginBottom: 20}}>FOTO</Title>

        <Body>
          <ImageItemSelect
            source={{uri: avatar}}
            resizeMode="contain"
            avatar={!!avatar}
          />
        </Body>

        <Footer>
          <ContainerActions>
            <Actions>
              <TouchableOpacity onPress={prevStep}>
                <Icon name="arrow-circle-left" size={45} color="#828282" />
              </TouchableOpacity>

              <TouchableOpacity onPress={pickImageGallery}>
                <Icon name="image" size={45} color="orange" />
              </TouchableOpacity>

              <TouchableOpacity onPress={pickImageCamera}>
                <Icon name="camera" size={45} color="orange" />
              </TouchableOpacity>

              <TouchableOpacity onPress={nextStep}>
                <Icon name="arrow-circle-right" size={45} color="#2D9CDB" />
              </TouchableOpacity>
            </Actions>
          </ContainerActions>
        </Footer>
      </Inner>
    </Scroll>
  );
};

export default StepTwo;
