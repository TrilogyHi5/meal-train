import React from 'react';
import { useState, useEffect } from 'react';
import GetUser from '../../utils/api/GetUser';
import ProfileDetail from '../ProfileDetail';
import UpdateProfileForm from '../UpdateProfileForm';

const Profile = () => {

    const [result, setResult] = useState({});
    const [search, setSearch] = useState('');

    const searchUser = (query) =>
        GetUser.search(query)
            .then(res => setResult(res.data))
            .catch((err) => console.log(err));

    useEffect(() => {
        searchUser('ol5z3L3JV0OO4ROrikB18');
    }, []);


    // Handler for input changes to the search form
    const handleInputChange = (e) => setSearch(e.target.value);

    // Handler for what happens when the search form is submitted
    const handleFormSubmit = (e) => {
        e.preventDefault();
        searchUser(search);
    };

    const {
        Height = '',
        Weight = '',
        DateOfBirth = '', //YYYY-MM-DD
        Sex = '',
        ActivityLevel = ''
    } = result;
};

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
    </>
)

export default Profile;