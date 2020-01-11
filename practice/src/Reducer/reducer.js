import { FETCH_QS_START, FETCH_QS_SUCCESS, FETCH_QS_FAIL, REVEAL_ANSWERS } from '../Actions/actions';


const initialState = {
    isFetching: false, 
    error: '',
    data: '',
    revealAnswer: false
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_QS_START:
            return {
                ...state, 
                isFetching: true,
            };
        case FETCH_QS_SUCCESS:
            return {
                ...state, 
                isFetching: false,
                data: action.payload, 
                revealAnswer: false
            };
        case FETCH_QS_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case REVEAL_ANSWERS:
            return {
                ...state,
                revealAnswer: true
            }
        default: 
            return state;
    }
};

export default reducer;