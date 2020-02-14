import { FETCH_QUOTE_START, FETCH_QUOTE_SUCCESS, FETCH_QUOTE_FAIL } from '../actions/';

const initialState = {
    quote: '', 
    isFetching: false, 
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_QUOTE_START: 
            return {
                ...state, 
                isFetching: true,
                error: ''
            };
        case FETCH_QUOTE_SUCCESS:
            return {
                ...state, 
                isFetching: false, 
                quote: action.payload
            };
        case FETCH_QUOTE_FAIL: 
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    };
};