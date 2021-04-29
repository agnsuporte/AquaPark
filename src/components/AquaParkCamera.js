import React, {useState} from 'react';
import type {Node} from 'react';
import {Modal, Text} from 'react-native';
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
import PendingView from './AquaParkPendingView';

const PhotoCamera: () => Node = props => {
  const {setImage, cameraModalOpened, setCameraModalOpened} = props;
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(RNCamera.Constants.Type.back);
  const [pausePreview, setPausePreview] = useState(false);

  const handleCameraModalClose = () => {
    setImage(null);
    setPausePreview(false);
    setCameraModalOpened(false);
  };

  const flipCamera = async () => {
    setImage(null);
    await camera.resumePreview();
    await setType(
      type === RNCamera.Constants.Type.back
        ? RNCamera.Constants.Type.front
        : RNCamera.Constants.Type.back,
    );
    await setPausePreview(false);
  };

  const takePicture = async () => {
    const options = {
      quality: 0.6,
      base64: true,
      width: 300,
      height: 300,
    };

    const data = await camera.takePictureAsync(options);
    const source = data.uri;

    if (source) {
      setImage(source);
      await camera.pausePreview();
      setPausePreview(true);
    }
  };

  const handleTakePicture = async () => {
    if (pausePreview === false) {
      takePicture();
    }
  };

  const resumePicture = async () => {
    await camera.resumePreview();
    setPausePreview(false);
    setCameraModalOpened(false);
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
            }}>
            {({status}) => {
              if (status !== 'READY') return <PendingView />;
              return null;
            }}
          </RNCamera>
          {pausePreview === false ? (
            <TakePictureButtonContainer onPress={handleTakePicture}>
              <TakePictureButtonLabel />
            </TakePictureButtonContainer>
          ) : null}
        </ModalContainer>
        <ModalButtons>
          <CameraButtonContainer onPress={flipCamera}>
            <CancelButtonText>
              <Icon name="refresh" size={35} color="orange" />
            </CancelButtonText>
          </CameraButtonContainer>

          {pausePreview ? (
            <CameraButtonContainer onPress={() => resumePicture()}>
              <ContinueButtonText>
                <Icon name="check" size={35} color="#2D9CDB" />
              </ContinueButtonText>
            </CameraButtonContainer>
          ) : null}

          <CameraButtonContainer onPress={handleCameraModalClose}>
            <ContinueButtonText>
              <Icon name="times" size={35} color="#EB5757" />
            </ContinueButtonText>
          </CameraButtonContainer>
        </ModalButtons>
      </ModalContainer>
    </Modal>
  );
};

export default PhotoCamera;
