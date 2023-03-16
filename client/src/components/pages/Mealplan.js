import React, { useEffect, useState } from 'react';
<<<<<<< HEAD:client/src/pages/Ingredients.js
import getIngredients from '../utils/api/getIngredients'
=======
import api from '../../utils/API'
>>>>>>> c25ce4443ab575acaa2754422ed79f9d7c6de239:client/src/components/pages/Mealplan.js

const Mealplan = () => {
    // Create state variables
    const [responseData, setResponseData] = useState([]);

    // fetches data
    const fetchData = () => {
        getIngredients

    const style = { margin: '0 auto', width: '200px', textAlign: 'center' };

    return (
        <div style={style}>
            WE DID IT!
            {responseData.length}
            {/* <h1>{responseData.title}</h1>

            <button onClick={(e) => fetchData(e)} type='button'>Click Me For Data</button>

            {responseData.dates && responseData.dates.map(date => {
                return <p>{date}</p>
            })} */}
        </div>
    )
}

export default Mealplan;