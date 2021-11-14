import redux, { createStore, combineReducers } from 'redux';
// reducers
import ProductReducers from './ProductReducers'
import CurrentCategoryReducer from './CurrentCategory';

rootReducer = combineReducers({
    products: ProductReducers,
    currentCategory: CurrentCategoryReducer
});

const store = createStore(rootReducer);
store.subscribe(() => store.getState());

export default store;