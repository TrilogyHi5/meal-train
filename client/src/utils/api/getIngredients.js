import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function getIngredients() {

    const baseUrl = {
        'url': 'https://bespoke-diet-generator.p.rapidapi.com/ingredients',
        'headers': {
            'accept-language': 'en',
            'content-type':'application/octet-stream',
            'x-rapidapi-host':'bespoke-diet-generator.p.rapidapi.com',
            'x-rapidapi-key': process.env.GET_RAPIDAPI_KEY 
        }
    };
    
    const [ingredients, setIngredients] = useState(null);

    useEffect(() => {
        axios.get(`${baseUrl}/1`)
            .then((response) => {
               setIngredients(response.data);
            });
    }, []);

    if (!ingredients) return 'No ingredients.'

    const style = { margin: '0 auto', width: '200px', textAlign: 'center' };

    return (
        <div style={style}>
            WE DID IT!
            {ingredients.length}
            {/* <h1>{responseData.title}</h1>

            <button onClick={(e) => fetchData(e)} type='button'>Click Me For Data</button>

            {responseData.dates && responseData.dates.map(date => {
                return <p>{date}</p>
            })} */}
        </div>
    )
};