import React, {useState} from 'react';
import type {Node} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  Modal,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Container} from './styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  topButtons: {
    flex: 1,
    width: Dimensions.get('window').width,
    alignItems: 'flex-start',
  },
  bottomButtons: {
    flex: 1,
    width: Dimensions.get('window').width,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 50,
  },

  flipButton: {
    flex: 1,
    marginTop: 20,
    right: 20,
    alignSelf: 'flex-end',
  },

  viewImage: {
    width: 150,
    height: 110,
    padding: 15,
    borderColor: '#fff',
    borderWidth: 1,
  },

  recordingButton: {
    marginBottom: 10,
  },
});

const PhotoCamera: () => Node = () => {
  const [image, setImage] = useState(null);
  const [camera, setCamera] = useState(null);
  const [type, setType] = useState(RNCamera.Constants.Type.back);

  const flipCamera = () => {
    setType(
      type === RNCamera.Constants.Type.back
        ? RNCamera.Constants.Type.front
        : RNCamera.Constants.Type.back,
    );
  };

  const takePhoto = async () => {
    const options = {
      quality: 0.6,
      base64: true,
      width: 300,
      height: 300,
    };

    const data = await camera.takePictureAsync(options);
    await setImage(data.uri);
    // Alert.alert('Tirou a Foto', JSON.stringify(data));
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cam => {
          setCamera(cam);
        }}
        type={type}
        style={styles.preview}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onGoogleVisionBarcodesDetected={({barcodes}) => {
          console.log(barcodes);
        }}
      />
      <View style={styles.topButtons}>
        <TouchableOpacity onPress={flipCamera} style={styles.flipButton}>
          <Icon name="refresh" size={35} color="orange" />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomButtons}>
        <TouchableOpacity onPress={takePhoto} style={styles.recordingButton}>
          <Icon name="camera" size={50} color="orange" />
        </TouchableOpacity>
        <Image
          style={styles.viewImage}
          resizeMode="contain"
          source={{
            uri: image,
          }}
        />
      </View>
    </View>
  );
};

export default PhotoCamera;
