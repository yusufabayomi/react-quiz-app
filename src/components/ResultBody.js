import React from 'react';
import ResultAnswers from './ResultAnswers';

const ResultBody = ({ questions, markAsCorrect, markAsIncorrect }) => {
  const renderResult = questions.map(({id, question, options}) => (
    <div className='question bg-white p-3 border-bottom' key={id}>
      <div className='d-flex flex-row align-items-center question-title'>
        <h3 className='text-danger'>Q.</h3>
        <h5 className='mt-1 ml-2'>{question}</h5>
      </div>
      <ResultAnswers options={options} markAsCorrect={markAsCorrect} markAsIncorrect={markAsIncorrect} />
    </div>
  ));

  return renderResult;
};

export default ResultBody;
