import React from 'react';
import axios from 'axios';

export const GetFoodSwap = async (userId, dayIndex, mealType, ingredient) => {  

    // Retrieve the list of ingredients that can replace another ingredient in an existing diet.

    const options = {
        'method': 'GET',
        // 'url': `https://bespoke-diet-generator.p.rapidapi.com/user/${userId}/diet/${dayIndex}/${mealType}/${ingredient}/replace`,
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