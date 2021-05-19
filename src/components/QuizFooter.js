import React from 'react';

const QuizFooter = () => {
  return (
    <div className='d-flex flex-row justify-content-between align-items-center p-3 bg-white'>
      <button className='btn btn-primary d-flex align-items-center btn-danger' type='button'>
        <i className='fa fa-angle-left mt-1 mr-1'></i>&nbsp;previous
      </button>
      <button className='btn btn-primary border-success align-items-center btn-success' type='button'>
        Next<i className='fa fa-angle-right ml-2'></i>
      </button>
    </div>
  );
};

export default QuizFooter;
