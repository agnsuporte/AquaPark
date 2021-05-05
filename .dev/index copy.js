import React, {useState} from 'react';
import type {Node} from 'react';

import {
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import AquaParkInput from '../../../components/AquaParkInput';
import {Title, Container, Actions, Inner} from './styles';

const AquaPark: () => Node = () => {
  const [step, setStep] = useState(1);

  // PISCINA
  const [aquaPark, setAquaPark] = useState({
    volume: '',
    structure: '',
    local: '',
    typeUse: '',
    waterPump: '',
    waterPumpFlow: '',
    manufacturer: '',
  });

  const DATA = [
    {id: 7, title: 'Volume: ', data: aquaPark.volume},
    {id: 8, title: 'Estrutura: ', data: aquaPark.structure},
    {id: 9, title: 'Local: ', data: aquaPark.local},
    {id: 10, title: 'Tipo de Uso: ', data: aquaPark.typeUse},
    {id: 11, title: 'Bomga dágua: ', data: aquaPark.waterPump},
    {id: 12, title: 'Fluxo: ', data: aquaPark.waterPumpFlow},
    {id: 13, title: 'Fabricante: ', data: aquaPark.manufacturer},
    {id: 14, title: 'Observações: ', data: aquaPark.comments},
  ];

  // Proceed to next step
  const nextStep = () => {
    const count = step >= 4 ? 0 : step;
    setStep(count + 1);
  };

  // Go back to prev step
  const prevStep = () => {
    const count = step < 2 ? 5 : step;
    setStep(count - 1);
  };

  switch (step) {
    case 1:
      return (
        <Container>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView>
              <Inner>
                <Title>PISCINA {step}/4 </Title>

                <AquaParkInput
                  value={aquaPark.volume}
                  onChangeText={txt => setAquaPark({...aquaPark, volume: txt})}
                  placeholder="Volume em m3"
                />

                <AquaParkInput
                  value={aquaPark.structure}
                  onChangeText={txt =>
                    setAquaPark({...aquaPark, structure: txt})
                  }
                  placeholder="Tipo de Estrutura"
                />

                <AquaParkInput
                  value={aquaPark.local}
                  onChangeText={txt => setAquaPark({...aquaPark, local: txt})}
                  placeholder="Como é o Local? (coberta? aberta?...)"
                />

                <AquaParkInput
                  value={aquaPark.typeUse}
                  onChangeText={txt => setAquaPark({...aquaPark, typeUse: txt})}
                  placeholder="Tipo de uso da piscina... (privativa, pública, ...)"
                />

                <AquaParkInput
                  value={aquaPark.waterPump}
                  onChangeText={txt =>
                    setAquaPark({...aquaPark, waterPump: txt})
                  }
                  placeholder="Bomba d'água..."
                />

                <AquaParkInput
                  value={aquaPark.waterPumpFlow}
                  onChangeText={txt =>
                    setAquaPark({...aquaPark, waterPumpFlow: txt})
                  }
                  placeholder="Fluxo da bomba d'água"
                />

                <AquaParkInput
                  value={aquaPark.manufacturer}
                  onChangeText={txt =>
                    setAquaPark({...aquaPark, manufacturer: txt})
                  }
                  placeholder="Fabricante da bomba d'água"
                />

                <Actions>
                  <Button onPress={prevStep} title="Voltar" color="#D7265B" />
                  <Button onPress={nextStep} title="Próximo" color="#2196F3" />
                </Actions>
              </Inner>
            </ScrollView>
          </TouchableWithoutFeedback>
        </Container>
      );
    default:
      return (
        <Container>
          <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <Inner>
                <Title>Form AquaPark Screen {step} </Title>
                <Actions style={{justifyContent: 'center'}}>
                  <Button
                    onPress={nextStep}
                    title="Continuar"
                    color="#2196F3"
                  />
                </Actions>
              </Inner>
            </TouchableWithoutFeedback>
          </ScrollView>
        </Container>
      );
  }
};

export default AquaPark;
