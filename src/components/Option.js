import React from 'react';

const Option = ({id, option, onAnswerQuestion, checkedAnswer}) => {
    return (
        <div className='ans ml-2'>
            <label className='radio'>
            <input type='radio' defaultChecked={checkedAnswer(id)} name="options" value={id} onChange={(event) => onAnswerQuestion(event.target.value)}  /> <span>{option}</span>
            </label>
        </div>
    )
}

export default Option;