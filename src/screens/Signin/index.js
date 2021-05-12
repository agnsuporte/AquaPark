import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  Alert,
  ToastAndroid,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

import {
  Container,
  BodyArea,
  Title,
  BodyHeard,
  ErroText,
  Input,
  Forguet,
  Button,
  LoadArea,
  LoadingText,
  TinyLogo,
} from './styles';

import api from '../../api';
import {setToken, setStorageProfile, isEmailValid} from '../../auth';
import AquaParkLogo from '../../assets/img/logo/LogoBlue.png';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState({err: false, msg: ''});
  const [load, setLoad] = useState(false);

  const navigation = useNavigation();

  const handleSend = async () => {
    setErro({err: false, msg: ''});
    const emailValid = isEmailValid(email);

    if (emailValid && password !== '' && password.length > 3) {
      setLoad(true);
      await api
        .post('/user/sign', {
          userEmail: email.trim().toLowerCase(),
          userPassword: password,
        })
        .then(resp => {
          setLoad(false);
          const resposta = resp.data?.signAt;
          switch (resposta) {
            case false:
              setErro({err: true, msg: 'E-mail ou Senha Inválido.'});
              
              break;
            default:
              setErro({err: false, msg: ''});
              setToken(resp.data.token);
              setStorageProfile(resp.data);
              navigation.reset({
                routes: [{name: 'MainTab'}],
              });
          }
        })
        .catch(e => {
          setLoad(false);
          if (e.message === 'Network Error') {
            setErro({err: true, msg: 'Verifique sua conexão com a Internet.'});
          } else {
            setErro({err: true, msg: e.message});
          }
        });
    } else {
      setErro({err: true, msg: 'E-mail ou Senha Inválido.'});
    }
  };

  if (load) {
    return (
      <LoadArea>
        <ActivityIndicator size="large" color="#fff" />
        <LoadingText>A g u a r d e ...</LoadingText>
      </LoadArea>
    );
  }

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

          <BodyArea>

            <BodyHeard>
              <TinyLogo source={AquaParkLogo} />
              <Title>Faça Login para continuar</Title>
            </BodyHeard>

            {erro.err && <ErroText>{erro.msg}</ErroText>}

            <Input
              value={email}
              onChangeText={setEmail}
              placeholder="Informe seu e-mail"
              keyboardType="email-address"
            />

            <Input
              placeholder="Informe sua palavra passe"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <Forguet onPress={() => Alert.alert('Então... tambem eu!')}>
              <Text style={{textAlign: 'right'}}>Esqueceu a senha?</Text>
            </Forguet>

            <Button onPress={handleSend}>
              <Text style={{color: '#fff', textAlign: 'center'}}>Enviar</Text>
            </Button>

            <Button
              style={{backgroundColor: '#fff'}}
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={{color: '#000', textAlign: 'center'}}>
                Criar uma conta
              </Text>
            </Button>
          </BodyArea>
        </TouchableWithoutFeedback>
      </ScrollView>
    </Container>
  );
};

export default SignIn;
