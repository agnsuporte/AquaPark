import React, {useState} from 'react';
import type {Node} from 'react';
import {Modal} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  ModalContainer,
  ModalButtons,
  CameraButtonContainer,
  CancelButtonText,
  ContinueButtonText,
  TakePictureButtonContainer,
  TakePictureButtonLabel,
} from './styles/AquaParkCamera';

const PhotoCamera: () => Node = props => {
  const {setImage, cameraModalOpened, setCameraModalOpened} = props;
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(RNCamera.Constants.Type.back);

  const handleCameraModalClose = () => setCameraModalOpened(false);

  const flipCamera = () => {
    setType(
      type === RNCamera.Constants.Type.back
        ? RNCamera.Constants.Type.front
        : RNCamera.Constants.Type.back,
    );
  };

  const handleTakePicture = async () => {
    const options = {
      quality: 0.6,
      base64: true,
      width: 300,
      height: 300,
    };

    const data = await camera.takePictureAsync(options);

    setImage(data.uri);
    handleCameraModalClose();
  };

  return (
    <Modal
      visible={cameraModalOpened}
      transparent={false}
      animationType="slide"
      onRequestClose={handleCameraModalClose}>
      <ModalContainer>
        <ModalContainer>
          <RNCamera
            ref={cam => {
              setCamera(cam);
            }}
            type={type}
            style={{flex: 1}}
            autoFocus={RNCamera.Constants.AutoFocus.on}
            flashMode={RNCamera.Constants.FlashMode.off}
            androidCameraPermissionOptions={{
              title: 'Permissão para usar a camera',
              message: 'É necessário que autorize, você autoriza?',
              buttonPositive: 'Sim',
              buttonNegative: 'Não',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permissão para realizaqr filmagens',
              message: 'É necessário que autorize, você autoriza?',
              buttonPositive: 'Sim',
              buttonNegative: 'Não',
            }}
          />
          <TakePictureButtonContainer onPress={handleTakePicture}>
            <TakePictureButtonLabel />
          </TakePictureButtonContainer>
        </ModalContainer>
        <ModalButtons>
          <CameraButtonContainer onPress={flipCamera}>
            <CancelButtonText>
              <Icon name="refresh" size={35} color="orange" />
            </CancelButtonText>
          </CameraButtonContainer>

          <CameraButtonContainer onPress={handleCameraModalClose}>
            <ContinueButtonText>
              <Icon name="times" size={35} color="orange" />
            </ContinueButtonText>
          </CameraButtonContainer>
        </ModalButtons>
      </ModalContainer>
    </Modal>
  );
};

export default PhotoCamera;
