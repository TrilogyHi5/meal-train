import axios from 'axios';

export default function getUser(query) {  

    // query = rapid api userId

        const baseUrl = {
            'method': 'GET',
            'url': `https://bespoke-diet-generator.p.rapidapi.com/user/${query}`,
            'headers': {
                'x-rapidapi-host':'bespoke-diet-generator.p.rapidapi.com',
                'x-rapidapi-key': '3dabcabd7amshaaceebaedfb1881p17a061jsnccda92aaf893'
            }
        };

          return axios.request(baseUrl);
    };