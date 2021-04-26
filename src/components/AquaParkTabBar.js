import React from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';

import HomeIcon from '../assets/icon/home_white_24dp2x.png';
import VisitsIcon from '../assets/icon/tour_white_24dp2x.png';
import AddIcon from '../assets/icon/add_black_24dp2x.png';
import FaceIcon from '../assets/icon/face_white_24dp2x.png';
import LogoutIcon from '../assets/icon/logout_white_24dp2x.png';

import {signOut} from '../auth';

const TabArea = styled.View`
  height: 60px;
  background-color: #2d9cdb;
  flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TabItemCenter = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 35px;
  border: 3px solid #2d9cdb;
  margin-top: -20px;
`;

const ImageIcon = styled.Image`
  width: 35px;
  height: 35px;
`;

const CustomTabBar = ({state, navigation}) => {
  const goTo = screenName => {
    navigation.navigate(screenName);
  };

  const handleBackButton = () => {
    Alert.alert(
      'Aqua Park',
      'Deseja sair?',
      [
        {
          text: 'Não',
          onPress: () => false,
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: async () => {
            await signOut();
            navigation.reset({
              routes: [{name: 'SignIn'}],
            });
          },
        },
      ],
      {
        cancelable: false,
      },
    );
    return true;
  };

  return (
    <TabArea>
      <TabItem onPress={() => goTo('Home')}>
        <ImageIcon
          style={{opacity: state.index === 0 ? 1 : 0.4}}
          source={HomeIcon}
        />
      </TabItem>
      <TabItem onPress={() => goTo('Visits')}>
        <ImageIcon
          style={{opacity: state.index === 1 ? 1 : 0.4}}
          source={VisitsIcon}
        />
      </TabItem>
      <TabItemCenter onPress={() => goTo('Owner')}>
        <ImageIcon
          style={{opacity: state.index === 2 ? 1 : 0.4}}
          source={AddIcon}
        />
      </TabItemCenter>
      <TabItem onPress={() => goTo('Profile')}>
        <ImageIcon
          style={{opacity: state.index === 3 ? 1 : 0.4}}
          source={FaceIcon}
        />
      </TabItem>
      <TabItem onPress={handleBackButton}>
        <ImageIcon
          style={{opacity: state.index === 4 ? 1 : 0.4}}
          source={LogoutIcon}
        />
      </TabItem>
    </TabArea>
  );
};

export default CustomTabBar;
