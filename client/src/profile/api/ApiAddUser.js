import React from 'react';
import axios from 'axios';

async function NewUser (query) {

    // Create a new user. This is what creates meal plan user ID

    // NEW USER ID: ol5z3L3JV0OO4ROrikB18
    // NEW USER ID: Gi9lG9yTEWfDApLoejawo
    // NEW USER ID: tnSf2Br7SdaKwmjiz8oSZ

    const options = {
        'method': 'POST',
        // 'url': 'https://bespoke-diet-generator.p.rapidapi.com/user',
        'headers': {
            'content-type': 'application/json',
            'x-rapidapi-host': 'bespoke-diet-generator.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_API_KEY
        },
        'data': query // height, weight, dateOfBirth, sex, activityLevel
    };

    

    const response = await axios.request(options);    
    const userInfo = response.data.id;
    //console.log(userInfo);

    // send user id to mongodb
    return userInfo;

};

export default NewUser;