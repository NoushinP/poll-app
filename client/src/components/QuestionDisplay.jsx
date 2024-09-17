import "./QuestionDisplay.css"
import { useState, useEffect } from 'react';

const QuestionDisplay = ({ question }) => {
    const [clickedChoices, setClickedChoices] = useState({})

    const questionName = question.name
    const choiceButtons = question.choices.map((choice, index) => {
        const isClicked = clickedChoices[choice.id] || false

        const handleChoiceClick = () => {
            setClickedChoices((prevClickedChoices) => ({ ...prevClickedChoices, [choice.id]: true }))
        }

        return (
            <div key={index}>
                <button onClick={handleChoiceClick}>
                    {choice.name}
                </button>
                {isClicked && (
                    <p className="choice-response">{choice.responses}</p>
                )}
            </div>
        )
    })

    useEffect(() => {
        setClickedChoices({})
    }, [question])

    return (
        <div>
            <h2 className="questionName">{questionName}</h2>
            {choiceButtons}
        </div>
    )
}

export default QuestionDisplay