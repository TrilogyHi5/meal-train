import React from 'react';
import axios from 'axios';

async function SetNewDiet(userId, query) {

    // Create a new diet for this user. This will overwrite any existing diet.

    const options = {
        'method': 'PUT',
        // 'url': `https://bespoke-diet-generator.p.rapidapi.com/user/${userId}/diet`,
        'headers': {
            'content-type': 'application/json',
            'x-rapidapi-host': 'bespoke-diet-generator.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_API_KEY
        },
        'data': query // {dietType, weightGoal, dietDuration}
    };

    const response = await axios.request(options);    
    const userInfo = response.data; //verify update occurred in mongo
    console.log(userInfo);
    
    return userInfo;
};

export default SetNewDiet;