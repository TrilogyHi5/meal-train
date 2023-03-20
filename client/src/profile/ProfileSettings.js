import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import AddUserInfo from './forms/AddUserInfo';
import NewUser from './api/ApiAddUser';
import { convertWeightToImperial, convertHeightToImperial } from '../../utils/utils';
import { ADD_API_ID } from '../utils/mutations';

const ProfileSettings = () => {
    
    let [addInfo, setAddInfo] = useState({heightFt: '', heightIn: '', weightKg: ''});
    const [addApiId, { data, error }] = useMutation(ADD_API_ID);

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

    const handleUserInfoSubmit = (e) => {
        e.preventDefault();

        // destruct state variable
        const { heightFt, heightIn, weightKg, dateOfBirth, sex, activityLevel } = addInfo;

        const weight = convertWeightToImperial(weightKg);
        const height = convertHeightToImperial(heightFt, heightIn);

        // send user's additional info to Rapid API in order to get their user ID
        const userId = NewUser({ height, weight, dateOfBirth, sex, activityLevel });

        console.log(userId); /// MONGO ID / API ID

        // GET THE MONGO ID TO SEND THE API ID

        try {
            const data = useMutation(addApiId, {
                variables: {apiId: userId}
            })
            console.log('string', data);
        } catch (error) {
            console.log(error.message);
        }

        
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

    const style = { margin: '0 auto', width: '80%' };

    return (

        <div style={style}>

            <AddUserInfo
                value={addInfo}
                handleInputChange={addInfoChange}
                handleFormSubmit={handleUserInfoSubmit} />
        </div>
    );
};

export default ProfileSettings;