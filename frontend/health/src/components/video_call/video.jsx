import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './video.css';

const Homepage = () => {
    const [value, setValue] = useState('');
    const navigate = useNavigate();

    const handleClick = useCallback(async () => {
       try {
         // Make the API call to validate the roomID and send the email
          const roomID=value
          const response = await axios.post('http://localhost:8000/send_email_to_nearby_doctors_for_help/', {roomID});

          // Check the response status
           if (response.status === 202) {
              // Navigate to the room if the API call is successful
               navigate(`/video/room/${value}`);
           } else {
               alert('Failed to send email to nearby doctors.');
           }
       }catch (error) {
           console.error('Error checking room ID:', error);
           alert('An error occurred while validating the room ID.',error);
         }
      }, [navigate, value]);

    return (
        <form onSubmit={(e) => { e.preventDefault(); handleClick(); }}>
            <div className='maincontainer'>
                <div className='container'>
                    <input
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        type="text"
                        name="roomID"
                        placeholder='Enter room code'
                        className='input-field'
                    />
                    <br />
                    <button type="submit" className='join'>Join</button>
                    <a href="/" className="text-white pt-2"><button>Return Homepage</button></a>
                </div>
            </div>
        </form>
    );
};

export default Homepage;
