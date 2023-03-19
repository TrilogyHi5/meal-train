import axios from 'axios';

async function GetFoodSwap(query) {  

    // query = rapid api userId

        const baseUrl = {
            'method': 'GET',
            'url': `https://bespoke-diet-generator.p.rapidapi.com/user/${query}`,
            'headers': {
                'x-rapidapi-host':'bespoke-diet-generator.p.rapidapi.com',
                // 'x-rapidapi-key': process.env.REACT_APP_API_KEY
            }
        };
    await axios.request(options)
        .then(response => {
            console.log(response.data.id, response);
            userInfo = response.data;
            console.log(userInfo);
        })
        .catch(error => console.error(error));

      return { userInfo };

};

export default GetFoodSwap;