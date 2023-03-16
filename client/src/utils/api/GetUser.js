//import React, { useState, useEffect } from 'react';
import axios from 'axios';

const getUser = (query) => {

    const baseUrl = {
        'method': 'GET',
        'url': `https://bespoke-diet-generator.p.rapidapi.com/user/${query}`,
        'headers': {
            'x-rapidapi-host': 'bespoke-diet-generator.p.rapidapi.com',
            'x-rapidapi-key': '3dabcabd7amshaaceebaedfb1881p17a061jsnccda92aaf893'
        }
    };

    const GetUser = axios.create(baseUrl);
}
export default getUser;