import {createStore, combineReducers} from 'redux';

import UserReducer from './src/reducers/UserReducer';
import OwnerReducer from './src/reducers/OwnerReducer';
import AquaParkReducer from './src/reducers/AquaParkReducer';

const rootReducer = combineReducers({
  user: UserReducer,
  owner: OwnerReducer,
  aquapark: AquaParkReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
