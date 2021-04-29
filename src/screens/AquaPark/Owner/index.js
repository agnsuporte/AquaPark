import React, {useState} from 'react';
import type {Node} from 'react';

import {
  TouchableWithoutFeedback,
  Keyboard,
  // PermissionsAndroid,
  // Platform,
} from 'react-native';

// import CameraRoll from '@react-native-community/cameraroll';

import StepOne from './steps/Step1';
import StepTwo from './steps/Step2';
import StepThree from './steps/Step3';

import {
  Title,
  ReturnButton,
  ReturnButtonText,
  Container,
  Actions,
  Inner,
} from './styles';

const AquaParkOwner: () => Node = () => {
  const [step, setStep] = useState(1);

  // PROPRIETÁRIO
  const [owner, setOwner] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    region: '',
  });

  const [avatar, setAvatar] = useState(null);

  const DATA = [
    {id: 1, title: 'Proprietário: ', data: owner.name},
    {id: 2, title: 'E-mail: ', data: owner.email},
    {id: 3, title: 'Telefone: ', data: owner.phone},
    {id: 4, title: 'Endereço: ', data: owner.address},
    {id: 5, title: 'Cidade: ', data: owner.city},
    {id: 6, title: 'Estado: ', data: owner.region},
  ];

  // Proceed to next step
  const nextStep = () => {
    const count = step >= 3 ? 3 : step;
    setStep(count + 1);
  };

  // Go back to prev step
  const prevStep = () => {
    const count = step < 2 ? 2 : step;
    setStep(count - 1);
  };

  // const hasAndroidPermission = async () => {
  //   const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
  //   const hasPermission = await PermissionsAndroid.check(permission);

  //   if (hasPermission) {
  //     return true;
  //   }

  //   const status = await PermissionsAndroid.request(permission);
  //   return status === 'granted';
  // };

  const saveDataOwner = async () => {
    // if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
    //   return;
    // }

    // if (avatar) {
    //   await CameraRoll.save(avatar);
    //   await setAvatar(null);
    // }

    setOwner({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      region: '',
    });

    setStep(4);
  };

  switch (step) {
    case 1:
      return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <StepOne
              owner={owner}
              setOwner={setOwner}
              step={step}
              prevStep={prevStep}
              nextStep={nextStep}
            />
          </Container>
        </TouchableWithoutFeedback>
      );
    case 2:
      return (
        <Container>
          <StepTwo
            prevStep={prevStep}
            nextStep={nextStep}
            avatar={avatar}
            setAvatar={setAvatar}
          />
        </Container>
      );
    case 3:
      return (
        <Container>
          <StepThree
            prevStep={prevStep}
            nextStep={nextStep}
            avatar={avatar}
            DATA={DATA}
            saveDataOwner={saveDataOwner}
          />
        </Container>
      );
    default:
      return (
        <Container>
          <Inner>
            <Title>REGISTRO COM SUCESSO!</Title>
            <Actions>
              <ReturnButton onPress={() => setStep(1)}>
                <ReturnButtonText>Continuar... Novo Registro.</ReturnButtonText>
              </ReturnButton>
            </Actions>
          </Inner>
        </Container>
      );
  }
};

export default AquaParkOwner;
