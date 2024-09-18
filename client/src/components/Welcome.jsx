import { useQuery } from '@apollo/client';

import { useState, useEffect } from 'react';
// import "./Welcome.css"

import { QUERY_QUESTION } from '../utils/queries'
import QuestionDisplay from './QuestionDisplay'

const Welcome = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [clickCounts, setClickCounts] = useState({});
    const { loading, data } = useQuery(QUERY_QUESTION);

    useEffect(() => {
        const savedClickCounts = localStorage.getItem('clickCounts');
        if (savedClickCounts) {
            setClickCounts(JSON.parse(savedClickCounts));
        }
    }, []);

    useEffect(() => {
        if (Object.keys(clickCounts).length > 0) {
        localStorage.setItem('clickCounts', JSON.stringify(clickCounts));
        }
    }, [clickCounts]);
   



    if (loading) {
        return <div>Loading...</div>;
    }

    const questions = data?.questions || [];

    if (questions.length === 0) {
        return <div>No questions available</div>;
    }

    const handleChoiceClick = (choice) => {
        const questionId = questions[currentQuestionIndex]?.id;
        
    
        const updatedCounts = {
            ...clickCounts,
            [questionId]: {
                ...clickCounts[questionId],
                [choice]: (clickCounts[questionId]?.[choice] || 0) + 1,
            },
        };
        
        setClickCounts(updatedCounts); 
    };



    const handleNextClick = () => {
        if (currentQuestionIndex < questions.length - 1) {

            setCurrentQuestionIndex(currentQuestionIndex + 1)

        }
    }

    const resetShowResponses = (reset) => {
        reset();
    }

    return (
        <div className="container">
            <h1>Welcome to Meeptopia</h1>
            <h2>😱Discover what people really think!😱</h2>

            <QuestionDisplay 
                question={questions[currentQuestionIndex]} 

                onResetShowResponses={resetShowResponses}

            />
            {currentQuestionIndex < questions.length - 1 && (
                <button onClick={handleNextClick}>Next</button>
            )}
        </div>
    )
}

export default Welcome