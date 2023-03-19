import axios from 'axios';

async function getUserDiet(props) {  

    // query = rapid api userId

    // rapid api userId
    let userInfo = {};

    const options = {
        'method': 'GET',
        'url': `https://bespoke-diet-generator.p.rapidapi.com/user/${props.userId}/diet`,
        'headers': {
            'x-rapidapi-host': 'bespoke-diet-generator.p.rapidapi.com',
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

export default getUserDiet;