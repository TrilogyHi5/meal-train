import React from 'react';
import { useState, useEffect, Fragment} from 'react';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'

import getUser from '../../utils/api/GetUser';
import ProfileDetail from '../ProfileDetail';
import UpdateProfileForm from '../UpdateProfileForm';


// const sortOptions = [
//   { name: 'Most Popular', href: '#', current: true },
//   { name: 'Best Rating', href: '#', current: false },
//   { name: 'Newest', href: '#', current: false },
//   { name: 'Price: Low to High', href: '#', current: false },
//   { name: 'Price: High to Low', href: '#', current: false },
// ]
// const subCategories = [
//   { name: 'Totes', href: '#' },
//   { name: 'Backpacks', href: '#' },
//   { name: 'Travel Bags', href: '#' },
//   { name: 'Hip Bags', href: '#' },
//   { name: 'Laptop Sleeves', href: '#' },
// ]
const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: false },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: false },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: true },
    ],
  },
]

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
                              Weight (lbs)
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
                    <h3 className="text-base font-semibold leading-6 text-gray-900">Food Preferences and Allergies</h3>
                    <p className="mt-1 text-sm text-gray-600">Enter any allergies and food preferences to include or exclude foods from your meal plan.</p>
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
            <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    {/* <h3 className="sr-only">Categories</h3>
                    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul> */}

                    {filters.map((section) => (
                      <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

            <div className="flex items-center">
              {/* <Menu as="div" className="relative inline-block text-left">
                {/* <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div> */}

                {/* <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu> */} 

              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                {/* <h3 className="sr-only">Categories</h3> */}
                {/* <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul> */}

                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">{/* Your content */}</div>
            </div>
          </section>
        </main>
      </div>
    </div>
          </>
        )
      }
  export default Profile;
