import { useQuery } from '@apollo/client';
import { useState } from 'react';
// import "./Welcome.css"
import { QUERY_QUESTION } from '../utils/queries'
// import QuestionDisplay from './QuestionDisplay'
import Survey from './Survey'


const Welcome = ()=> {
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(2)
    const { loading, data } = useQuery(QUERY_QUESTION);
      
        const questions= data?.questions|| [];
        // console.log(loading, questions)


    return(
        <div className="question"> 
            <h1>Website</h1>
            <h2>😱Discover what people really think!😱</h2>
            <Survey info={questions[currentQuestionIndex]} />
            

        </div>
    )
}

export default Welcome