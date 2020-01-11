import React from 'react';


const Question = (props) => {


    return (
        <div>
            <h2>{props.item.question.replace(/&quot;/g, '"')}</h2>
        </div>
    );
};

export default Question;