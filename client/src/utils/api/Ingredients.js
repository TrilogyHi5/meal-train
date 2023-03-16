import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Ingredients() {    
    
    const [foodList, setFoodList] = useState([]);

    useEffect(() => {
        const baseUrl = {
            'method': 'GET',
            'url': 'https://bespoke-diet-generator.p.rapidapi.com/ingredients',
            'headers': {
                'accept-language': 'en',
                'x-rapidapi-host':'bespoke-diet-generator.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_GET_INGREDIENTS_KEY
            }
        };

        axios.request(baseUrl)
            .then((response) => {
                setFoodList(response.data);
                //response.data.forEach((foodCategory) => {
					//console.log(`${foodCategory.name}:`);
                    
					//foodCategory.ingredients.forEach((ingredient) => {
						//console.log(` [${ingredient.id}]: ${ingredient.name}`);
					//});
				//});
            });
    }, []);

    //returns id, name, ingredients

    return (
        
        !foodList ? 'No food list.' :   
    
        <>
        <ul>
            {foodList.map((data, index) => { 
                return (
                    <>
                    <li key={index}>{data.name}</li>
                    <ul>
                    {data.ingredients.map((item, index) => {
                        return <li key={index}>{item.name}</li>
                    })}
                    </ul>
                    </>
            )})}
        </ul>
        </>
        )        
    };