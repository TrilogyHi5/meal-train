// import axios
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const getIngredients = {
    'url': 'https://bespoke-diet-generator.p.rapidapi.com/ingredients',
    'headers': {
        'accept-language': 'en',
        'content-type':'application/octet-stream',
        'x-rapidapi-host':'bespoke-diet-generator.p.rapidapi.com',
        'x-rapidapi-key': process.env.GET_RAPIDAPI_KEY 
    }
};

const postUser = {
    url: 'https://bespoke-diet-generator.p.rapidapi.com/user',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': process.env.GET_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'bespoke-diet-generator.p.rapidapi.com'
    },
    //data: '{"height":170,"weight":65,"dateOfBirth":"1991-03-03","sex":"FEMALE","activityLevel":"VERY_ACTIVE"}'
  };

  
const [user, setUser] = useState(null);
const [ingredients, setIngredients] = useState(null);

export function fetchIngredients() {

  useEffect(() => {
    axios.get(`${getIngredients}/1`)
        .then((response) => {
           setIngredients(response.data);
        });
    }, []);
    
}

export function createUser() {
    axios.post(postUser, {
      title: "Hello World!",
      body: "This is a new post."
    })
    .then((response) => {
      setUser(response.data);
    });
};

// axios({
//     'method':'GET',
//     'url':'https://bespoke-diet-generator.p.rapidapi.com/ingredients',
//     'headers': {
//         'accept-language': 'en',
//         'content-type':'application/octet-stream',
//         'x-rapidapi-host':'bespoke-diet-generator.p.rapidapi.com',
//         'x-rapidapi-key': GET_RAPIDAPI_KEY 
//     }
// })