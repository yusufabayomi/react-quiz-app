import React, { useState } from 'react';
import QuizBody from './components/QuizBody';
import QuizFooter from './components/QuizFooter';
import QuizHeader from './components/QuizHeader';
import questions from './data';

const App = () => {
    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

    return (
        <div className='container mt-5'>
        <div className='d-flex justify-content-center row'>
            <div className='col-md-10 col-lg-10'>
            <div className='border'>
                <QuizHeader />
                <QuizBody currentQuestion={currentQuestion} />
                <QuizFooter />
            </div>
            </div>
        </div>
        </div>
    );
};

export default App;
