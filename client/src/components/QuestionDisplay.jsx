function QuestionDisplay({poll}) {


// const QuestionDisplay = (props){ 
    console.log("Question:", poll)
    const choiceButtons = poll.choices.map(choice => {
       return <button>{choice.name}</button>
    })
    console.log(choiceButtons)
    return (
        <div>
            hi
            {/* {poll.name} */}
            {choiceButtons} 
            
        </div>
       
        
        
    )
}

export default QuestionDisplay