import {legacy_createStore as createStore} from 'redux';
import dragonReducer from './reducer/dragonReducer';

const store = createStore(dragonReducer);

export default store;
