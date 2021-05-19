import React from 'react';
import QuizBody from './components/QuizBody';
import QuizFooter from './components/QuizFooter';
import QuizHeader from './components/QuizHeader';

const App = () => {
  return (
    <div className='container mt-5'>
      <div className='d-flex justify-content-center row'>
        <div className='col-md-10 col-lg-10'>
          <div className='border'>
            <QuizHeader />
            <QuizBody />
            <QuizFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
