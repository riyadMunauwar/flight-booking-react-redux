import {createStore} from 'redux'
import flightReducer from './flight'


const store = createStore(flightReducer);

export default store;