'use strict';

function filterReducers(state = '', action) {
    switch (action.type) {
        case 'FILTER_PRODUCT': {
            return action.filterText
        }
        default: {
            return state;
        }
    }
}

export default filterReducers;