import React from 'react';
import { connect } from 'react-redux';
import { getNewQuote } from '../actions';

const Quote = (props) => {

    const quoteHandler = (e) => {
        e.preventDefault();
        props.getNewQuote();
    };

    return (
        <div>
            {props.quote ? (
                <div>
                    <p id='quote'>"{props.quote.quote}"</p> 
                    <p className='author'>-{props.quote.author}</p>
                </div>
                ):(
                    <p>Hit the button below</p>
                )}

            <div>
                <br/>
                <button onClick={quoteHandler}>Get a New Quote!</button>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        quote: state.quote
    };
};

export default connect(mapStateToProps, { getNewQuote })(Quote);

