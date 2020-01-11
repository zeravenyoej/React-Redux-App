import axios from "axios";

export const FETCH_QS_START = 'FETCH_DATA_START';
export const FETCH_QS_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_QS_FAIL = 'FETCH_DATA_FAIL';
export const REVEAL_ANSWERS = 'REVEAL_ANSWERS';


export const getNewQuestions = () => dispatch => {
    dispatch({ type: FETCH_QS_START })
    axios.get('https://opentdb.com/api.php?amount=5&category=11&difficulty=hard&type=multiple')
        .then((res)=>{
            dispatch({ type: FETCH_QS_SUCCESS, payload: res.data.results })
        })
        .catch((err)=>{
            dispatch({ type: FETCH_QS_FAIL, payload: err })
        })
};

export const revealAnswers = () => dispatch => {
    dispatch({ type: REVEAL_ANSWERS })
}