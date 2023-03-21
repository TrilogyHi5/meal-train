import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import AccountSettings from '../profile/AccountSettings'; // name, email, pass
import ProfileSettings from '../profile/ProfileSettings'; // height...
import DietSettings from '../profile/DietSettings'; // diet type...
import { QUERY_SINGLE_USER } from '../utils/queries';

const Settings = () => {    

    const { userId } = useParams();
    const { loading, data } = useQuery(QUERY_SINGLE_USER, {        
        variables: { userId: userId },
      });
    
      const user = data?.user || null;

    const style = { margin: '0 auto', width: '80%' };

    return (

        <div style={style}>  
                          
            <AccountSettings />
            <ProfileSettings userId={user._id} />
            <DietSettings />

        </div>
    )
}

export default Settings;