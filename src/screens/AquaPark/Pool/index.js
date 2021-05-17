import React, {useState} from 'react';
import { TouchableWithoutFeedback, Keyboard, Dimensions} from "react-native";
import {Picker} from '@react-native-picker/picker';

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

const INIT_VALUE = {
  alcalinidade: '',
  ajusteAlc: ''
};

const AquaParkPool = ({ route, navigation }) => {

  const { owner_id, volume } = route.params;
  const [value, setValue] = useState(INIT_VALUE);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Alcalinidade',
    });
  }, [navigation]);

  const checkAlcalidade = () => {

    const alc = parseInt(value.alcalinidade) ;

    if (!isNumber(alc)) {
      return;
    }

    if (alc < 80 ) {
      setValue({...value, ajusteAlc: elevarAlcalidade(alc)})
    } else if (alc > 120) {
      baixarAlcalidade()
    }

  }

  function isNumber(val){
    return typeof val === "number"
  }

  const elevarAlcalidade = (alc) => {
    // =((ALC_FIRST-ALC_FOUND)*BASE)+ALC_BASE
    const BASE = 1.7;
    const ALC_FIRST = 70;
    const ALC_BASE = 85;
    
    const ALC_FOUND = alc;

    return ((ALC_FIRST-ALC_FOUND)*BASE)+ALC_BASE;
  }

  const baixarAlcalidade = () => {
    
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
              onBlur={() => checkAlcalidade()}
              value={value.alcalinidade}
              onChangeText={vlr => setValue({...value, alcalinidade:vlr})}
              keyboardType="numeric"              
            />
          </Item>  

          <Item>
            <Label>Correção da alcalinidade</Label>  
          </Item>          
          <Item>
            <Description>
              É necessário aplicar <Text>{value.ajusteAlc}g/m3</Text> do ajustador da alcalinidade baixa.
            </Description>
          </Item>                       

          <Item>
            <Label>Total</Label>  
          </Item>          
          <Item>
            <Description>
              {value.ajusteAlc}g <Text> x </Text> {volume}m3 <Text> = </Text> { parseFloat(volume) * parseInt(value.ajusteAlc) } 
            </Description>
          </Item> 

          </Content>
        </TouchableWithoutFeedback>        
      </ScrollContent>
    </Container>
  );
};

export default AquaParkPool;
