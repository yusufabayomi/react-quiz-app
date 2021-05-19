import React from 'react';

const QuizHeader = () => {
    return (
        <div className='question bg-white p-3 border-bottom'>
            <div className='d-flex flex-row justify-content-between align-items-center mcq'>
            <h4>MCQ Quiz</h4>
            <span>(5 of 20)</span>
            </div>
        </div>
    )
}

export default QuizHeader;