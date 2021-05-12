import React, {useState} from 'react';
import { TouchableWithoutFeedback, Keyboard, Dimensions} from "react-native";
import {Picker} from '@react-native-picker/picker';

import {
  Container,
  ScrollContent,
  Content,
  Label,
  Item,
  Input
} from './styles'

const INIT_VALUE = {
  volume: '',
  waterSupplyTreatment: '',
  structure: '',
  typeUse: '',
};

const TYPE_USE = [
  {id: 0, label: "..." },
  {id: 1, label: "Pública" },
  {id: 2, label: "Coletivas" },
  {id: 3, label: "De hospedaria" },
  {id: 4, label: "Residências coletivas" },
  {id: 5, label: "Residências privativas" },
]

const WATER_SUPPLY_TREATMENT = [
  {id: 0, label: "..."},
  {id: 1, label: "Recirculação e tratamento"},
  {id: 2, label: "Renovação cont. Com tratamento"},
  {id: 3, label: "Renovação cont. Sem tratamento"},
  {id: 4, label: "Renovação (encher e esvaziar)"},
]

const STRUCTURE = [
  {id: 0, label: "..."},
  {id: 1, label: "Concreto"},
  {id: 2, label: "Alvenaria"},
  {id: 3, label: "Fibra de Vidro"},
  {id: 4, label: "Vinil"},
]

const windowWidth = Dimensions.get('window').width;

const RenderPicker = props => {
  const {data, selectedValue, onValueChange} = props;
  return(
    // <Picker
    //   mode="dropdown"
    //   iosIcon={<Icon name="arrow-down" />}
    //   style={{ marginTop: 10,}}
    //   placeholder=""
    //   placeholderStyle={{ color: "#bfc6ea" }}
    //   placeholderIconColor="#007aff"
    //   selectedValue={selectedValue}
    //   onValueChange={onValueChange}
    // >
    //   {
    //     data.map(i => <Picker.Item key={i.id} label={i.label} value={i.id} />)
    //   }
    // </Picker>

    <Picker
      mode="dropdown"
      selectedValue={selectedValue}
      onValueChange={(itemValue) =>
      onValueChange(itemValue)
    }>
      {
        data.map(i => <Picker.Item key={i.id} label={i.label} value={i.id} />)
      }
    </Picker>

  );
}

const AquaParkPool = props => {

  const [value, setValue] = useState(INIT_VALUE);
  // const [waterSupplyTreatment, setWaterSupplyTreatment] = useState('');
  // const [typeUse, setTypeUse] = useState('');

  return (
    <Container>
      <ScrollContent >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>
            
            <Item>
              <Label>Volume (m3)</Label>  
              <Input 
                value={value.volume}
                onChangeText={vlr => setValue({...value, volume:vlr})}
                placeholder="0.0"
                keyboardType="numeric"              
              />
            </Item>     

            <Item>
              <Label>Quanto ao uso</Label>  
              <RenderPicker 
                data={TYPE_USE} 
                selectedValue={value.typeUse} 
                onValueChange={(vlr) => setValue({...value, typeUse:vlr})} 
                />
            </Item>

            <Item>
              <Label>Suprimento e Tratamento da água</Label>  
              <RenderPicker 
                data={WATER_SUPPLY_TREATMENT} 
                selectedValue={value.waterSupplyTreatment} 
                onValueChange={(vlr) => setValue({...value, waterSupplyTreatment:vlr})} 
                />
            </Item>          

            <Item>
              <Label>Tipo de estrutura</Label>  
              <RenderPicker 
                data={STRUCTURE} 
                selectedValue={value.structure} 
                onValueChange={(vlr) => setValue({...value, structure:vlr})} 
                />
            </Item>            

          </Content>
        </TouchableWithoutFeedback>        
      </ScrollContent>
    </Container>
  );
};

export default AquaParkPool;
