import React, { useState } from 'react';
import UpdateUserDiet from './forms/UpdateUserDiet';

const DietSettings = () => {

    let [updateDiet, setUpdateDiet] = useState({dietType: '', weightGoal: '', dietDuration: ''});

    const userDietChange = (e) => {
        const { name, value } = e.target;

        if (name === 'diet') {
            setUpdateDiet({ ...updateDiet, dietType: value });
        } else if (name === 'goalWeight') {
            setUpdateDiet({ ...updateDiet, weightGoal: value });
        } else {            
            setUpdateDiet({ ...updateDiet, dietDuration: value });
        }
    };

    const handleUpdateDietSubmit = (e) => {        
        e.preventDefault();

        const {dietType, weightGoal, dietDuration} = updateDiet;
    };

    const style = { margin: '0 auto', width: '80%' };

    return (

        <div style={style}>

            <UpdateUserDiet
                value={updateDiet}
                handleInputChange={userDietChange}
                handleFormSubmit={handleUpdateDietSubmit} />
        </div>
    );
};

export default DietSettings;