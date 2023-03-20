import React from 'react';
import AccountSettings from '../profile/AccountSettings'; // name, email, pass
import ProfileSettings from '../profile/ProfileSettings'; // height...
import DietSettings from '../profile/DietSettings'; // diet type...

const Settings = () => {    
    
        // NEW USER ID: ol5z3L3JV0OO4ROrikB18
        // NEW USER ID: Gi9lG9yTEWfDApLoejawo

    const style = { margin: '0 auto', width: '80%' };

    return (

        <div style={style}>  
                          
            <AccountSettings />
            <ProfileSettings />
            <DietSettings />

        </div>
    )
}

export default Settings;