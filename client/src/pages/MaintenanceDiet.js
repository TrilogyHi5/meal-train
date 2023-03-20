import React from "react";
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';
import mediterraneanImage from '../utils/images/maintenance.jpg';


function Maintenance() {
    return (
        <div className="bg-cover bg-no-repeat bg-bottom bg-fixed h-screen"
            style={{ backgroundImage: `url(${mediterraneanImage})` }}>
            <div className="bg-cover bg-center h-screen flex flex-col">
                <div className="flex-grow flex flex-col justify-center items-center">
                    <div className="bg-white bg-opacity-80 p-8 rounded-3xl">
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
                <div className="bg-gray-200 bg-opacity-80 p-8 flex mx-10 rounded-3xl mb-20">
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
                        <p className="text-gray-800 font-semibold">
                            The nutritional plan may contain the following foods:
                        </p>
                        
                        <div className="flex">
                            <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" /><p>Legume</p>
                        </div>
                        <div className="flex">
                            <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" /><p>Fruit</p>
                        </div>
                        <div className="flex">
                            <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" /><p>Whole grains and bakery products</p>
                        </div>
                        <div className="flex">
                            <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" /><p>Meat</p>
                        </div>
                        <div className="flex">
                            <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" /><p>Fish</p>
                        </div>
                        <div className="flex">
                            <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" /><p>Dairy and vegan alternatives</p>
                        </div>
                        <div className="flex">
                            <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" /><p>Oilseeds</p>
                        </div>
                        <div className="flex">
                            <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" /><p>Unprocessed natural sweets</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Maintenance;