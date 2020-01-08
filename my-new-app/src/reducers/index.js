import { FETCH_QUOTE_START, FETCH_QUOTE_SUCCESS, FETCH_QUOTE_FAIL } from '../actions/';

const initialState = {
    quote: 'Hit the button below!'
}

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_QUOTE_START: 
            return {
                ...state
            };
        case FETCH_QUOTE_SUCCESS:
            return {
                ...state
            };
        case FETCH_QUOTE_FAIL: 
            return {
                ...state
            };
        default:
            return state;
    };
};