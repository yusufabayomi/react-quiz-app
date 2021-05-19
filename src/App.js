import React, { useState, useEffect } from 'react';
import QuizBody from './components/QuizBody';
import QuizFooter from './components/QuizFooter';
import QuizHeader from './components/QuizHeader';
import questions from './data';

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex]);

  useEffect(() => {
    setCurrentQuestion(questions[currentQuestionIndex]);
  }, [currentQuestionIndex]);

  const onNextClicked = () => setCurrentQuestionIndex(currentQuestionIndex + 1);

  const onPrevClicked = () => setCurrentQuestionIndex(currentQuestionIndex - 1);

  const disableNextButton = () => currentQuestionIndex === (questions.length - 1);

  const disablePrevButton = () => currentQuestionIndex === 0;

  return (
    <div className='container mt-5'>
      <div className='d-flex justify-content-center row'>
        <div className='col-md-10 col-lg-10'>
          <div className='border'>
            <QuizHeader currentQuestionIndex={currentQuestionIndex} totalQuestions={questions.length} />
            <QuizBody currentQuestion={currentQuestion} />
            <QuizFooter onNextClicked={onNextClicked} onPrevClicked={onPrevClicked} disableNextButton={disableNextButton} disablePrevButton={disablePrevButton} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
