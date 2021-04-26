const initialState = {
  id: 0,
  name: '',
  email: '',
  phone: '',
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_ID_ACTION':
      return {...state, id: action.payload.id};
    case 'USER_NAME_ACTION':
      return {...state, name: action.payload.name};
    case 'USER_EMAIL_ACTION':
      return {...state, email: action.payload.email};
    case 'USER_PHONE_ACTION':
      return {...state, phone: action.payload.phone};
    case 'USER_SET_INFORMATION_ACTION':
      return {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
      };
    default:
      return state;
  }
};

export default UserReducer;
