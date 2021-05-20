import React from 'react';

const ResultHeader = ({correctAnswers}) => {
    return (
        <div className='question bg-white p-3 border-bottom'>
            <div className='d-flex flex-row justify-content-between align-items-center mcq'>
            <h4>Your Result</h4>
            <span>You have scored {correctAnswers} out of 10</span>
            </div>
        </div>
    )
}

export default ResultHeader;