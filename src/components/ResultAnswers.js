import React from 'react';
import ResultAnswerOption from './ResultAnswerOption';

const ResultAnswers = ({options, markAsCorrect, markAsIncorrect }) => {
    const renderedAnswers = options.map((option) => <ResultAnswerOption key={option.id} option={option} markAsCorrect={markAsCorrect} markAsIncorrect={markAsIncorrect} />)

    return (
        <ol style={{listStyleType: 'lower-alpha'}}>
            {renderedAnswers}
        </ol>
    );
}

export default ResultAnswers;