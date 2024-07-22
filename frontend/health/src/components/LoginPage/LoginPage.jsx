import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import { FaUser, FaLock } from "react-icons/fa";
import axios from 'axios';

export const LoginPage = () => {
    const [formData, setFormData] = useState({
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
        const { email, password } = formData;

        try {
            const response = await axios.post('http://localhost:8000/api/auth/login/', {
                email,
                password
            });

            if (response.status === 200) {
                navigate('/'); // Navigate to the home page or any other page
                alert("Login successful!");
            }
        } catch (error) {
            console.error("There was an error logging in!", error);
            alert("Login failed. Please try again.");
        }
    };

    return (
        <div className='mainpage'>
            <div className='wrapper'>
                <form onSubmit={handleOnSubmit}>
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input 
                            type="email" 
                            placeholder='E-mail' 
                            required 
                            name='email' 
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <FaUser className='icon'/>
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
                    <div className='remember-forget'>
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot Password</a>
                    </div>
                    <button type='submit'>Login</button>
                    <div className='register-link'>
                        <p>Don't have an account? <a href="/register">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};
