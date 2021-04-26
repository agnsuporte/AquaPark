import React, {useState} from 'react';
import type {Node} from 'react';
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

const SignUp: () => Node = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [phone, setPhone] = useState('');
  const [erro, setErro] = useState({err: false, msg: ''});
  const [load, setLoad] = useState(false);
  const navigation = useNavigation();

  const getData = () => {
    const data = {
      userName: name.trim(),
      userEmail: email.trim().toLowerCase(),
      userPassword: password.trim(),
      userPhone: phone.trim(),
    };
    return data;
  };

  const validate = () => {
    setErro({err: false, msg: ''});

    if (
      name.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      passwordConfirm.trim() === ''
    ) {
      setErro({err: true, msg: 'Todos os campos são obrigatórios.'});
      return false;
    }

    if (password !== passwordConfirm) {
      setErro({
        err: true,
        msg: 'As senhas devem ser iguais.',
      });
      return false;
    }

    if (isEmailValid(email) === false) {
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
        .catch(err => {
          setLoad(false);
          setErro({err: true, msg: 'Falha ao enviar.'});
          Alert.alert(err);
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
              onChangeText={setName}
              value={name}
              placeholder="Informe seu nome"
            />
            <Input
              value={email}
              onChangeText={setEmail}
              placeholder="Informe seu e-mail"
              keyboardType="email-address"
            />
            <Input
              onChangeText={setPhone}
              value={phone}
              placeholder="Informe seu Telefone"
            />
            <Input
              placeholder="Informe sua palavra passe"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <Input
              placeholder="Repita sua palavra passe"
              value={passwordConfirm}
              onChangeText={setPasswordConfirm}
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
