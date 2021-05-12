import React, {useState} from 'react';
import { Alert, Modal, StyleSheet, Dimensions} from "react-native";
import { Container, Icon, Header, Content, Form, Item, Picker, Label, Input, Text } from 'native-base';


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

const INIT_VALUE = {
  volume: '',
  waterSupplyTreatment: '',
  pH: 0,
  structure: '',
  local: '',
  typeUse: '',
  waterPump: '',
  waterPumpFlow: '',
  manufacturer: '',
};

const TYPE_USE = [
  {id: 0, label: "Quanto ao uso" },
  {id: 1, label: "Pública" },
  {id: 2, label: "Coletivas" },
  {id: 3, label: "De hospedaria" },
  {id: 4, label: "Residências coletivas" },
  {id: 5, label: "Residências privativas" },
]

const WATER_SUPPLY_TREATMENT = [
  {id: 0, label: "Suprimento e Tratamento da água"},
  {id: 1, label: "Recirculação e tratamento"},
  {id: 2, label: "Renovação contínua programada com tratamento"},
  {id: 3, label: "Renovação contínua programada sem tratamento"},
  {id: 4, label: "Renovação programada (encher e esvaziar)"},
]

const windowWidth = Dimensions.get('window').width;

const RenderPicker = props => {
  const {data, selectedValue, onValueChange} = props;
  return(
    <Picker
      mode="dropdown"
      iosIcon={<Icon name="arrow-down" />}
      style={{ marginTop: 10,}}
      placeholder=""
      placeholderStyle={{ color: "#bfc6ea" }}
      placeholderIconColor="#007aff"
      selectedValue={selectedValue}
      onValueChange={onValueChange}
    >
      {
        data.map(i => <Picker.Item key={i.id} label={i.label} value={i.id} />)
      }
    </Picker>
  );
}

const AquaParkPool = props => {

  const [value, setValue] = useState(INIT_VALUE);
  const [waterSupplyTreatment, setWaterSupplyTreatment] = useState('');
  const [typeUse, setTypeUse] = useState('');

  return (
    <Container>

      <Content >

        <Form >

          <Item floatingLabel style={{width:(windowWidth * 0.94)}}>
            <Label>Volume (m3)</Label>
            <Input 
              value={value.volume} 
              onChangeText={(vl) => setValue({...value, volume: vl})} 
              placeholder="0.0"/>
            <Icon active name="thermometer-outline" />
          </Item>
            
          <RenderPicker 
            data={TYPE_USE} 
            selectedValue={typeUse} 
            onValueChange={(vl) => setTypeUse(vl)} 
            />

          <RenderPicker 
            data={WATER_SUPPLY_TREATMENT} 
            selectedValue={waterSupplyTreatment} 
            onValueChange={(vl) => setWaterSupplyTreatment(vl)} 
            />

          
        </Form>

      </Content>
    </Container>
  );
};

export default AquaParkPool;
