import React from 'react';
import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from '../Actions/actions';


const initialState = {

};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_DATA_START:
            return {
                ...state
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state
            };
        case FETCH_DATA_FAIL:
            return {
                ...state
            };
        default: 
            return state;
    }
};

export default reducer;