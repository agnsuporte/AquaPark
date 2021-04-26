/**
 * PROPRIETÁRIO / OWNER
 *
 * @format
 * @flow strict-local
 */
const initialState = {
  id: 0,
  name: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  region: '',
};

const OwnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OWNER_ID_ACTION':
      return {...state, id: action.payload.id};

    case 'OWNER_NAME_ACTION':
      return {...state, name: action.payload.name};

    case 'OWNER_EMAIL_ACTION':
      return {...state, email: action.payload.email};

    case 'OWNER_PHONE_ACTION':
      return {...state, phone: action.payload.phone};

    case 'OWNER_ADDRESS_ACTION':
      return {...state, address: action.payload.address};

    case 'OWNER_CITY_ACTION':
      return {...state, city: action.payload.city};

    case 'OWNER_REGION_ACTION':
      return {...state, region: action.payload.region};

    case 'OWNER_SET_INFORMATION_ACTION':
      return {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
        address: action.payload.address,
        city: action.payload.city,
        region: action.payload.region,
      };
    default:
      return state;
  }
};

export default OwnerReducer;
