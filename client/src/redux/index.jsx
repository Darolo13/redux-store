import redux, { createStore, combineReducers } from 'redux';
// reducers
import ProductReducers from './ProductReducers'

rootReducer = combineReducers({
products: ProductReducers
});

const store = createStore(rootReducer);
store.subscribe(() => store.getState());

export default store;