import React from 'react';
import axios from 'axios';

// create new user on rapid api

async function NewUser(query) {

    console.log(query);

    // NEW USER ID: ol5z3L3JV0OO4ROrikB18
    // NEW USER ID: Gi9lG9yTEWfDApLoejawo
    // NEW USER ID: tnSf2Br7SdaKwmjiz8oSZ

    let userInfo;    

    const options = {
        'method': 'POST',
        'url': 'https://bespoke-diet-generator.p.rapidapi.com/user',
        'headers': {
            'content-type': 'application/json',
            'x-rapidapi-host': 'bespoke-diet-generator.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_API_KEY
        },
        'data': query // height, weight, dateOfBirth, sex, activityLevel
    };

    await axios.request(options)
        .then(response => {
            console.log(response.data.id, response);
            userInfo = response.data.id;
            console.log(userInfo);
        })
        .catch(error => console.error(error));

    // send user id to mongodb
    return userInfo;

};

export default NewUser;