import React from "react";
import { ArrowRightIcon } from '@heroicons/react/solid'
import lowCarbImage from '../utils/images/lowCarb.webp'; // import background image

import { Link } from 'react-router-dom';

function LowCarb() {
    return (
        <div className="bg-cover bg-no-repeat bg-fixed h-screen"
            style={{ backgroundImage: `url(${lowCarbImage})` }}>
        <div className="bg-cover bg-center h-screen flex flex-col">
            <div className="flex-grow flex flex-col justify-center items-center">
                <div className="bg-white bg-opacity-80 p-8 rounded-3xl">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Low Carb Diet
                        </h1>
                        <p className="text-gray-800 mb-4">
                            The Low-Carb nutritional plan is the most effective binding for people who want a rapid weight loss, immediately visible.</p>
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
                            It is a dietary plan rich in proteins and green vegetables that provides quick results in the process of slimming and digestive comfort due to the high intake of fiber.

                            Ideal for people who have lost less than 10 kilograms and who want quick results. The Low-Carb food plan is a tested and effective choice for the loss in kilograms and centimeters.

                            It is designed for a decrease of 5-6% of body weight per month (as long as the indications regarding sports and daily physical movement are followed).
                        </p>
                    </div>
                    <div className="w-1/2 pl-4">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            What's in it
                        </h2>
                        <p className="text-gray-800">
                            The nutritional plan may contain the following foods:
                        </p>
                        <p ArrowRightIcon >Green vegetables</p>
                        <p ArrowRightIcon >Few berries</p>
                        <p ArrowRightIcon >Higher amounts of meat</p>
                        <p ArrowRightIcon >Fish</p>
                        <p ArrowRightIcon >Eggs</p>
                        <p ArrowRightIcon >Few dairy and vegan alternatives</p>
                        <p ArrowRightIcon >Oilseeds</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LowCarb;