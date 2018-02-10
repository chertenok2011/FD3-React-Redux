import { combineReducers } from 'redux';

import appData from './data';
import filterReducers from './filter';
import addProductCard from './addCard';

let combinedReducer=combineReducers({
    data: appData,
    filter: filterReducers,
    card: addProductCard
});

export default combinedReducer;