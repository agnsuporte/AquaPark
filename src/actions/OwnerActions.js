export const ownerIdAction = id => {
  return {
    type: 'OWNER_ID_ACTION',
    payload: {
      id,
    },
  };
};

export const ownerNameAction = name => {
  return {
    type: 'OWNER_NAME_ACTION',
    payload: {
      name,
    },
  };
};

export const ownerEmailAction = email => {
  return {
    type: 'OWNER_EMAIL_ACTION',
    payload: {
      email,
    },
  };
};

export const ownerPhoneAction = phone => {
  return {
    type: 'OWNER_PHONE_ACTION',
    payload: {
      phone,
    },
  };
};

export const ownerAddressAction = address => {
  return {
    type: 'OWNER_ADDRESS_ACTION',
    payload: {
      address,
    },
  };
};

export const ownerCityAction = city => {
  return {
    type: 'OWNER_CITY_ACTION',
    payload: {
      city,
    },
  };
};

export const ownerRegionAction = region => {
  return {
    type: 'OWNER_REGION_ACTION',
    payload: {
      region,
    },
  };
};

export const ownerSetInformationAction = data => {
  return {
    type: 'OWNER_SET_INFORMATION_ACTION',
    payload: {
      id: data.id,
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      city: data.city,
      region: data.region,
    },
  };
};
