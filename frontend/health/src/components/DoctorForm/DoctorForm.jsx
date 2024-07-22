import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DocQuestion from './DocQuestion';
import './docquestion.css';
import axios from 'axios';

const questions = [
    { question: 'What is your full name?', questionType: 'text', id:'fullnameOfDoctor' },
    { question: 'Enter your Date your Age', questionType: 'number', id:'ageOfDoctor' },
    { question: 'What is your sex?', questionType: 'options1', options: ['Male', 'Female', 'Other'], id:'genderOfDoctor' },
    { question: 'Your Blood Group?', questionType: 'text', id:'bloodGroupOfDoctor' },
    { question: 'Enter your Phone Number', questionType: 'number', id:'phNoOfDoctor' },
    { question: 'Enter your Adhaar Card Number', questionType: 'number', id:'AdharNoOfDoctor' },
    { question: 'Enter Medical Licence Number', questionType: 'text', id:'MedicalNumber' },
    { question: 'Specialization?', questionType: 'text', id:'specialization' },
    { question: 'What is your food preference?', questionType: 'text', id:'foodPreOfDoctor' },
    { question: 'Years Of Experience', questionType: 'number', id:'yoe'},
];

const DoctorForm = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [answers, setAnswers] = useState({});
    const navigate = useNavigate();

    const handleNextQuestion = (answer, id) => {
        setAnswers(prevAnswers => ({ ...prevAnswers, [id]: answer }));
        setCurrentPage(currentPage + 1);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8000/submit_doctor_details/', answers);

            if (response.status === 201) {
                // Navigate to the home page if the API call is successful
                alert('Details form submitted successfully👍')
                navigate('/');
            } else {
                alert('Failed to submit your details.😶‍🌫️');
            }
        } catch (error) {
            console.error('Error submitting doctor details:', error);
            alert('An error occurred while submitting the doctor details.', error);
        }
    };

    return (
        <div className="Form">
            {currentPage < questions.length ? (
                <DocQuestion
                    question={questions[currentPage].question}
                    questionType={questions[currentPage].questionType}
                    options={questions[currentPage].options}
                    onNextQuestion={(answer) => handleNextQuestion(answer, questions[currentPage].id)}
                    answers={answers}
                    currentPage={currentPage}
                />
            ) : (
                <>
                    <p>All questions completed!</p>
                    <button onClick={handleSubmit}>Submit</button>
                </>
            )}
        </div>
    );
};

export default DoctorForm;
