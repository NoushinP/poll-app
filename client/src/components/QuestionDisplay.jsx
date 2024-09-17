import "./QuestionDisplay.css"
const QuestionDisplay = ({ question, onChoiceClick}) => {

    const questionName = question.name
    const choiceButtons = question.choices.map((choice, index) => {
        return <button key={index} onClick={onChoiceClick}>{choice.name}</button>
    })
    console.log(choiceButtons)
    return (
        <div>
            <h2 className="questionName">{questionName}</h2>
            {choiceButtons}
        </div>
    )
}

export default QuestionDisplay