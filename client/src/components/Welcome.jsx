import { useQuery } from '@apollo/client';
import { useState } from 'react';
import "./Welcome.css"
import { QUERY_QUESTION } from '../utils/queries'

const Welcome = ()=> {
const [currentQuestion, setCurrentQuestion] = useState(0)
    const { loading, data } = useQuery(QUERY_QUESTION);
      
        const questions= data?.questions|| [];
        console.log(loading, questions)

        const questionList = questions.map(question => {
            return (
                <Welcome key={question._id} question={question} />
            )
        })


    return(
        <div className="question"> 
            <h1>Website</h1>
            <h2>😱Discover what people really think!😱</h2>

<section className="choices">
            <button className="button">
                Coke
            </button>
            <button className="button">
                Pepsi
            </button>
            <button className="button">
                Dr. Pepper
            </button>
            <button className="button">
                Other
            </button>
</section>
        </div>
    )
}

export default Welcome