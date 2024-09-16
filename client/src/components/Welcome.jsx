import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import "./Welcome.css"
const Welcome = ()=> {
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