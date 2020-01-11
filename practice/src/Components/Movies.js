import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import Answers from './Answers';
import { getNewQuestions, revealAnswers } from '../Actions/actions';


const Movies = (props) => {

    const newQsHandler = e => {
        e.preventDefault();
        props.getNewQuestions();
    };

    const revealHandler = e =>{
        e.preventDefault();
        props.revealAnswers();
    }

    return (
        <div>
            {props.data.length ? (
                props.data.map((item, index) => (
                    <div key={index}>
                        <ol>
                            <Question 
                                item={item} 
                                getNewQuestions={props.getNewQuestions}/>
                        </ol>
                            <Answers
                                correctAnswer={item.correct_answer} 
                                incorrectAnswers={item.incorrect_answers}
                                revealAnswer={props.revealAnswer}
                            />    
                    </div>
                    ))
            ):(
                <p>Be patient!</p>
            )}
        <div>
            <button onClick={newQsHandler}>Get New Questions</button>
            <button onClick={revealHandler}>Reveal Answer</button>
        </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        data: state.data, 
        revealAnswer: state.revealAnswer
    }
}

export default connect(mapStateToProps, { getNewQuestions, revealAnswers })(Movies);