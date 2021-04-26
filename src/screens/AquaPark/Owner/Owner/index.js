import React from 'react';
import {connect} from 'react-redux';
import type {Node} from 'react';

import AquaParkInput from '../../../../components/AquaParkInput';
import {
  ownerNameAction,
  ownerEmailAction,
  ownerPhoneAction,
  ownerAddressAction,
  ownerCityAction,
  ownerRegionAction,
} from '../../../../actions/OwnerActions';
import {Texto, Inner} from './styles';

const OwnerForm: () => Node = props => {
  const {name, email, phone, address, city, region} = props;

  return (
    <Inner>
      <Texto>PROPRIETÁRIO </Texto>

      <AquaParkInput
        value={name}
        onChangeText={txt => props.ownerNameAction(txt)}
        placeholder="Nome do Proprietário"
      />

      <AquaParkInput
        value={email}
        onChangeText={txt => props.ownerEmailAction(txt)}
        placeholder="E-mail do Proprietário"
        keyboardType="email-address"
      />

      <AquaParkInput
        value={phone}
        onChangeText={txt => props.ownerPhoneAction(txt)}
        placeholder="Telefone do Proprietário"
      />

      <AquaParkInput
        value={address}
        onChangeText={txt => props.ownerAddressAction(txt)}
        placeholder="Endereço do Proprietário"
      />

      <AquaParkInput
        value={city}
        onChangeText={txt => props.ownerCityAction(txt)}
        placeholder="Cidade do Proprietário"
      />

      <AquaParkInput
        value={region}
        onChangeText={txt => props.ownerRegionAction(txt)}
        placeholder="Estado do Proprietário"
      />
    </Inner>
  );
};

const mapStateToProps = state => {
  return {
    name: state.owner.name,
    email: state.owner.email,
    phone: state.owner.phone,
    address: state.owner.address,
    city: state.owner.city,
    region: state.owner.region,
  };
};

const OwnerFormConnect = connect(mapStateToProps, {
  ownerNameAction,
  ownerEmailAction,
  ownerPhoneAction,
  ownerAddressAction,
  ownerCityAction,
  ownerRegionAction,
})(OwnerForm);

export default OwnerFormConnect;
