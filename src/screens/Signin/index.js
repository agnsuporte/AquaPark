import React, {useState} from 'react';
import type {Node} from 'react';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  Alert,
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
  SocialNetworks,
  SocialButton,
  SocialText,
  ErroText,
  Input,
  Forguet,
  Button,
  LoadArea,
  LoadingText,
} from './styles';

import api from '../../api';
import {setToken, isEmailValid} from '../../auth';
import {userSetInformationAction} from '../../actions/UserActions';

const SignIn: () => Node = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState({err: false, msg: ''});
  const [load, setLoad] = useState(false);

  const navigation = useNavigation();

  const onNot = () => {
    Alert.alert('Aqua Park', 'Indisponível no momento.');
  };

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
              props.userSetInformationAction(resp.data);
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
            <Title>Faça Login para continuar</Title>

            <SocialNetworks>
              <SocialButton onPress={onNot}>
                <SocialText>Facebook</SocialText>
              </SocialButton>
              <SocialButton onPress={onNot}>
                <SocialText>Google</SocialText>
              </SocialButton>
            </SocialNetworks>

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

const mapStateToProps = state => {
  return {
    id: state.user.id,
    name: state.user.name,
    email: state.user.email,
    phone: state.user.phone,
  };
};

// const mapDispathToProps = () => {
//   return {
//     userSetInformationAction,
//   };
// };

const SignInConnect = connect(mapStateToProps, {userSetInformationAction})(
  SignIn,
);

export default SignInConnect;
