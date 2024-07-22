import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from './Question';
import axios from 'axios';
import './question.css';

const questions = [
    { question: 'What is your full name?', questionType: 'text', id: 'fullnameOfUser' },
    { question: 'What is your age?', questionType: 'text', id: 'ageOfUser' },
    { question: 'What is your sex?', questionType: 'options1', options: ['Male', 'Female', 'Other'], id: 'genderOfUser' },
    { question: 'What is your phone number?', questionType: 'text', id: 'phNoOfUser' },
    { question: 'Your current medications?', questionType: 'text', id: 'CurrentMedications' },
    { question: 'Do you have any allergies? If so, please write them down?', questionType: 'text', id: 'anyAllergies' },
    { question: 'Your past medications?', questionType: 'text', id: 'pastMedications' },
    { question: 'Your Blood Group?', questionType: 'text', id: 'BloodGroupOfUser' },
    { question: 'Your recent test details?', questionType: 'text', id: 'recentTestDetails' },
    { question: 'What is your food preference?', questionType: 'text', id: 'FoodPreOfUser' },
    { question: 'What is your address?', questionType: 'text', id: 'addressOfUser' }
];

const Form = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [answers, setAnswers] = useState({});
    const navigate = useNavigate();

    const handleNextQuestion = (answer, id) => {
        setAnswers(prevAnswers => ({ ...prevAnswers, [id]: answer }));
        setCurrentPage(currentPage + 1);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8000/submit_user_details/', answers);
            if (response.status === 201) {
                alert('Details form submitted successfully👍');
                navigate('/');
            } else {
                alert('Failed to submit your details.😶‍🌫️');
            }
        } catch (error) {
            console.error('Error submitting user details:', error);
            alert('An error occurred while submitting the user details.', error);
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        handleSubmit(); // Call your handleSubmit function
    };

    return (
        <div className="Form">
            {currentPage < questions.length ? (
                <form onSubmit={handleFormSubmit}> {/* Attach handleFormSubmit to form submission */}
                    <Question
                        question={questions[currentPage].question}
                        questionType={questions[currentPage].questionType}
                        options={questions[currentPage].options}
                        onNextQuestion={(answer) => handleNextQuestion(answer, questions[currentPage].id)}
                        answers={answers}
                        currentPage={currentPage}
                    />
                </form>
            ) : (
                <button onClick={handleSubmit}>Submit?</button>
            )}
        </div>
    );
};

export default Form;
