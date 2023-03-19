import React, { useState } from 'react';

const UpdateUserInfo = (props) => {

  // add condition check if api's user id is in database, use different onSubmit function

  return (
    <>
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

            <form onSubmit={props.handleFormSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="birthday" className="block text-sm font-medium leading-6 text-gray-900">
                        Date of birth
                      </label>
                      <input
                        type="text"
                        name="dateOfBirth"
                        id="birthday"
                        onChange={props.handleInputChange}
                        value={props.value.dateOfBirth || ''}
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="genderSelect" className="block text-sm font-medium leading-6 text-gray-900">
                        Sex
                      </label>
                      <select
                        id="genderSelect"
                        name="genderSelect"
                        onChange={props.handleInputChange}
                        value={props.value.sex}
                        className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      >
                        <option value="#" disabled="true" selected="selected">Please choose</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                      </select>
                    </div>


                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="heightFeet" className="block text-sm font-medium leading-6 text-gray-900">
                        Height
                      </label>
                      <input
                        type="number"
                        name="heightFeet"
                        id="heightFeet"
                        min="4"
                        max="7"
                        onChange={props.handleInputChange}
                        value={props.value.heightFeet}
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <input
                        type="number"
                        name="heightInches"
                        id="inches"
                        min="0"
                        max="11"
                        onChange={props.handleInputChange}
                        value={props.value.heightInches}
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="weight" className="block text-sm font-medium leading-6 text-gray-900">
                        Current Weight (lbs)
                      </label>
                      <input
                        type="number"
                        name="weight"
                        id="weight"
                        min="100"
                        max="999"
                        onChange={props.handleInputChange}
                        value={props.value.weightKg}
                        placeholder="lbs"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                      <label htmlFor="activityLevel" className="block text-sm font-medium leading-6 text-gray-900">
                        Activity Level
                      </label>
                      <select
                        id="activity-level"
                        name="activity-level"
                        onChange={props.handleInputChange}
                        value={props.value.activityLevel}
                        className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      >
                        <option value="#" disabled="true" selected="selected">Please choose</option>
                        <option value="MOSTLY_SEDENTARY">Mostly Sedentary</option>
                        <option value="SOMEWHAT_SEDENTARY">Somewhat Sedentary</option>
                        <option value="SOMEWHAT_ACTIVE">Somewhat Active</option>
                        <option value="MODERATELY_ACTIVE">Moderately Active</option>
                        <option value="VERY_ACTIVE">Very Active</option>
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
    </>
  )
};

export default UpdateUserInfo;