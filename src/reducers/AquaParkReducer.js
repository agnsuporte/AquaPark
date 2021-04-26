/**
 * PROPRIETÁRIO / OWNER
 *
 * @format
 * @flow strict-local
 */
const initialState = {
  id: 0,
  ownerId: '',
  volume: '',
  structure: '',
  local: '',
  typeUse: '',
  waterPump: '',
  waterPumpFlow: '',
  manufacturer: '',
};

const AquaParkReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AQUAPARK_ID_ACTION':
      return {...state, id: action.payload.id};

    case 'AQUAPARK_ID_OWNER_ACTION':
      return {...state, ownerId: action.payload.ownerId};

    case 'AQUAPARK_VOLUME_ACTION':
      return {...state, volume: action.payload.volume};

    case 'AQUAPARK_STRUCTURE_ACTION':
      return {...state, structure: action.payload.structure};

    case 'AQUAPARK_LOCAL_ACTION':
      return {...state, local: action.payload.local};

    case 'AQUAPARK_TYPE_USE_ACTION':
      return {...state, typeUse: action.payload.typeUse};

    case 'AQUAPARK_WATER_PUMP_ACTION':
      return {...state, waterPump: action.payload.waterPump};

    case 'AQUAPARK_WATER_PUMP_FLOW_ACTION':
      return {...state, waterPumpFlow: action.payload.waterPumpFlow};

    case 'AQUAPARK_MANUFACTURER_ACTION':
      return {...state, manufacturer: action.payload.manufacturer};

    case 'AQUAPARK_SET_INFORMATION_ACTION':
      return {
        id: action.payload.id,
        ownerId: action.payload.ownerId,
        volume: action.payload.volume,
        structure: action.payload.structure,
        local: action.payload.local,
        typeUse: action.payload.typeUse,
        waterPump: action.payload.waterPump,
        waterPumpFlow: action.payload.waterPumpFlow,
        manufacturer: action.payload.manufacturer,
      };
    default:
      return state;
  }
};

export default AquaParkReducer;
