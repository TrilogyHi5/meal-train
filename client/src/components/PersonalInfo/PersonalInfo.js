import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PersonalInfo = () => {



  
  return (
    <>
      <div className="mt-20 p-8">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-6 text-gray-900">Personal Information</h3>
              <p className="mt-1 text-sm text-gray-600">Fill out this form to get a personalized meal plan.</p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            {/* {data ? (
            <p>
              Success! Check out your {' '}
              <Link to="/mealplan"> meal plan.</Link>
            </p>
          ) : ( */}
            <form 
            // onSubmit={handleFormSubmit} 
            action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="dob" className="block text-sm font-medium leading-6 text-gray-900">
                        Date of birth
                      </label>
                      <input
                        type="text"
                        name="dob"
                        id="dob"
                        autoComplete="dob"
                        // defaultValue={formState.dob}
                        // onChange={handleChange}
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="sex" className="block text-sm font-medium leading-6 text-gray-900">
                        Sex
                      </label>
                      <select
                        id="sex"
                        name="sex"
                        autoComplete="sex"
                        // defaultValue={formState.sex}
                        // onChange={handleChange}
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
                        // defaultValue={formState.feet}
                        // onChange={handleChange}
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <input
                        type="text"
                        name="inches"
                        id="inches"
                        autoComplete="inches"
                        placeholder="Inches"
                        // defaultValue={formState.inches}
                        // onChange={handleChange}
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
                        // defaultValue={formState.weight}
                        // onChange={handleChange}
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
                        // defaultValue={formState.activity}
                        // onChange={handleChange}
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
          {/* )}
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )} */}
          </div>
        </div>
      </div>
    </>

  )
}
export default PersonalInfo;