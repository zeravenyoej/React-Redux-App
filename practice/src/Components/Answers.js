import React from 'react';

const Answers = (props) => {
    
    const allAnswers = [...props.incorrectAnswers, props.correctAnswer].sort();

    return (
        <div>
            <ul>
                {allAnswers.map((item, index) => (
                    <li key={index} 
                        className = {`${item === props.correctAnswer && props.revealAnswer === true ? 'correct' : 'incorrect'}`}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Answers;