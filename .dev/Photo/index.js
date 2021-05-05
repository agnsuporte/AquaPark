import React, {useState} from 'react';
import {
  Modal,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome';
import CameraRoll from '@react-native-community/cameraroll';

import {
  Container,
  ButtonText,
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
} from './styles';

const PhotoCamera = () => {
  const [images, setImages] = useState([]);
  const [camera, setCamera] = useState(null);
  const [imageSelected, setImageSelected] = useState(null);
  const [type, setType] = useState(RNCamera.Constants.Type.back);
  const [cameraModalOpened, setCameraModalOpened] = useState(false);
  const [dataModalOpened, setDataModalOpened] = useState(false);

  const handleCameraModalClose = () => setCameraModalOpened(!cameraModalOpened);

  const handleDataModalClose = () => {
    setDataModalOpened(!dataModalOpened);
    setCameraModalOpened(false);
  };

  const handleOpenCamera = () => {
    setImages([]);
    setCameraModalOpened(true);
  };

  const flipCamera = () => {
    setType(
      type === RNCamera.Constants.Type.back
        ? RNCamera.Constants.Type.front
        : RNCamera.Constants.Type.back,
    );
  };

  const hasAndroidPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  };

  const savePicture = async () => {
    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      return;
    }

    if (images.length > 0) CameraRoll.save(imageSelected);
  };

  const handleTakePicture = async () => {
    const options = {
      quality: 0.6,
      base64: true,
      width: 300,
      height: 300,
    };

    const data = await camera.takePictureAsync(options);

    setImages([...images, data]);

    // Alert.alert('Tirou a Foto', JSON.stringify(data));
  };

  const renderImagesList = () => {
    if (images.length !== 0) {
      return (
        <ModalImagesListContainer>
          <ModalImagesList horizontal>
            {images.map(image => (
              <TouchableOpacity
                key={image.uri}
                onPress={() => setImageSelected(image.uri)}>
                <ModalImageItem
                  source={{uri: image.uri}}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ))}
          </ModalImagesList>
        </ModalImagesListContainer>
      );
    }
    return null;
  };

  const renderCameraModal = () => (
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
        {/* {renderImagesList()} */}
        <ModalButtons>
          <CameraButtonContainer onPress={flipCamera}>
            <CancelButtonText>
              <Icon name="refresh" size={35} color="orange" />
            </CancelButtonText>
          </CameraButtonContainer>
          <CameraButtonContainer onPress={() => {}}>
            <ContinueButtonText>
              <ButtonText>{images.length}</ButtonText>
            </ContinueButtonText>
          </CameraButtonContainer>
          <CameraButtonContainer onPress={handleDataModalClose}>
            <ContinueButtonText>
              <Icon name="check-circle" size={35} color="orange" />
            </ContinueButtonText>
          </CameraButtonContainer>
        </ModalButtons>
      </ModalContainer>
    </Modal>
  );

  return (
    <Page>
      <Container>
        <ImageItemSelect source={{uri: imageSelected}} resizeMode="contain" />
        {renderCameraModal()}
      </Container>
      {renderImagesList()}

      <ModalButtons>
        <CameraButtonContainer onPress={() => {}}>
          <CancelButtonText>
            <Icon name="trash" size={45} color="orange" />
          </CancelButtonText>
        </CameraButtonContainer>
        <CameraButtonContainer onPress={handleOpenCamera}>
          <ContinueButtonText>
            <Icon name="camera" size={45} color="orange" />
          </ContinueButtonText>
        </CameraButtonContainer>
        <CameraButtonContainer onPress={savePicture}>
          <ContinueButtonText>
            <Icon name="save" size={45} color="orange" />
          </ContinueButtonText>
        </CameraButtonContainer>
      </ModalButtons>
    </Page>
  );
};

export default PhotoCamera;
