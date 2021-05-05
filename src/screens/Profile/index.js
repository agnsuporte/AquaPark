import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Image, ToastAndroid} from 'react-native';
import styled from 'styled-components/native';
import Geolocation from 'react-native-geolocation-service';

import {getStorageProfile} from '../../auth';
import AquaParkLogo from '../../assets/img/logo/LogoBlue.png';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const InfoSection = styled.View`
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 25px;
`;

const HeaderSection = styled.View`
  margin-top: 100px;
  align-items: center;
  justify-content: center;
`;

const RowTitle = styled.View`
  margin-left: 0px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 5px;
`;

const RowText = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;

const Row = styled.Text`
  color: #777777;
  margin-left: 20px;
`;
/**
 *
 *
 * @return {*}
 */
const Profile = props => {
  const [user, setUser] = useState({});
  const [location, setLocation] = useState({});

  useEffect(async () => {
    const profile = await getStorageProfile();
    setUser(profile);

    Geolocation.getCurrentPosition(
      position => {
        setLocation(position);
      },
      error => {
        // See error code charts below.
        const message = `Code: ${error.code} Message: ${error.message}`;
        ToastAndroid.show(message, ToastAndroid.SHORT);
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);

  return (
    <Container>
      <InfoSection>
        <HeaderSection>
          <Image source={AquaParkLogo} />
          <RowTitle>
            <Title>{user?.name}</Title>
          </RowTitle>
        </HeaderSection>
      </InfoSection>

      <InfoSection>
        <RowText>
          <Icon name="phone" color="#777777" size={20} />
          <Row>{user?.phone}</Row>
        </RowText>
        <RowText>
          <Icon name="email" color="#777777" size={20} />
          <Row>{user?.email}</Row>
        </RowText>
      </InfoSection>

      <InfoSection>
        <RowText>
          <Icon name="room" color="#777777" size={20} />
          <Row>
            {location &&
              `Lat.: ${location?.coords?.latitude} \r\nLng: ${location?.coords?.longitude}`}
          </Row>
        </RowText>
      </InfoSection>

      <InfoSection>
        <RowText>
        <Icon name="person" color="#777777" size={20} />
          <Row>{`Rua. xxx yyyy zzz \r\nCidade/UF`}</Row>
        </RowText>
      </InfoSection>

    </Container>
  );
};

export default Profile;

