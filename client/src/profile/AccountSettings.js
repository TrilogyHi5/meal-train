import React, { useState } from 'react';
import UpdateUserName from './forms/UpdateUserName';
import { validateEmail, validateName } from '../../utils/utils';

const Settings = () => {

    let [userName, setUserName] = useState({ firstName: '', lastName: '', email: '', password: '' });

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

    const handleUserNameSubmit = (e) => { 
        e.preventDefault();

        // PUT / MUTATION TO MONGO DB
    };

    const style = { margin: '0 auto', width: '80%' };

    return (

        <div style={style}>

            <UpdateUserName
                value={userName}
                handleInputChange={userNameChange}
                handleFormSubmit={handleUserNameSubmit} />

        </div>
    );
};

export default Settings;