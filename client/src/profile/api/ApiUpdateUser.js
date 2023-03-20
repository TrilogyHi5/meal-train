import React from 'react';
import axios from 'axios';

export const UpdateCurrentUser = async(userId, query) => {

    // Update the user's information that changes over time such as weight and activity level.

    const options = {
        'method': 'PUT',
        // 'url': `https://bespoke-diet-generator.p.rapidapi.com/user/${userId}`,
        'headers': {
            'content-type': 'application/json',
            'x-rapidapi-host': 'bespoke-diet-generator.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_API_KEY
        },
        'data': query // {weight, activityLevel}
    };

    const response = await axios.request(options);    
    const userInfo = response.data; //verify update occurred in mongo
    console.log(userInfo);
    
    return userInfo;
};