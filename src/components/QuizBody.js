import React from 'react';
import Option from './Option';

const QuizBody = ({currentQuestion: {id, question, options}}) => {
    const renderedOptions = options.map(({id, option}) => <Option key={id} option={option} />)
    return (
        <div className='question bg-white p-3 border-bottom'>
              <div className='d-flex flex-row align-items-center question-title'>
                <h3 className='text-danger'>Q.</h3>
                <h5 className='mt-1 ml-2'>{question}</h5>
              </div>
                {renderedOptions}
            </div>
    );
}

export default QuizBody;