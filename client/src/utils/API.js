// import axios
import axios from 'axios'

export default {
    getData: () =>
    axios({
        'method':'GET',
        'url':'https://bespoke-diet-generator.p.rapidapi.com/ingredients',
        'headers': {
            'accept-language': 'en',
            'content-type':'application/octet-stream',
            'x-rapidapi-host':'bespoke-diet-generator.p.rapidapi.com',
            'x-rapidapi-key': '3dabcabd7amshaaceebaedfb1881p17a061jsnccda92aaf893' //process.env.RAPIDAPI_KEY 
        }
    }) //,
    // postData: () =>
    // instance({
    //     'method': 'POST',
    //     'url':'/api',
    //     'data': {
    //         'item1':'data1',
    //         'item2':'item2'
    //     }
    // })
};