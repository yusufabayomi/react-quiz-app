import React, { useState, useEffect } from 'react';
import QuizBody from './components/QuizBody';
import QuizFooter from './components/QuizFooter';
import QuizHeader from './components/QuizHeader';
import ResultBody from './components/ResultBody';
import ResultHeader from './components/ResultHeader';
import {questions, answers} from './data';

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(null);

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

  const onSubmitQuiz = () => {
    setShowResult(true);
    setCorrectAnswers(answers.filter((answer, index) => answer === userAnswers[index]).length)
  };

  const markAsCorrect = (id) => answers.includes(id) ? 'text-success' : '';

  const markAsIncorrect = (id) => !answers.includes(id) && userAnswers.includes(id) ? 'text-danger' : '';

  const renderQuestions = (
    <React.Fragment>
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
          onSubmitQuiz={onSubmitQuiz} 
        />
    </React.Fragment>
   
    
  );

  const renderResult = (
    <React.Fragment>
      <ResultHeader
        correctAnswers={correctAnswers} />
      <ResultBody 
        questions={questions} 
        markAsCorrect={markAsCorrect} 
        markAsIncorrect={markAsIncorrect} 
      />
    </React.Fragment>
  )

  return (
    <div className='container mt-5'>
      <div className='d-flex justify-content-center row'>
        <div className='col-md-10 col-lg-10'>
          <div className='border'>
            { showResult ? renderResult : renderQuestions}
          </div>
        </div>
      </div>
    </div>
  )
};

export default App;
