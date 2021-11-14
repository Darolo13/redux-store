import redux, { createStore, combineReducers } from 'redux';
// reducers
import ProductReducers from './ProductReducers'
import CurrentCategoryReducers from './CurrentCategoryReducers';
import CategoriesReducer from './CategoriesReducers';
import CartReducer from './CartReducers';

rootReducer = combineReducers({
    products: ProductReducers,
    currentCategory: CurrentCategoryReducers,
    categories: CategoriesReducer,
    cart: CartReducer
});

const store = createStore(rootReducer);
store.subscribe(() => store.getState());

export default store;