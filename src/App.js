import React, { useState, useEffect } from 'react';
import QuizBody from './components/QuizBody';
import QuizFooter from './components/QuizFooter';
import QuizHeader from './components/QuizHeader';
import questions from './data';

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex]);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    setCurrentQuestion(questions[currentQuestionIndex]);
  }, [currentQuestionIndex]);

  const onNextClicked = () => setCurrentQuestionIndex(currentQuestionIndex + 1);

  const onPrevClicked = () => setCurrentQuestionIndex(currentQuestionIndex - 1);

  // enable the next button only when the question has been answered
  const disableNextButton = () => !userAnswers.hasOwnProperty(currentQuestionIndex);

  const disablePrevButton = () => currentQuestionIndex === 0;

  const showSubmitButton = () => currentQuestionIndex === (questions.length - 1);

  const checkedAnswer = (id) => userAnswers[currentQuestionIndex] && userAnswers[currentQuestionIndex] === parseInt(id);

  const onAnswerQuestion = (answerId) => {
    let newState = [...userAnswers];
    newState[currentQuestionIndex] = parseInt(answerId);
    setUserAnswers(newState);
  }

  return (
    <div className='container mt-5'>
      <div className='d-flex justify-content-center row'>
        <div className='col-md-10 col-lg-10'>
          <div className='border'>
            <QuizHeader 
              currentQuestionIndex={currentQuestionIndex} 
              totalQuestions={questions.length} 
            />
            <QuizBody 
              currentQuestion={currentQuestion} 
              onAnswerQuestion={onAnswerQuestion} 
              checkedAnswer={checkedAnswer}
            />
            <QuizFooter 
              onNextClicked={onNextClicked} 
              onPrevClicked={onPrevClicked} 
              disableNextButton={disableNextButton} 
              disablePrevButton={disablePrevButton}
              showSubmitButton={showSubmitButton} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
