import React, {useEffect} from 'react';
import type {Node} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  TinyLogo,
  TinyLogoArea,
  TextAWait,
  LoadingIcon,
} from './styles';
import api from '../../api';
import {signOut, getToken} from '../../auth';
import AquaParkLogo from '../../assets/img/logo/LogoBlue.png';

const Preload: () => Node = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await getToken();
      if (token) {
        const result = await api
          .get('/token/isvalid')
          .then(resp => {
            return resp.data;
          })
          .catch(() => {
            return false;
          });

        if (result?.isToken) {
          navigation.reset({
            routes: [{name: 'MainTab'}],
          });
        } else {
          await signOut();
          navigation.reset({
            routes: [{name: 'SignIn'}],
          });
        }
      } else {
        // navigation.navigate('SignIn');
        navigation.reset({
          routes: [{name: 'SignIn'}],
        });
      }
    };
    checkToken();
  }, []);

  return (
    <Container>
      <TinyLogoArea>
        <TinyLogo source={AquaParkLogo} />
      </TinyLogoArea>
      <TextAWait>Aguarde...</TextAWait>
      <LoadingIcon size="large" color="#fff" />
    </Container>
  );
};

export default Preload;
