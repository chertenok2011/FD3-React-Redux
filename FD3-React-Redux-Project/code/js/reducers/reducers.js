import { combineReducers } from 'redux';

import appData from './data';
import filterReducers from './filter';
import selectReducers from './select';
import addProductCard from './addCard';

let combinedReducer=combineReducers({
    data: appData,
    filter: filterReducers,
    select: selectReducers,
    card: addProductCard
});

export default combinedReducer;