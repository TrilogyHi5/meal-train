import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Ingredients() {

    const [foodList, setFoodList] = useState([]);

    useEffect(() => {
        const baseUrl = {
            'method': 'GET',
            'url': 'https://bespoke-diet-generator.p.rapidapi.com/ingredients',
            'headers': {
                'accept-language': 'en',
                'x-rapidapi-host': 'bespoke-diet-generator.p.rapidapi.com',
                // 'x-rapidapi-key': process.env.REACT_APP_API_KEY
            }
        };

        axios.request(baseUrl)
            .then((response) => {
                setFoodList(response.data);
                //response.data.forEach((foodCategory) => {
                //console.log(`${foodCategory.name}:`);

                //foodCategory.ingredients.forEach((ingredient) => {
                //console.log(` [${ingredient.id}]: ${ingredient.name}`);
                //});
                //});
            });
    }, []);

    //not sure about this
    const [formState, setFormState] = useState({ itemId: '' });

    const [isChecked, setIsChecked] = useState(false);

    //need a resolver and typeDef for this
    //   const [addPreference, { data, error }] = useMutation(ADD_PREFERENCE);

    //need a resolver and typeDef for this
    //   const [addPreference, { data, error }] = useMutation(ADD_PREFERENCE);
    const checkHandler = () => {
        setIsChecked(!isChecked)
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        //console.log(formState, "formstate");

        try {
            const { data } = console.log({ variables: { ...formState }, })
            //   const { data } = await addPreference({
            // variables: { ...formState },
            //   });


            // Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    //returns id, name, ingredients

    if (!foodList) return 'No food list.'

    let dataId, dataName, itemId, itemName, itemIdx;

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
                            <h3 className="text-base font-semibold leading-6 text-gray-900">Food Preferences</h3>
                            <p className="mt-1 text-sm text-gray-600">Select foods to exclude from your meal plan.</p>
                        </div>
                    </div>
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <form onSubmit={handleFormSubmit} action="#" method="POST">
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                                    {foodList.map(data => {
                                        dataId = data.id;
                                        dataName = data.name;

                                        return (
                                            <>
                                                {/* Category */}
                                                <Disclosure as="div" key={dataId} className="border-b border-gray-200 py-6">
                                                    {({ open }) => (
                                                        <>
                                                            <h4 className="-my-3 flow-root">
                                                                <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                                    <span className="font-medium text-gray-900">{dataName}</span>
                                                                    <span className="ml-6 flex items-center">
                                                                        {open ? (
                                                                            <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                                        ) : (
                                                                            <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                                        )}
                                                                    </span>
                                                                </Disclosure.Button>
                                                            </h4>
                                                            <Disclosure.Panel className="pt-6">
                                                                <div className="space-y-4"></div>

                                                                {/* Ingredient in category */}
                                                                {data.ingredients.map((item, itemIdx) => {
                                                                    itemId = item.id;
                                                                    itemName = item.name;
                                                                    return (
                                                                        <div key={itemId} className="flex items-center">
                                                                            <input
                                                                                id={`filter-${dataId}-${itemIdx}`}
                                                                                name={dataId}
                                                                                type="checkbox"
                                                                                role="switch"
                                                                                defaultChecked={isChecked}
                                                                                className="mt-[0.3rem] mr-2 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 dark:bg-neutral-600 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 dark:after:bg-neutral-400 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary dark:checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary dark:checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                                                                                onChange={checkHandler}
                                                                            />
                                                                            <label
                                                                                htmlFor={`filter-${dataId}-${itemIdx}`}
                                                                                className="ml-3 text-sm text-gray-600"
                                                                            >
                                                                                {itemName}
                                                                            </label>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </Disclosure.Panel>
                                                        </>
                                                    )}
                                                </Disclosure>
                                            </>
                                            //close of return
                                        )
                                    })}
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