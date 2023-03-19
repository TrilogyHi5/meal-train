import React, { useState } from 'react';
import AddUserInfo from './forms/AddUserInfo';
import UpdateUserName from './forms/UpdateUserName';
import UpdateUserDiet from './forms/UpdateUserDiet';
// import Profile from './Profile';
import NewUser from './api/ApiAddUser';
import { validateEmail, validateName, convertWeightToImperial, convertHeightToImperial } from '../../utils/utils';

const Settings = () => {

    let [userName, setUserName] = useState({});
    let [addInfo, setAddInfo] = useState({heightFt: '', heightIn: '', weightKg: ''});
    let [updateDiet, setUpdateDiet] = useState({dietType: '', weightGoal: '', dietDuration: ''});

    const userNameChange = (e) => {
        const { name, value } = e.target;

        if (name === 'firstName') {
            setUserName({ ...userName, firstName: value });
        } else if (name === 'lastName') {
            setUserName({ ...userName, lastName: value });
        } else if (name === 'email') {
            setUserName({ ...userName, email: value });
        } else {
            setUserName({ ...userName, password: value });
        }
    };

    const addInfoChange = (e) => {
        const { name, value } = e.target;

        if (name === 'dateOfBirth') {

            setAddInfo({ ...addInfo, dateOfBirth: value });

        } else if (name === 'genderSelect') {
            
            const genderOpt = document.querySelector('#genderSelect').value;
            setAddInfo({ ...addInfo, sex: genderOpt });

        } else if (name === 'heightFeet') {            

            setAddInfo({ ...addInfo, heightFt: value });

        } else if (name === 'heightInches') { 

            setAddInfo({ ...addInfo, heightIn: value });

        } else if (name === 'weight') {

            setAddInfo({ ...addInfo, weightKg: value });

        } else {
            const activityOpt = document.querySelector('#activity-level').value;
            setAddInfo({ ...addInfo, activityLevel: activityOpt });
        }
    };

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

    const handleUserNameSubmit = (e) => { 
        e.preventDefault();

        // PUT / MUTATION TO MONGO DB
    };

    const handleUserInfoSubmit = (e) => {
        e.preventDefault();

        // destruct state variable
        const { heightFt, heightIn, weightKg, dateOfBirth, sex, activityLevel } = addInfo;

        const weight = convertWeightToImperial(weightKg);
        const height = convertHeightToImperial(heightFt, heightIn);

        // send user's additional info to Rapid API in order to get their user ID
        const userId = NewUser({ height, weight, dateOfBirth, sex, activityLevel });

        console.log(userId);

        // RETURNED API ID GETS ADDED TO USER PROFILE
        
        // On form submit, perform mutation and pass in form data object as arguments
        // It is important that the object fields are match the defined parameters in `ADD_THOUGHT` mutation
        // try {
        //     const { data } = addThought({
        //         variables: { ...formState },
        //     });

        // } catch (err) {
        //     console.error(err);
        // }
    };

    const handleUpdateDietSubmit = (e) => {        
        e.preventDefault();

        const {dietType, weightGoal, dietDuration} = updateDiet;
    };

    const style = { margin: '0 auto', width: '80%' };

    return (

        <div style={style}>

            <UpdateUserName
                value={userName}
                handleInputChange={userNameChange}
                handleFormSubmit={handleUserNameSubmit} />

            <AddUserInfo
                value={addInfo}
                handleInputChange={addInfoChange}
                handleFormSubmit={handleUserInfoSubmit} />

            <UpdateUserDiet
                value={updateDiet}
                handleInputChange={userDietChange}
                handleFormSubmit={handleUpdateDietSubmit} />
        </div>
    );
};

export default Settings;