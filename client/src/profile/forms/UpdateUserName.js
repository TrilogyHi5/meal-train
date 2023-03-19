import React from 'react';

function updateName(props) {

    return (
        <>
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

                    <form onSubmit={props.handleFormSubmit}>
                        <div className="shadow sm:overflow-hidden sm:rounded-md">
                            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="first-name"
                                            defaultValue={props.value.firstName}
                                            onChange={props.handleInputChange}
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
                                            name="lastName"
                                            id="last-name"
                                            defaultValue={props.value.lastName}
                                            onChange={props.handleInputChange}
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
                                            name="email"
                                            id="email-address"
                                            defaultValue={props.value.email}
                                            onChange={props.handleInputChange}
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
                                            defaultValue={props.value.password}
                                            onChange={props.handleInputChange}
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
        </>
    )
};

export default updateName;