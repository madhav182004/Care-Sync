import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from './Question';
import axios from 'axios';
import './question.css';

const questions = [
    { question: 'What is your full name?', questionType: 'text' },
    { question: 'What is your phone number?', questionType: 'text' },
    { question: 'What is your sex?', questionType: 'options1', options: ['Male', 'Female', 'Other'] },
    { question: 'What is your age?', questionType: 'text' },
    { question: 'Your Blood Group?', questionType: 'text' },
    { question: 'Do you have any allergies? If so, please write them down?', questionType: 'text' },
    { question: 'Your current medications?', questionType: 'text' },
    { question: 'Your past medications?', questionType: 'text' },
    { question: 'Your recent test details?', questionType: 'text' },
    { question: 'What is your food preference?', questionType: 'text' },
    { question: 'What is your address?', questionType: 'text' }
];

const Form = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [answers, setAnswers] = useState([]);
    const navigate = useNavigate();

    const handleNextQuestion = (answer) => {
        setAnswers([...answers, answer]);
        setCurrentPage(currentPage + 1);
    };

    const handleSubmit = async () => {
        navigate('/')
        alert('Form Submitted Successfully');
        // const formData = {
        //     fullname: answers[0],
        //     age: answers[3],
        //     gender: answers[2],
        //     phoneNumber: answers[1],
        //     currentMedications: answers[6],
        //     allergies: answers[6],
        //     pastMedicalCondition: answers[7],
        //     bloodType: answers[4],
        //     recentTestDetails: answers[8],
        //     foodType: answers[9],
        //     address: answers[10]
        // };

        // try {
        //     const response = await axios.post('http://127.0.0.1:8000/submit_user_details/', formData, {
        //         headers: {
        //             'Content-Type': 'application/json',
        //         }
        //     });

        //     if (response.status === 201) {
        //         console.log('User details submitted successfully');
        //         navigate('/');
        //         alert('Form submitted successfully!')
        //     } else {
        //         console.error('Failed to submit user details');
        //     }
        // } catch (error) {
        //     console.error('Error:', error);
        // }
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
                        onNextQuestion={handleNextQuestion}
                        answers={answers}
                        currentPage={currentPage}
                    />
                    {/* Submit button to trigger form submission */}
                </form>
            ) : (
                <button  onClick={handleSubmit}>Submit?</button>
            )}
        </div>
    );
};

export default Form;
