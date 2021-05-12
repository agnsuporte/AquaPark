import React, {useState} from 'react';
import {
  Alert,
  Platform,
  ScrollView,
  Button,
  Keyboard,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import api from '../../api';
import {isEmailValid} from '../../auth';

import {
  Container,
  Inner,
  Title,
  Input,
  ButtonContainer,
  Loading,
  LoadingText,
  ErrorText,
} from './styles';

const INIT_SIGNUP = {name: '', email:'', password:'', passwordConfirm:'', phone:''}

const SignUp = props => {
  const [signup, setSignup] = useState(INIT_SIGNUP);
  const [erro, setErro] = useState({err: false, msg: ''});
  const [load, setLoad] = useState(false);
  const navigation = useNavigation();

  const getData = () => {
    const data = {
      userName: signup.name.trim(),
      userEmail: signup.email.trim().toLowerCase(),
      userPassword: signup.password.trim(),
      userPhone: signup.phone.trim(),
    };
    return data;
  };

  const validate = () => {
    setErro({err: false, msg: ''});

    if (
      signup.name.trim() === '' ||
      signup.email.trim() === '' ||
      signup.password.trim() === '' ||
      signup.passwordConfirm.trim() === ''
    ) {
      setErro({err: true, msg: 'Todos os campos são obrigatórios.'});
      return false;
    }

    if (signup.password !== signup.passwordConfirm) {
      setErro({err: true, msg: 'As senhas devem ser iguais.'});
      return false;
    }

    if (isEmailValid(signup.email) === false) {
      setErro({err: true, msg: 'Informe um E-mail válido.'});
      return false;
    }
    return true;
  };

  const handleSend = async () => {
    if (validate()) {
      setLoad(true);

      const data = await getData();
      await api
        .post('/user/create', data)
        .then(resp => {
          setLoad(false);
          const create = resp.data.createAt;
          if (create === false) {
            const text = `${resp.data.error.fields.userEmail} já existe!`;
            setErro({err: true, msg: text});
          } else {
            navigation.reset({
              routes: [{name: 'SignIn'}],
            });
          }
        })
        .catch(e => {
          setLoad(false);
          setErro({err: true, msg: 'Falha ao enviar.'});
          Alert.alert(JSON.stringify(e));
        });
    }
  };

  if (load) {
    return (
      <Loading>
        <ActivityIndicator size="large" color="#fff" />
        <LoadingText>A g u a r d e ...</LoadingText>
      </Loading>
    );
  }

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Inner>
            <Title>Crie sua conta aqui</Title>
            {erro.err && <ErrorText>{erro.msg}</ErrorText>}
            <Input
              value={signup.name}
              onChangeText={txt => setSignup({...signup, name: txt})}
              placeholder="Informe seu nome"
            />
            <Input
              value={signup.email}
              onChangeText={txt => setSignup({...signup, email: txt})}
              placeholder="Informe seu e-mail"
              keyboardType="email-address"
            />
            <Input
              value={signup.phone}
              onChangeText={txt => setSignup({...signup, phone: txt})}
              placeholder="Informe seu Telefone"
            />
            <Input
              value={signup.password}
              onChangeText={txt => setSignup({...signup, password: txt})}
              placeholder="Informe sua palavra passe"
              secureTextEntry
            />
            <Input
              value={signup.passwordConfirm}
              onChangeText={txt => setSignup({...signup, passwordConfirm: txt})}
              placeholder="Repita sua palavra passe"
              secureTextEntry
            />
            <ButtonContainer>
              <Button title="Enviar" onPress={handleSend} />
            </ButtonContainer>
            <ButtonContainer>
              <Button
                title="Voltar"
                color="#BDBDBD"
                onPress={() => {
                  navigation.navigate('SignIn');
                }}
              />
            </ButtonContainer>
          </Inner>
        </TouchableWithoutFeedback>
      </ScrollView>
    </Container>
  );
};

export default SignUp;
