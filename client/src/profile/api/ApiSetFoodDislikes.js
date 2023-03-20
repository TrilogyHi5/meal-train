import React from 'react';
import axios from 'axios';

async function SetFoodDislikes (userId, query) {

    // Set the ingredients that the user DOES NOT want in this diet. This request will overwrite any existing preference.
    // If a diet already exists when this call is performed, it's better to regenerate the diet in order to take into account the new changes.

    const options = {
        'method': 'PUT',
        // 'url': `https://bespoke-diet-generator.p.rapidapi.com/user/${userId}/ingredients/excluded`,
        'headers': {
            'content-type': 'application/json',
            'x-rapidapi-host': 'bespoke-diet-generator.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_API_KEY
        },
        'data': query // {ingredientIds: [ids]}
    };

    const response = await axios.request(options);    
    const userInfo = response.data; // verify update occurred in mongo
    console.log(userInfo);
    
    return userInfo;
};

export default SetFoodDislikes;