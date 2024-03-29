import React from 'react';
import axios from 'axios';

async function GetUser (userId) {
    
    // Retrieve the information of the user with the matching user ID
    // returns id, height, weight, dateOfBirth, sex, activityLevel

    const options = {
        'method': 'GET',
        // 'url': `https://bespoke-diet-generator.p.rapidapi.com/user/$userId`,
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

export default GetUser;