import React from 'react';
import {connect} from 'react-redux';
import type {Node} from 'react';

import AquaParkInput from '../../../../components/AquaParkInput';
import {
  aquaParkVolumeAction,
  aquaParkStructureAction,
  aquaParkLocalAction,
  aquaParkTypeUseAction,
  aquaParkWaterPumpAction,
  aquaParkWaterPumpFlowAction,
  aquaParkManufacturerAction,
} from '../../../../actions/AquaParkActions';
import {Texto, Inner} from './styles';

const AquaParkForm: () => Node = props => {
  const {
    volume,
    structure,
    local,
    typeUse,
    waterPump,
    waterPumpFlow,
    manufacturer,
  } = props;

  return (
    <Inner>
      <Texto>PISCINA </Texto>

      <AquaParkInput
        value={volume}
        onChangeText={txt => props.aquaParkVolumeAction(txt)}
        placeholder="Volume em m3"
      />

      <AquaParkInput
        value={structure}
        onChangeText={txt => props.aquaParkStructureAction(txt)}
        placeholder="Tipo de Estrutura"
      />

      <AquaParkInput
        value={local}
        onChangeText={txt => props.aquaParkLocalAction(txt)}
        placeholder="Como é o Local? (coberta? aberta?...)"
      />

      <AquaParkInput
        value={typeUse}
        onChangeText={txt => props.aquaParkTypeUseAction(txt)}
        placeholder="Tipo de uso da piscina... (privativa, pública, ...)"
      />

      <AquaParkInput
        value={waterPump}
        onChangeText={txt => props.aquaParkWaterPumpAction(txt)}
        placeholder="Bomba d'água..."
      />

      <AquaParkInput
        value={waterPumpFlow}
        onChangeText={txt => props.aquaParkWaterPumpFlowAction(txt)}
        placeholder="Fluxo da bomba d'água"
      />

      <AquaParkInput
        value={manufacturer}
        onChangeText={txt => props.aquaParkManufacturerAction(txt)}
        placeholder="Fabricante da bomba d'água"
      />
    </Inner>
  );
};

const mapStateToProps = state => {
  return {
    volume: state.aquapark.volume,
    structure: state.aquapark.structure,
    local: state.aquapark.local,
    typeUse: state.aquapark.typeUse,
    waterPump: state.aquapark.waterPump,
    waterPumpFlow: state.aquapark.waterPumpFlow,
    manufacturer: state.aquapark.manufacturer,
  };
};

const AquaParkFormConnect = connect(mapStateToProps, {
  aquaParkVolumeAction,
  aquaParkStructureAction,
  aquaParkLocalAction,
  aquaParkTypeUseAction,
  aquaParkWaterPumpAction,
  aquaParkWaterPumpFlowAction,
  aquaParkManufacturerAction,
})(AquaParkForm);

export default AquaParkFormConnect;
