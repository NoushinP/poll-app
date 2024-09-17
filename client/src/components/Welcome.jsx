import { useQuery } from '@apollo/client';
import { useState } from 'react';
// import "./Welcome.css"
import { QUERY_QUESTION } from '../utils/queries'
import QuestionDisplay from './QuestionDisplay'


const Welcome = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const { loading, data } = useQuery(QUERY_QUESTION);

    if (loading) {
        return <div>Loading...</div>;
    }

    const questions = data?.questions || [];

    const handleChoiceClick = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    }

    return (
        <div className="question">
            <h1>Website</h1>
            <h2>😱Discover what people really think!😱</h2>
            <QuestionDisplay question={questions[currentQuestionIndex]} onChoiceClick={handleChoiceClick} />
        </div>
    )
}

export default Welcome