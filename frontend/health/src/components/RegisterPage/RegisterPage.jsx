import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import axios from 'axios';

export const RegisterPage = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const { username, email, password } = formData;
        try {
            const response = await axios.post('http://localhost:8000/register/', {
                username,
                email,
                password 
            });

            if (response.status === 201) {
                
                navigate('/')
                alert("Registration successful!");
                
            }
        } catch (error) {
            if (error.response) {
                console.error("Error response data:", error.response.data);
                alert(`Registration failed: ${JSON.stringify(error.response.data)}`);
            } else {
                console.error("Error message:", error.message);
                alert("Registration failed. Please try again.");
            }
        }
    };


    return (
        <div className='mainpage'>
            <div className='wrapper'>
                <form onSubmit={handleOnSubmit}>
                    <h1>Register</h1>
                    <div className='input-box'>
                        <input 
                            type="text" 
                            placeholder='Username' 
                            required 
                            name='username' 
                            value={formData.username}
                            onChange={handleInputChange}
                        />
                        <FaUser className='icon'/>
                    </div>
                    <div className='input-box'>
                        <input 
                            type="email" 
                            placeholder='E-mail' 
                            required 
                            name='email' 
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <MdEmail className='icon'/>
                    </div>
                    <div className='input-box'>
                        <input 
                            type="password" 
                            placeholder='Password' 
                            required 
                            name='password' 
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        <FaLock className='icon'/>
                    </div>
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        </div>
    );
};
