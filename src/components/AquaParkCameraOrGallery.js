import React from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {ToastAndroid, Modal} from 'react-native';

import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  margin: 10px;
  justify-content: center;
`;

const ButtonWrapper = styled.View`
  flex: 1;
  margin: 5px;
  justify-content: center;
`;

const PickerButton = styled.Button`
  flex: 1;
`;

export default function AquaParkCameraOrGallery(props) {
  const {setImage, pickerModalOpened, setPickerModalOpened} = props;

  const handlePickerModalClose = () => {
    setImage(null);
    setPickerModalOpened(false);
  };

  const pickImage = () => {
    const options = {
      title: 'Select Avatar',
      takePhotoButtonTitle: 'Tirar foto',
      chooseFromLibraryButtonTitle: 'Escolher na galeria',
      chooseWhichLibraryTitle: 'Escolha a galeria',
      cancelButtonTitle: 'Cancelar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        ToastAndroid.show('Cancelado pelo usuário', ToastAndroid.SHORT);
      } else if (response.error) {
        ToastAndroid.show(
          'Ocorreu um erro ao escolher a imagem',
          ToastAndroid.SHORT,
        );
      } else if (response.customButton) {
        ToastAndroid.show(
          `O usuário usou o botão: ${response.customButton}`,
          ToastAndroid.SHORT,
        );
      } else {
        setImage(response.uri);
        console.log(response);
      }
    });
  };

  return (
    <Modal
      visible={pickerModalOpened}
      transparent={false}
      animationType="slide"
      onRequestClose={handlePickerModalClose}>
      <Container>
        <ButtonWrapper>
          <PickerButton title="Galeria" onPress={pickImage} />
        </ButtonWrapper>
        <ButtonWrapper>
          <PickerButton title="Camera" onPress={pickImage} />
        </ButtonWrapper>
        <ButtonWrapper>
          <PickerButton
            title="Concluir"
            onPress={() => setPickerModalOpened(false)}
          />
        </ButtonWrapper>
      </Container>
    </Modal>
  );
}
