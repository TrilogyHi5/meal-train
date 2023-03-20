import React from 'react';
import axios from 'axios';

async function SetFoodSwap (userId, dayIndex, mealType, ogIngredient, newIngredient) {  

    // Replace an ingredient in an existing diet with another ingredient. 
    // An existing ingredient can be replaced only by a limited set of ingredients. 
    // To retrieve the list of possible replacements first make the call to 
    // GET /user/{userId}/diet/{dayIndex}/{mealType}/{ingredientId}/replace endpoint.

    const options = {
        'method': 'PUT',
        // 'url': `https://bespoke-diet-generator.p.rapidapi.com/user/${userId}/diet/${dayIndex}/${mealType}/${ogIngredient}/replace`,
        'headers': {
            'x-rapidapi-host': 'bespoke-diet-generator.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_API_KEY
        },
        data: `{"ingredientId":${newIngredient}}`
    };

    const response = await axios.request(options);
    const userInfo = response.data;
    console.log(userInfo);

    return userInfo;
};

export default SetFoodSwap;