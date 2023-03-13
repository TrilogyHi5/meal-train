import React, { useEffect, useState } from 'react';
import api from '../utils/API'

const Ingredients = () => {
    // Create state variables
    let [responseData, setResponseData] = React.useState([]);

    // fetches data
    const fetchData = () => {
        //e.preventDefault()

        api.getData()
        .then((response)=>{
            setResponseData(response.data);
            console.log(response);
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        fetchData();
      }, []);

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