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

    // return (
//         <>
//             <div>
//                 <ProfileDetail
//                     height={Height}
//                     weight={Weight}
//                     dob={DateOfBirth}
//                     sex={Sex}
//                     activity={ActivityLevel}
//                 />
//             </div>

//             <div>Update Preferences</div>
//             <UpdateProfileForm
//                 value={search}
//                 handleInputChange={handleInputChange}
//                 handleFormSubmit={handleFormSubmit}
//             />
//         </>
//     );
// };


    return (
      <>
        <div>
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-6 text-gray-900">Profile</h3>
                {/* <p className="mt-1 text-sm text-gray-600">
                  This information will be displayed publicly so be careful what you share.
                </p> */}
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div className="shadow sm:overflow-hidden sm:rounded-md">
                  <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                    <div>
                      <label className="block text-sm font-medium leading-6 text-gray-900">Photo</label>
                      <div className="mt-2 flex items-center">
                        <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                          <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </span>
                        <button
                          type="button"
                          className="ml-5 rounded-md border border-gray-300 bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
                        >
                          Change
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
  
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>
  
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-6 text-gray-900">Personal Information</h3>
                <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                          First name
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
  
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                          Last name
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
  
                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
                          Email address
                        </label>
                        <input
                          type="text"
                          name="email-address"
                          id="email-address"
                          autoComplete="email"
                          className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
  
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                          Height
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        >
                          <option>4'11"</option>
                          <option>Canada</option>
                          <option>6'6"</option>
                        </select>
                      </div>
  
                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                          Street address
                        </label>
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
  
                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          autoComplete="address-level2"
                          className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
  
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                          State / Province
                        </label>
                        <input
                          type="text"
                          name="region"
                          id="region"
                          autoComplete="address-level1"
                          className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
  
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                          ZIP / Postal code
                        </label>
                        <input
                          type="text"
                          name="postal-code"
                          id="postal-code"
                          autoComplete="postal-code"
                          className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
  
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>
  
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-6 text-gray-900">Notifications</h3>
                <p className="mt-1 text-sm text-gray-600">Decide which communications you'd like to receive and how.</p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                    <fieldset>
                      <legend className="sr-only">By Email</legend>
                      <div className="text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                        By Email
                      </div>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-start">
                          <div className="flex h-6 items-center">
                            <input
                              id="comments"
                              name="comments"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                          </div>
                          <div className="ml-3 text-sm leading-6">
                            <label htmlFor="comments" className="font-medium text-gray-900">
                              Comments
                            </label>
                            <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex h-6 items-center">
                            <input
                              id="candidates"
                              name="candidates"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                          </div>
                          <div className="ml-3 text-sm leading-6">
                            <label htmlFor="candidates" className="font-medium text-gray-900">
                              Candidates
                            </label>
                            <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex h-6 items-center">
                            <input
                              id="offers"
                              name="offers"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                          </div>
                          <div className="ml-3 text-sm leading-6">
                            <label htmlFor="offers" className="font-medium text-gray-900">
                              Offers
                            </label>
                            <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend className="contents text-sm font-semibold leading-6 text-gray-900">
                        Push Notifications
                      </legend>
                      <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            id="push-everything"
                            name="push-notifications"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="push-everything"
                            className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                          >
                            Everything
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="push-email"
                            name="push-notifications"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label htmlFor="push-email" className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                            Same as email
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="push-nothing"
                            name="push-notifications"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="push-nothing"
                            className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                          >
                            No push notifications
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
    }
  export default Profile;
