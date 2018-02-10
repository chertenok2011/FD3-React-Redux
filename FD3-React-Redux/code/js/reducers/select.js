'use strict';

function selectReducers(state = null, action) {
    switch (action.type) {
        case 'SELECT_PRODUCT': {
            console.log('page ' + page);
            return action.id
        }
        default: {
            return state;
        }
    }
}

export default selectReducers;