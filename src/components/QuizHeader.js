import React from 'react';

const QuizHeader = ({currentQuestionIndex, totalQuestions}) => {
    return (
        <div className='question bg-white p-3 border-bottom'>
            <div className='d-flex flex-row justify-content-between align-items-center mcq'>
            <h4>MCQ Quiz</h4>
            <span>({`${currentQuestionIndex + 1} of ${totalQuestions}`})</span>
            </div>
        </div>
    )
}

export default QuizHeader;