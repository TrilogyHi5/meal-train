import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function NewUser() {    
    
    const userStats = {
        'height':170,'weight':65,'dateOfBirth':'1991-03-03','sex':'FEMALE','activityLevel':'VERY_ACTIVE'
    };

    useEffect(() => {
        const baseUrl = {
            'method': 'POST',
            'url': 'https://bespoke-diet-generator.p.rapidapi.com/user',
            'headers': {
                'content-type': 'application/json',
                'x-rapidapi-host':'bespoke-diet-generator.p.rapidapi.com',
                'x-rapidapi-key': '3dabcabd7amshaaceebaedfb1881p17a061jsnccda92aaf893'
            },
            'data': JSON.stringify(userStats)
        };

        axios.request(baseUrl)
            .then((response) => {
                console.log(response.data);
                console.log('User created Successfully! User ID is:', response.data.id);
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
        <>Testing...</>
        // NEW USER ID: ol5z3L3JV0OO4ROrikB18
        // NEW USER ID: Gi9lG9yTEWfDApLoejawo
        // <>
        // <ul>
        //     {foodList.map((data, index) => { 
        //         return (
        //             <>
        //             <li key={index}>{data.name}</li>
        //             <ul>
        //             {data.ingredients.map((item, index) => {
        //                 return <li key={index}>{item.name}</li>
        //             })}
        //             </ul>
        //             </>
        //     )})}
        // </ul>
        // </>
        )        
    };