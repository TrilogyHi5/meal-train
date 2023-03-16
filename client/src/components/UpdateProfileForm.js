import React from 'react';

function UpdateProfileForm(props) {

  return (
    <form onSubmit={props.handleFormSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
      <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="height" className="block text-sm font-semibold leading-6 text-gray-900">Height</label>
          <div className="mt-2.5">
            <input
              onChange={props.handleInputChange}
              value={props.value}
              name="height"
              type="text"
              className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Height"
              id="height"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="weight" className="block text-sm font-semibold leading-6 text-gray-900">Weight</label>
          <div className="mt-2.5">
            <input
              onChange={props.handleInputChange}
              value={props.value}
              name="weight"
              type="text"
              className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Weight"
              id="weight"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="dob" className="block text-sm font-semibold leading-6 text-gray-900">Date of Birth</label>
          <div className="mt-2.5">
            <input
              onChange={props.handleInputChange}
              value={props.value}
              name="Date of Birth"
              type="text"
              className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Date of Birth"
              id="dob"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="sex" className="block text-sm font-semibold leading-6 text-gray-900">Sex</label>
          <div className="mt-2.5">
            <input
              onChange={props.handleInputChange}
              value={props.value}
              name="sex"
              type="text"
              className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Sex"
              id="sex"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="activity" className="block text-sm font-semibold leading-6 text-gray-900">Activity Level</label>
          <div className="mt-2.5">
            <input
              onChange={props.handleInputChange}
              value={props.value}
              name="activity"
              type="text"
              className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Activity Level"
              id="activity"
            />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <button
          onClick={props.handleFormSubmit}
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          type="submit"
        >
          Update My Profile
        </button>
      </div>
    </form>
  );
}

export default UpdateProfileForm;