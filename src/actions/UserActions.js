export const userIdAction = id => {
  return {
    type: 'USER_ID_ACTION',
    payload: {
      id,
    },
  };
};

export const userNameAction = name => {
  return {
    type: 'USER_NAME_ACTION',
    payload: {
      name,
    },
  };
};

export const userEmailAction = email => {
  return {
    type: 'USER_EMAIL_ACTION',
    payload: {
      email,
    },
  };
};

export const userPhoneAction = phone => {
  return {
    type: 'USER_PHONE_ACTION',
    payload: {
      phone,
    },
  };
};

export const userSetInformationAction = data => {
  return {
    type: 'USER_SET_INFORMATION_ACTION',
    payload: {
      id: data.id,
      name: data.name,
      email: data.email,
      phone: data.phone,
    },
  };
};
