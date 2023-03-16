import React, { useEffect, useState } from 'react';
import getIngredients from '../utils/api/getIngredients'

const Ingredients = () => {
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

export default Ingredients;