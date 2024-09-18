import "./QuestionDisplay.css"
import { useState, useEffect, useCallback } from 'react';

const QuestionDisplay = ({ question, onResetShowResponses }) => {
    const [showResponses, setShowResponses] = useState(false)
    const [choices, setChoices] = useState(question.choices)

    const questionName = question.name

    const handleChoiceClick = useCallback((choiceId) => {
        const updatedChoices = choices.map((choice) => {
            if (choice._id === choiceId) {
                const updatedResponse = (choice.responses || 0) + 1
                localStorage.setItem(`choice-${choiceId}`, updatedResponse)
                return { ...choice, responses: updatedResponse }
            }
            return choice
        })
        setChoices(updatedChoices)
        setShowResponses(true)
    }, [choices])

    useEffect(() => {
        const loadedChoices = question.choices.map((choice) => {
            const storedResponse = localStorage.getItem(`choice-${choice._id}`)
            return storedResponse ? { ...choice, responses: parseInt(storedResponse) } : choice
        })
        setChoices(loadedChoices)
    }, [question])

    const resetShowResponses = useCallback(() => {
        setShowResponses(false);
      }, [])

    useEffect(() => {
        if (onResetShowResponses) {
            onResetShowResponses(resetShowResponses);
        }
    }, [onResetShowResponses, resetShowResponses]);

    return (
        <div>
            <h2 className="questionName">{questionName}</h2>
            {choices.map((choice) => (
                <div key={choice._id}>
                    <button onClick={() => handleChoiceClick(choice._id)}>
                        {choice.name}
                    </button>
                    {showResponses && (
                        <p className="choice-response">Responses: {choice.responses}</p>
                    )}
                </div>
            ))}
        </div>
    )
}

export default QuestionDisplay