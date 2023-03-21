import React from 'react';
import axios from 'axios';

async function GetFoodDislikes (userId) { //apiId

    // Retrieve the list of all ingredients that will be excluded from user's diets.

    const options = {
        'method': 'GET',
        // 'url': `https://bespoke-diet-generator.p.rapidapi.com/user/${userId}/ingredients/excluded`,
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

export default GetFoodDislikes;