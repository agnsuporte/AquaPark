import styled from 'styled-components';

import {Dimensions} from 'react-native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const AnnotationContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #fc6663;
  border-radius: 5px;
  padding: 5px;
`;

const AnnotationText = styled.Text`
  font-size: 14px;
  color: #fff;
`;

const NewButtonContainer = styled.TouchableHighlight`
  position: absolute;
  bottom: 54px;
  left: 20px;
  right: 20px;
  align-self: center;
  border-radius: 5px;
  padding-vertical: 20px;
  background-color: #fc6663;
`;

const ButtonsWrapper = styled.View`
  position: absolute;
  bottom: 54px;
  left: 20px;
  right: 20px;
`;

const ButtonOpenCamera = styled.TouchableOpacity`
  margin-top: 20px;
  margin-bottom: 40px;
`;

const CancelButtonContainer = styled.TouchableHighlight`
  align-self: stretch;
  border-radius: 5px;
  padding-vertical: 20px;
  background-color: #555;
  margin-top: 20px;
`;

const SelectButtonContainer = styled.TouchableHighlight`
  align-self: stretch;
  border-radius: 5px;
  padding-vertical: 20px;
  background-color: #fc6663;
`;

const ButtonText = styled.Text`
  color: #2d9cdb;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
`;

const Marker = styled.Image`
  width: 60px;
  height: 60px;
  position: absolute;
  align-self: center;
  top: ${Dimensions.get('window').height / 2 - 60};
`;

const ModalContainer = styled.View`
  flex: 1;
  background-color: #fff;
`;

const ModalImagesListContainer = styled.View`
  height: 90px;
`;

const ModalImagesList = styled.ScrollView`
  padding-horizontal: 10px;
  padding-top: 6px;
`;

const ModalImageItem = styled.Image`
  height: 75px;
  width: 75px;
`;

const ImageItemSelect = styled.Image`
  height: 300px;
  width: 280px;
  margin-right: 10px;
`;

const ModalButtons = styled.View`
  padding-horizontal: 10px;
  padding-vertical: 5px;
  flex-direction: row;
  justify-content: space-between;
`;

const CameraButtonContainer = styled.TouchableHighlight`
  padding-vertical: 20px;
  padding-horizontal: 40px;
`;

const CancelButtonText = styled.Text`
  color: #333;
  font-size: 18px;
  font-weight: bold;
`;

const ContinueButtonText = styled.Text`
  color: #fff;
  font-size: 30px;
  font-size: 18px;
  font-weight: bold;
`;

const TakePictureButtonContainer = styled.TouchableOpacity`
  position: absolute;
  align-self: center;
  bottom: 20px;
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

const TakePictureButtonLabel = styled.View`
  width: 52px;
  height: 52px;
  border-radius: 26px;
  background-color: #2d9cdb;
`;

export {
  Container,
  AnnotationContainer,
  AnnotationText,
  NewButtonContainer,
  ButtonsWrapper,
  ButtonOpenCamera,
  CancelButtonContainer,
  SelectButtonContainer,
  ButtonText,
  Marker,
  ModalContainer,
  ModalImagesListContainer,
  ModalImagesList,
  ModalImageItem,
  ModalButtons,
  CameraButtonContainer,
  CancelButtonText,
  ContinueButtonText,
  TakePictureButtonContainer,
  TakePictureButtonLabel,
  Page,
  ImageItemSelect,
};
