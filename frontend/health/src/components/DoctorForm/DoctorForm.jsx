import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DocQuestion from './DocQuestion';
import './docquestion.css';
import Main from '../LandingPage/Main';
import { Navigate } from 'react-router-dom';

const questions = [
    { question: 'What is your sex?', questionType: 'options1', options: ['Male', 'Female', 'Other'] },
    { question: 'Enter your Date of Birth', questionType: 'date' },
    { question: 'Enter your Adhaar Card Number', questionType: 'number' },
    { question: 'Enter Medical Licence Number', questionType: 'text' },
    { question: 'Specialization?', questionType: 'text' },
    { question: 'Years Of Experience', questionType: 'number' },
];

const DoctorForm = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [answers, setAnswers] = useState([]);
    const navigate = useNavigate();

    const handleNextQuestion = (answer) => {
        setAnswers([...answers, answer]);
        setCurrentPage(currentPage + 1);
    };

    const handleSubmit = () => {
        console.log("All answers: ", answers);
        navigate('/');
    };

    
    return (
        <div className="Form">
            {currentPage < questions.length ? (
                <DocQuestion
                    question={questions[currentPage].question}
                    questionType={questions[currentPage].questionType}
                    options={questions[currentPage].options}
                    onNextQuestion={handleNextQuestion}
                    answers={answers}
                    currentPage={currentPage}
                />

            ) : (
                <>
                {console.log(handleSubmit())}
                <p>page</p>
                </>
            )}
        </div>
    );
}

export default DoctorForm;