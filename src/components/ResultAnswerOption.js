import React from 'react';

const ResultAnswerOption = ({option: {id, option}, markAsCorrect, markAsIncorrect}) => {
    return <li className={`${markAsIncorrect(id)} ${markAsCorrect(id)}`}>{option}</li>
}

export default ResultAnswerOption;