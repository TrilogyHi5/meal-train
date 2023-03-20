import axios from 'axios';

async function getUserDiet(props) {  

    const options = {
        'method': 'GET',
        // 'url': `https://bespoke-diet-generator.p.rapidapi.com/user/tnSf2Br7SdaKwmjiz8oSZ`,
        'headers': {
            'x-rapidapi-host': 'bespoke-diet-generator.p.rapidapi.com',
            'x-rapidapi-key': process.env.REACT_APP_API_KEY
        }
    };

    const response = await axios.request(options);
    const userInfo = response.data;
    console.log(userInfo);

    return userInfo;
};

export default getUserDiet;