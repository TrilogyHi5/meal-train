import React from 'react';
import axios from 'axios';

async function GetIngredients () {
    
    // Retrieve all the ingredients.

    const options = {
        'method': 'GET',
        // 'url': `https://bespoke-diet-generator.p.rapidapi.com/ingredients`,
        'headers': {
            'x-rapidapi-host': 'bespoke-diet-generator.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_API_KEY
        }
    };

    const response = await axios.request(options);
    const ingredientsList = response.data;
    console.log(ingredientsList);

    return ingredientsList;

};

export default GetIngredients;