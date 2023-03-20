import React from 'react';
import axios from 'axios';

async function GetDietDay (userId, dayIndex) { 
    
    // Get the current diet plan for the specified user for a specific day.
    // dayIndex = integer 1-7

    const options = {
        'method': 'GET',
        // 'url': `https://bespoke-diet-generator.p.rapidapi.com/user/${userId}/diet/${dayIndex}`,
        'headers': {
            'x-rapidapi-host': 'bespoke-diet-generator.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_API_KEY
        }
    };

    const response = await axios.request(options);
    const userInfo = response.data;
    console.log(userInfo);

    return userInfo;
};

export default GetDietDay;