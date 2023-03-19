import React from "react";
import { ArrowRightIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';

function Maintenance() {
    return (
        <div className="bg-cover bg-center h-screen flex flex-col">
            <div className="flex-grow flex flex-col justify-center items-center">
                <div className="bg-white bg-opacity-90 p-8 rounded-lg">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Maintenance Diet
                    </h1>
                    <p className="text-gray-800 mb-4">
                        The nutritional maintenance plan is thought to stabilize the body after the slimming process or it can be the start of a balanced and healthy lifestyle.
                    </p>
                    <Link to="/signup"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Join Today
                    </button></Link>
                </div>
            </div>
            <div className="bg-gray-200 p-8 flex">
                <div className="w-1/2 pr-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        About the nutritional plan
                    </h2>
                    <p className="text-gray-800">
                        The nutritional maintenance plan is thought to stabilize the body after the slimming process or it can be the start of a balanced and healthy lifestyle.

                        It is a relaxed but effective food plan for fixing the behaviors necessary to maintain weight in the long run.

                        The secret of this food plan is based on the unique combination of ingredients that regulate metabolism and reduce the craving for sweet and hyper-caloric processed foods.
                    </p>
                </div>
                <div className="w-1/2 pl-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        What's in it
                    </h2>
                    <p className="text-gray-800">
                        The nutritional plan may contain the following foods:
                    </p>
                    <p ArrowRightIcon >Legume</p>
                    <p ArrowRightIcon >Fruit</p>
                    <p ArrowRightIcon >Whole grains and bakery products</p>
                    <p ArrowRightIcon >Meat</p>
                    <p ArrowRightIcon >Fish</p>
                    <p ArrowRightIcon >Dairy and vegan alternatives</p>
                    <p ArrowRightIcon >Oilseeds</p>
                    <p ArrowRightIcon >Unprocessed natural sweets</p>

                </div>
            </div>
        </div>
    );
}

export default Maintenance;