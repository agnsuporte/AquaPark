import React, {useState} from 'react';
import { TouchableWithoutFeedback, Keyboard, Alert, View} from "react-native";

import {
  Container,
  ScrollContent,
  Content,
  Label,
  Item,
  Input,
  Text,
  Description
} from './styles'

const upAlkalinity = (value) => {
  // =((ALC_FIRST-ALC_FOUND)*BASE)+ALC_BASE
  const BASE = 1.7;
  const ALC_FIRST = 70;
  const ALC_BASE = 85;
  const ALC_FOUND = value;
  const result = ((ALC_FIRST-ALC_FOUND)*BASE)+ALC_BASE;

  return parseFloat(result);
}

const downAlkalinity = value => {
  // =((D1-130)*2)+20
  const BASE = 2;
  const ALC_FIRST = 130;
  const ALC_BASE = 20;
  const ALC_FOUND = value;
  const result = ((ALC_FOUND-ALC_FIRST)*BASE)+ALC_BASE;

  return parseFloat(result);
}

const AquaParkPool = ({ route, navigation }) => {

  const { owner_id, volume } = route.params;

  const [alkalinityFound, setAlkalinityFound] = useState('');
  const [adjustAlkalinity, setAdjustAlkalinity] = useState('');

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Alcalinidade',
    });
  }, [navigation]);

  const checkAlcalidade = (value) => {

    if (!value) {
      setAdjustAlkalinity('');
      return false;
    }

    const alc = parseInt(value) ;
    const ponto = value.indexOf('.');
    const virgula = value.indexOf(',');

    console.log(ponto);

    if (isNaN(alc) || ponto > -1 || virgula > -1) {
      Alert.alert(
        'Aqua Park',
        'Informe um valor inteiro.',
      );
      setAdjustAlkalinity('');
      return false;
    }
  
    if (alc < 80 ) {
      setAdjustAlkalinity(upAlkalinity(alc))
    } else if (alc > 120) {
      setAdjustAlkalinity(downAlkalinity(alc))
    }
  
  }  

  const RenderAlkalinity = () => {

    let showTotal = '';
    let typeAlkalinity;
    const total = parseFloat(volume) * adjustAlkalinity;

    if (alkalinityFound < 80 ) {
      typeAlkalinity = "BAIXA";
      showTotal = `${total}g`;
    } else if (alkalinityFound > 120) {
      typeAlkalinity = "ALTA";
      showTotal = `${total}ml`;
    }

    if(adjustAlkalinity && showTotal) {
      return (
        <Item>
          <Label>Correção da alcalinidade {typeAlkalinity}</Label>  
          <Description>
            Aplique <Text style={{"fontSize":20}}>{showTotal}</Text>  para elevar a alcalinidade.
          </Description>
        </Item>     
      );
    }
  }


  return (
    <Container>
      <ScrollContent >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>

          <Item>
            <Label>Alcalinidade Encontrada:</Label>  
            <Input 
              autoFocus
              maxLength={5}
              onEndEditing={() => checkAlcalidade(alkalinityFound)}
              value={alkalinityFound}
              onChangeText={vlr => setAlkalinityFound(vlr)}
              keyboardType="numeric"              
            />
          </Item>  

          <View>
            {RenderAlkalinity()}
          </View>

          </Content>
        </TouchableWithoutFeedback>        
      </ScrollContent>
    </Container>
  );
};

export default AquaParkPool;
