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
            The quote will go here
        
            <div>
                <br/>
                <button onClick={quoteHandler}>Get a New Quote!</button>
            </div>
        </div>
    )
};

const mapStateToProps = () => {
    return {
        quote: ''
    };
};

export default connect(mapStateToProps, { getNewQuote })(Quote);

