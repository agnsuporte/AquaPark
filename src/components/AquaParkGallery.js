import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import CameraRoll from '@react-native-community/cameraroll';
import Icon from 'react-native-vector-icons/FontAwesome';

import {TouchableHighlight, Modal, Image, Dimensions} from 'react-native';

import styled from 'styled-components';

const ModalContainer = styled.View`
  flex: 1;
  padding-top: 20px;
`;

const ModalScrollView = styled.ScrollView``;

const ModalButtons = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const GalleryButtonContainer = styled.TouchableHighlight`
  padding-vertical: 20px;
  padding-horizontal: 40px;
`;

const GalleryButtonText = styled.Text`
  color: #fff;
  font-size: 30px;
  font-size: 18px;
  font-weight: bold;
`;

const {width} = Dimensions.get('window');

const AquaParkGallery: () => Node = props => {
  const {setImage, galleryModalOpened, setGalleryModalOpened} = props;
  const [photos, setPhotos] = useState([]);
  const [index, setIndex] = useState(null);
  const [total, setTotal] = useState(20);

  const handleIndex = idx => {
    const i = index;
    setIndex(i === idx ? null : idx);
  };

  const handleGalleryModalClose = () => {
    setImage(null);
    setGalleryModalOpened(false);
    setTotal(20);
  };

  const showPhotos = () => {
    CameraRoll.getPhotos({
      first: total,
      assetType: 'Photos',
    })
      .then(r => {
        setPhotos(r.edges);
      })
      .catch(err => {
        // Error Loading Images
        console.log(err);
      });
  };

  const handleGalleryPlus = () => {
    const n = total;
    setTotal(n + 10);
  };

  const handleTakeImage = () => {
    const image = photos[index].node.image.uri;
    setImage(image);
    setTotal(20);
    setGalleryModalOpened(false);
  };

  useEffect(() => {
    showPhotos();
  }, [total]);

  return (
    <Modal
      visible={galleryModalOpened}
      transparent={false}
      animationType="slide"
      onRequestClose={handleGalleryModalClose}>
      <ModalContainer>
        <ModalScrollView
          contentContainerStyle={{
            flexWrap: 'wrap',
            flexDirection: 'row',
          }}>
          {photos.map((p, i) => {
            return (
              <TouchableHighlight
                style={{opacity: i === index ? 0.5 : 1}}
                key={p.node.image.uri}
                underlayColor="transparent"
                onPress={() => handleIndex(i)}>
                <Image
                  style={{
                    width: width / 3,
                    height: width / 3,
                  }}
                  source={{uri: p.node.image.uri}}
                />
              </TouchableHighlight>
            );
          })}
        </ModalScrollView>
        <ModalButtons>
          <GalleryButtonContainer
            underlayColor="#E0E0E0"
            onPress={handleGalleryModalClose}>
            <GalleryButtonText>
              <Icon name="times" size={35} color="#EB5757" />
            </GalleryButtonText>
          </GalleryButtonContainer>

          {index !== null && (
            <GalleryButtonContainer
              underlayColor="#E0E0E0"
              onPress={handleTakeImage}>
              <GalleryButtonText>
                <Icon name="check" size={35} color="#2D9CDB" />
              </GalleryButtonText>
            </GalleryButtonContainer>
          )}

          <GalleryButtonContainer
            underlayColor="#E0E0E0"
            onPress={handleGalleryPlus}>
            <GalleryButtonText>
              <Icon name="plus" size={35} color="#219653" />
            </GalleryButtonText>
          </GalleryButtonContainer>
        </ModalButtons>
      </ModalContainer>
    </Modal>
  );
};

export default AquaParkGallery;
