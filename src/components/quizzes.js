import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

function Quizes() {
    const [quizzes, setQuizzes] = useState([]);
    const [userId, setUserId] = useState("");

    const fetchQuizzes = async () => {
        const { data } = await axios.get('https://pure-caverns-82881.herokuapp.com/api/v54/quizzes',
        {headers:{
                    "X-Access-Token": process.env.REACT_APP_ACCESS_TOKEN,
                }
        });
        const quizzes = data;
        setQuizzes(quizzes);
        console.log(quizzes);
    };

    useEffect(() => {
        setUserId(localStorage.getItem("user-info"))
        fetchQuizzes();
    }, []);


   
    return (
        <div className="mainQuizes">
                <div className="main-name">
                    <h1 className="titlee">Please, choose a quiz</h1>
                </div>
                    
                <div className="quizes-here">
                    {quizzes.map(quiz => (
                        <Link to={`/quizzes/${quiz.id}`}>
                        <div className='quiz' key={quiz.id} >
                            <h2 className="titlee">Quiz</h2>
                            <p className="title">Title: {quiz.title}</p>
                            <p className="title">Question count: {quiz.questions_count}</p>
                            
                            <input type="button" className="start-quiz" value="Start quiz" />
                        </div>
                         </Link>
                         
                    ))}
                </div>
                
            </div>
        )
    
}

export default Quizes;
