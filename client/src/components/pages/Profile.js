import React from 'react';
import { useState, useEffect, Fragment } from 'react';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'

import getUser from '../../utils/api/GetUser';
import ProfileDetail from '../ProfileDetail';
import UpdateProfileForm from '../UpdateProfileForm';
import Ingredients from '../../utils/api/Ingredients';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Profile = () => {

  //code that makes dropdowns work on mobile
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)



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
        <div className="md:grid md:grid-cols-3 md:gap-6 pt-8">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-6 text-gray-900">Profile</h3>
              <p className="mt-1 text-sm text-gray-600">
                Update your name, email, password, or add a photo to your profile.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
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

                    <div className="col-span-6 sm:col-span-6">
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

                    <div className="col-span-6 sm:col-span-6">
                      <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                      </label>
                      <input
                        type="text"
                        name="password"
                        id="password"
                        autoComplete="password"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

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
              <p className="mt-1 text-sm text-gray-600">Fill out this form to get a personalized meal plan.</p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Date of birth
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
                        Sex
                      </label>
                      <select
                        id="sex"
                        name="sex"
                        autoComplete="sex"
                        className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      >
                        <option id="MALE">Male</option>
                        <option id="FEMALE">Female</option>
                      </select>
                    </div>


                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="feet" className="block text-sm font-medium leading-6 text-gray-900">
                        Height
                      </label>
                      <input
                        type="text"
                        name="feet"
                        id="feet"
                        autoComplete="feet"
                        placeholder="Feet"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <input
                        type="text"
                        name="inches"
                        id="inches"
                        autoComplete="inches"
                        placeholder="Inches"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="weight" className="block text-sm font-medium leading-6 text-gray-900">
                        Current Weight (lbs)
                      </label>
                      <input
                        type="text"
                        name="weight"
                        id="weight"
                        autoComplete="weight"
                        placeholder="lbs"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                      <label htmlFor="activity-level" className="block text-sm font-medium leading-6 text-gray-900">
                        Activity Level
                      </label>
                      <select
                        id="activity-level"
                        name="activity-level"
                        autoComplete="activity-level"
                        className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      >
                        <option id="MOSTLY_SEDENTARY">Mostly Sedentary</option>
                        <option id="SOMEWHAT_SEDENTARY">Somewhat Sedentary</option>
                        <option id="SOMEWHAT_ACTIVE">Somewhat Active</option>
                        <option id="MODERATELY_ACTIVE">Moderately Active</option>
                        <option id="VERY_ACTIVE">Very Active</option>
                      </select>
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
              <h3 className="text-base font-semibold leading-6 text-gray-900">Meal Plan Customization (Optional)</h3>
              <p className="mt-1 text-sm text-gray-600">Customize your meal plan based on a specific diet and weight goal</p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <fieldset>
                    <legend className="contents text-sm font-semibold leading-6 text-gray-900">
                      Diet
                    </legend>
                    <p className="text-sm text-gray-500">Choose a diet to base your meal plan on (optional).</p>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="MEDITERRANEAN"
                          name="diet"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="MEDITERRANEAN"
                          className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                        >
                          Mediterranean
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="LOW_CARB"
                          name="diet"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label htmlFor="LOW_CARB" className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                          Low Carb
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="BETTER_BODY"
                          name="diet"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="BETTER_BODY"
                          className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                        >
                          Better Body
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="col-span-3 sm:col-span-3 lg:col-span-3">
                    <legend className="contents text-sm font-semibold leading-6 text-gray-900">
                      Goal Weight (lbs)
                    </legend>
                    <p className="text-sm text-gray-500">Enter your desired weight (optional).</p>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="goal-weight"
                          name="goal-weight"
                          type="text"
                          placeholder="lbs"
                          autoComplete='goal-weight'
                          className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
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
      <Ingredients />

    </>
  )
}
export default Profile;
