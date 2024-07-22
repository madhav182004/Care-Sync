import React, { useState } from 'react';
import './question.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import boy from "../../assets/images/boy.svg";
import man from "../../assets/images/man.svg";
import woman from "../../assets/images/woman.svg";
import girl from "../../assets/images/girl.svg";
import { useNavigate } from "react-router-dom";

const Question = ({ question, questionType, options, onNextQuestion, answers, currentPage }) => {
    const [answer, setAnswer] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleNextQuestion = () => {
        if (questionType === 'text' || questionType === 'date' || questionType === 'number') {
            if (!answer) {
                setErrorMessage("Please provide an answer.");
                return;
            }
            setErrorMessage(null);
            onNextQuestion(answer);
            setAnswer('');
        } else if (questionType === 'file') {
            if (!answer) {
                setErrorMessage("Please upload a file.");
                return;
            }
            setErrorMessage(null);
            onNextQuestion(answer);
            setAnswer('');
        } else {
            if (selectedOption == null) {
                setErrorMessage("Please select your answer.");
                return;
            }
            setErrorMessage(null);
            onNextQuestion(selectedOption);
            setSelectedOption(null);
        }
    };

    const clickOption = (option) => {
        setSelectedOption(option);
        setAnswer(option);
    };

    const clickSubmit = () => {
        handleNextQuestion();
        navigate('/mainpage');
    };

    return (
        <div className="question-page">
            <h1>{question}</h1>
            {questionType === 'text' && (
                <TextField
                    id="standard-basic"
                    variant="standard"
                    label="Your Answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    style={{ minWidth: '500px', color: 'black', colorScheme: 'black' }}
                    autoComplete='off'
                    required
                />
            )}
            {questionType === 'number' && (
                <TextField
                    id="standard-basic"
                    variant="standard"
                    label="Your Answer"
                    type="number"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    style={{ minWidth: '500px', color: 'black', colorScheme: 'black' }}
                    autoComplete='off'
                    required
                />
            )}
            {questionType === 'options1' && (
                <div className="options-container">
                    <div
                        className={`custom-link option ${selectedOption === options[0] ? 'selected' : ''}`}
                        onClick={() => clickOption(options[0])}
                    >
                        <img id='man' src={man} alt="man" />
                        {options[0]}
                    </div>
                    <div
                        className={`custom-link option ${selectedOption === options[1] ? 'selected' : ''}`}
                        onClick={() => clickOption(options[1])}
                    >
                        <img id='woman' src={woman} alt="woman" />
                        {options[1]}
                    </div>
                    <div className={`other ${selectedOption === 'other' ? 'selected' : ''}`} onClick={() => clickOption("other")}>Other</div>
                </div>
            )}
            {questionType === 'options2' && (
                <div className="options-container">
                    <div
                        className={`custom-link option ${selectedOption === options[0] ? 'selected' : ''}`}
                        onClick={() => clickOption(options[0])}
                    >
                        <img id={answers[0] === "Male" ? "man" : "woman"} src={answers[0] === "Male" ? man : woman} alt="option" />
                        {options[0]}
                    </div>
                    <div
                        className={`custom-link option ${selectedOption === options[1] ? 'selected' : ''}`}
                        onClick={() => clickOption(options[1])}
                    >
                        <img id={answers[0] === "Male" ? "boy" : "girl"} src={answers[0] === "Male" ? boy : girl} alt="option" />
                        {options[1]}
                    </div>
                </div>
            )}
            {questionType === 'file' && (
                <input
                    type="file"
                    onChange={(e) => setAnswer(e.target.value)}
                    style={{ minWidth: '500px', color: 'black', colorScheme: 'black' }}
                />
            )}
            {questionType === 'date' && (
                <input
                    type="date"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    style={{ minWidth: '500px', color: 'black', colorScheme: 'black' }}
                />
            )}
            <div className='questions-bottom'>
                {errorMessage && (
                    <div className="pwd_err ui negative mini message" style={{ marginBottom: "1.5rem" }}>
                        {errorMessage}
                    </div>
                )}
                <Button variant="contained" style={{ backgroundColor: "black" }} onClick={handleNextQuestion}>Next</Button>
            </div>
        </div>
    );
};

export default Question;
