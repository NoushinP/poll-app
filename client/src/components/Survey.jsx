const Survey = ({info})=> {
    console.log("hello", info)
    const choiceButtons = poll.choices.map(choice => {
        return <button>{choice.name}</button>
     })
     console.log(choiceButtons)
    return (
        <div>
            Hi
        </div>
    )
}

export default Survey