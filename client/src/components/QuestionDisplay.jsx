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
            <div className="choice-cointainer" key={index}>
                <button className="choice-button" onClick={handleChoiceClick}>
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
            <div className="questionContainer">
            <h2 className="questionName">{questionName}</h2>
            </div>
            {choiceButtons}
        </div>
    )
}

export default QuestionDisplay