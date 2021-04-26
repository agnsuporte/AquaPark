/**
 * PISCINA / AQUA PARK
 *
 * @format
 * @flow strict-local
 */

export const aquaParkIdAction = id => {
  return {
    type: 'AQUAPARK_ID_ACTION',
    payload: {
      id,
    },
  };
};

export const aquaParkIdOwnerAction = ownerId => {
  return {
    type: 'AQUAPARK_ID_OWNER_ACTION',
    payload: {
      ownerId,
    },
  };
};

export const aquaParkVolumeAction = volume => {
  return {
    type: 'AQUAPARK_VOLUME_ACTION',
    payload: {
      volume,
    },
  };
};

export const aquaParkStructureAction = structure => {
  return {
    type: 'AQUAPARK_STRUCTURE_ACTION',
    payload: {
      structure,
    },
  };
};

export const aquaParkLocalAction = local => {
  return {
    type: 'AQUAPARK_LOCAL_ACTION',
    payload: {
      local,
    },
  };
};

export const aquaParkTypeUseAction = typeUse => {
  return {
    type: 'AQUAPARK_TYPE_USE_ACTION',
    payload: {
      typeUse,
    },
  };
};

export const aquaParkWaterPumpAction = waterPump => {
  return {
    type: 'AQUAPARK_WATER_PUMP_ACTION',
    payload: {
      waterPump,
    },
  };
};

export const aquaParkWaterPumpFlowAction = waterPumpFlow => {
  return {
    type: 'AQUAPARK_WATER_PUMP_FLOW_ACTION',
    payload: {
      waterPumpFlow,
    },
  };
};

export const aquaParkManufacturerAction = manufacturer => {
  return {
    type: 'AQUAPARK_MANUFACTURER_ACTION',
    payload: {
      manufacturer,
    },
  };
};

export const aquaParkSetInformationAction = data => {
  return {
    type: 'AQUAPARK_SET_INFORMATION_ACTION',
    payload: {
      id: data.id,
      ownerId: data.ownerId,
      volume: data.volume,
      structure: data.structure,
      local: data.local,
      typeUse: data.typeUse,
      waterPump: data.waterPump,
      waterPumpFlow: data.waterPumpFlow,
      manufacturer: data.manufacturer,
    },
  };
};
