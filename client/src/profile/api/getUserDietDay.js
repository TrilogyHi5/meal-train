import axios from 'axios';

export default function getUser(query) {  

    // query = rapid api userId

        const baseUrl = {
            'method': 'GET',
            'url': `https://bespoke-diet-generator.p.rapidapi.com/user/${query}`,
            'headers': {
                'x-rapidapi-host':'bespoke-diet-generator.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_API_KEY
            }
        };

          return axios.request(baseUrl);
    };