import React from 'react';
import { useState } from 'react';
import './connect.css';
import axios from 'axios';


export const Connect = () => {
    const [message, setMessage] = useState('');
    


    const handleSubmitDoctorRequest = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the form input values
        const state = document.getElementById('state').value;
        const city = document.getElementById('city').value;
        const pincode = document.getElementById('pincode').value;
        const specialization = document.getElementById('specialization').value;
        const villagename = document.getElementById('villagename').value;

        const requestData = {
            state,
            city,
            pincode,
            specialization,
            villagename,
        };

        try {
            const response = await axios.post('http://localhost:8000/user_request_for_doctor/', requestData);

            setMessage(response.data.message);
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error encountered');
        }
    };


    return (
        <div className='mainpage'>
            <div className='wrapper'>
                <form onSubmit={handleSubmitDoctorRequest}>
                    <h1>Village Connect</h1>
                    <div className='input-box'>
                        <input id="villagename" type="text" placeholder='Village Name' required />
                    </div>
                    <div className='input-box'>
                        <input id="state" type="text" placeholder='State' required />
                    </div>
                    <div className='input-box'>
                        <input id="city" type="text" placeholder='Nearby City' required />
                    </div>
                    <div className='input-box'>
                        <input id="pincode" type="number" placeholder='Pincode' required />
                    </div>
                    <div className='input-box'>
                        <input id="specialization" type="text" placeholder='Which specialized Doctor do you need?' required />
                    </div>
                    <button type='submit'>SEND</button>
                </form>
                <h1>{message}</h1>
            </div>
        </div>
    );
};