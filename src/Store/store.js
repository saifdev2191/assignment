import {createStore, combineReducers} from 'redux';
import loginreducer from '../Reducers/loginreducer';
import featureReducer from '../Reducers/featureReducer';
import ProductReducer from '../Reducers/ProductReducer';

const store = createStore(combineReducers({
    loginreducer,
    featureReducer,
    ProductReducer
}))

export default store;