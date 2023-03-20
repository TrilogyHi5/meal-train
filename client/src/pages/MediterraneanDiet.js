import React from "react";
import { ArrowRightIcon } from '@heroicons/react/solid'
import backgroundImage from '../utils/images/background.jpg'; // import background image
import { Link } from 'react-router-dom';

function Mediterranean() {
    return (
        <div className="bg-cover bg-no-repeat bg-fixed h-screen"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="bg-cover bg-center h-screen flex flex-col">
            <div className="flex-grow flex flex-col justify-center items-center">
                <div className="bg-white bg-opacity-90 p-8 rounded-lg">
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
            <div className="bg-gray-200 p-8 flex">
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
                    <p className="text-gray-800">
                        The nutritional plan may contain the following foods:
                    </p>
                    <p ArrowRightIcon >Legume</p>
                    <p ArrowRightIcon >Fruit</p>
                    <p ArrowRightIcon >Whole grains and bakery products</p>
                    <p ArrowRightIcon >White meat</p>
                    <p ArrowRightIcon >Fish</p>
                    <p ArrowRightIcon >Dairy and vegan alternatives</p>
                    <p ArrowRightIcon >Oilseeds</p>
                    <p ArrowRightIcon >Unprocessed natural sweets</p>

                </div>
            </div>
        
            </div>
            </div>
    );
}

export default Mediterranean;