import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import AquaParkPicker from '../../../../components/AquaParkPicker';

import {
  Container,
  Scroll,
  Inner,
  Button,
  SectionHeard,
  Avatar,
  InfoHeard,
  Name,
  Description,
  Texto,
  Separetor,
  Item,
  Label,
  LabelWithMargin,
  Input
} from './styles';

const WATER_SUPPLY = [
  {id: 0, label: "..." },
  {id: 1, label: "Rede de Abastecimento"},
  {id: 2, label: "Poço ou de mina"}
]

const TYPE_USE = [
  {id: 0, label: "..." },
  {id: 1, label: "Pública" },
  {id: 2, label: "Coletiva" },
  {id: 3, label: "De hospedaria" },
  {id: 4, label: "Residências coletivas" },
  {id: 5, label: "Residência privativa" },
]

const INIT_VALUE = {
  volume: '',
  waterSupply: '',
  typeUse: '',
  structure: '',
};

const AquaParkOwnerDetail = props => {
  const { owner } = props.route.params;

  const [value, setValue] = useState(INIT_VALUE);

  return (
    <Container>

      <Scroll>
        <SectionHeard>
          <Avatar source={{uri: owner.avatar}} />
          <InfoHeard>
            <Name>{owner.name}</Name>
            <Description>{owner.phone}</Description>
            <Description>{owner.email}</Description>
          </InfoHeard>
        </SectionHeard>

        <Inner>
          <Description>{owner.address}</Description>
          <Description>{owner.city}/{owner.region}</Description>
        </Inner>

        <Inner>
          <Separetor />
        </Inner>        

        <Item>
          <Label>Volume (m3)</Label>  
          <Input 
            value={value.volume}
            onChangeText={vlr => setValue({...value, volume:vlr})}
            placeholder="0.0"
            keyboardType="numeric"              
            />
        </Item>

        <Inner>
          <Separetor />
        </Inner>       

        <Inner>
          <LabelWithMargin>Origem da Água</LabelWithMargin> 
          <AquaParkPicker 
            data={WATER_SUPPLY} 
            selectedValue={value.waterSupply} 
            onValueChange={(vlr) => setValue({...value, waterSupply:vlr})} 
          />
        </Inner>     

        <Inner>
          <Separetor />
        </Inner>    

        <Inner>
          <LabelWithMargin>Uso da Piscina</LabelWithMargin> 
          <AquaParkPicker 
            data={TYPE_USE} 
            selectedValue={value.typeUse} 
            onValueChange={(vlr) => setValue({...value, typeUse:vlr})} 
          />
        </Inner>     

        <Inner>
          <Separetor />
        </Inner>                       

        <Inner>
          <Button onPress={() => props.navigation.navigate('Pool', {
              owner_id: owner.id, 
              volume: value.volume
            })}
          >
            <Texto>Alcalinidade</Texto>
            <Icon name="chevron-right" size={16} color="#2D9CDB" />
          </Button>
        </Inner>

               
      </Scroll>
      
    </Container>
  );
};

export default AquaParkOwnerDetail;
