import axios from 'axios';


export const FETCH_QUOTE_START = 'FETCH_QUOTE_START';
export const FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS';
export const FETCH_QUOTE_FAIL = 'FETCH_QUOTE_FAIL';


export const getNewQuote = () => dispatch => {
    dispatch({ type: FETCH_QUOTE_START })
    axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
        .then((res)=>{
            dispatch({ type: FETCH_QUOTE_SUCCESS, payload: res['data'][0] })
        })
        .catch((err)=>{
            console.log('error: ', err)
            dispatch({ type: FETCH_QUOTE_FAIL, payload: err })
        });
};