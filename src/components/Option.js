import React from 'react';

const Option = ({option}) => {
    return (
        <div className='ans ml-2'>
            <label className='radio'>
            <input type='radio'  /> <span>{option}</span>
            </label>
        </div>
    )
}

export default Option;