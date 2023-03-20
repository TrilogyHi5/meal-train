import React from "react";
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import mediterraneanImage from '../utils/images/mediterranean.jpg';
import { Link } from 'react-router-dom';

function Mediterranean() {
    return (
        <div className="bg-cover bg-no-repeat bg-fixed h-screen"
            style={{ backgroundImage: `url(${mediterraneanImage})` }}>
            <div className="bg-cover bg-center h-screen flex flex-col mt-20">
                <div className="flex-grow flex flex-col justify-center items-center">
                    <div className="bg-white bg-opacity-80 p-8 rounded-3xl">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Mediterranean Diet
                        </h1>
                        <p className="text-gray-800 mb-4">
                            The Mediterranean approach is perhaps the most studied, being considered the healthiest choice of a food plan in the world.
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
                            The Mediterranean approach is perhaps the most studied, being considered the healthiest choice of a food plan in the world, because it is an agreeable nutritional plan, centered on the idea of controlling blood glucose and promoting a balanced lifestyle.

                            The food plan is rich in fruits, vegetables and whole grains, which helps to quench aggressive food cravings, and the ingredients it contains promote cardiovascular health and digestion.

                            It is a food plan that promotes a moderate but sustainable weight loss, being recommended for people who have a higher preference for bakery products and who want to lose weight in a healthy but agreeable way.

                            It is designed for a decrease of 4% of body weight per month (as long as the indications regarding sports and daily physical movement are followed).
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
                        <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" /><p>White meat</p>
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

export default Mediterranean;