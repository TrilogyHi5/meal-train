import React from 'react';
import { useState, useEffect } from 'react';
import getUser from '../../utils/api/GetUser';
import ProfileDetail from '../ProfileDetail';
import UpdateProfileForm from '../UpdateProfileForm';

const Profile = () => {

    const [result, setResult] = useState({});
    const [search, setSearch] = useState('');

    // Fiama, this section is calling GetUser, but I couldn't get it to work.

    const searchUser = (query) =>
        getUser(query)
            .then(res => setResult(res.data))
            .catch((err) => console.log(err));

            

    useEffect(() => {
        searchUser('ol5z3L3JV0OO4ROrikB18');
    }, []);


    // Handler for input changes to the search form
    // !!!!THIS LINE IS NEEDED TO QUERY THE USER ID FROM BESPOKE/RAPID API!!!!
    // MINIMIZE REQUEST BY STORING USER ID ON MONGO
    //const handleInputChange = (e) => setSearch(e.target.value);

    // TEMP LINE
    const handleInputChange = (e) => setSearch('ol5z3L3JV0OO4ROrikB18');

    // Handler for what happens when the search form is submitted
    const handleFormSubmit = (e) => {
        e.preventDefault();
        searchUser(search); // query argument
    };

    const {
        Height = '',
        Weight = '',
        DateOfBirth = '', //YYYY-MM-DD
        Sex = '',
        ActivityLevel = ''
    } = result;

    return (
        <>
            <div>
                <ProfileDetail
                    height={Height}
                    weight={Weight}
                    dob={DateOfBirth}
                    sex={Sex}
                    activity={ActivityLevel}
                />
            </div>

            <div>Update Preferences</div>
            <UpdateProfileForm
                value={search}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
            />
        </>
    );
};

export default Profile;