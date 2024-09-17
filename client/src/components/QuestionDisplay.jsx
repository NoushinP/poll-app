import "./QuestionDisplay.css";
import { useState, useEffect } from 'react';

const QuestionDisplay = ({ question, onChoiceClick }) => {
    const [clickedChoices, setClickedChoices] = useState({});

    useEffect(() => {
        setClickedChoices({});
    }, [question]);

    const handleChoiceClick = (choiceId, choiceName) => {
        setClickedChoices((prevClickedChoices) => ({
            ...prevClickedChoices,
            [choiceId]: true
        }));

        if (onChoiceClick) {
            onChoiceClick(choiceName);
        }
    };

    const questionName = question.name;

    const choiceButtons = question.choices.map((choice, index) => {
        const isClicked = clickedChoices[choice.id] || false;

        return (
            <div key={index}>
                <button onClick={() => handleChoiceClick(choice.id, choice.name)}>
                    {choice.name}
                </button>
                {isClicked && (
                    <p className="choice-response">{choice.responses}</p>
                )}
            </div>
        );
    });

    return (
        <div>
            <h2 className="questionName">{questionName}</h2>
            {choiceButtons}
        </div>
    );
};

export default QuestionDisplay;