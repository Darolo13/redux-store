import redux, { createStore, combineReducers } from 'redux';

rootReducer = combineReducers({
// to be set up
});

const store = createStore(rootReducer);
store.subscribe(() => store.getState());

export default store;