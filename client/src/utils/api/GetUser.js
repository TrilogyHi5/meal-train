import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function GetUser() {   

    const userId = 'ol5z3L3JV0OO4ROrikB18';

    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        const baseUrl = {
            'method': 'GET',
            'url': `https://bespoke-diet-generator.p.rapidapi.com/user/${userId}`,
            'headers': {
                'x-rapidapi-host':'bespoke-diet-generator.p.rapidapi.com',
                'x-rapidapi-key': '3dabcabd7amshaaceebaedfb1881p17a061jsnccda92aaf893'
            }
        };

        axios.request(baseUrl)
            .then((response) => {
                //console.log(response.data);
                setUserInfo(response.data);
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
        <>
            {userInfo && userInfo.map && userInfo.map(item => { 
                return (
                    <>
                    <div key={item.id}>{item.id}</div>
                    <ul>
                        <li>{item.height}</li>
                        <li>{item.weight}</li>
                        <li>{item.dateOfBirth}</li>
                        <li>{item.sex}</li>
                        <li>{item.activityLevel}</li>                           
                    </ul>
                    </>
            )})}
        </>
        // NEW USER ID: ol5z3L3JV0OO4ROrikB18
        // NEW USER ID: Gi9lG9yTEWfDApLoejawo
        
        )        
    };