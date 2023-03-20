import React, { useState } from 'react';
import People from '../components/TeamInfo/TeamInfo';
import backgroundImage3 from '../utils/images/background3.jpg'; // import background image
import andy from '../utils/images/andy.jpg';
import jeff from '../utils/images/jeff.jpg';
import maggie from '../utils/images/Maggie-Matson.png';

const people = [
  {
    name: 'Andy Phinney',
    role: 'Content Developer',
    imageUrl: andy,
  },
  {
    name: 'Aletoria Booker',
    role: 'Backend Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Fiama Gaitan',
    role: 'Backend Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Maggie Matson',
    role: 'Frontend Developer',
    imageUrl: maggie
  },
  {
    name: 'Jeffrey Gilbert',
    role: 'Frontend Developer',
    imageUrl: jeff,
  },
];


export default function About() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div class="bg-fixed top-0 left-0 w-full h-full bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage3})` }}>
<div className="pb-16">
      <div className="relative isolate px-6 pt-2 lg:px-8">
        <div className="w-full lg:w-1/2 lg:ml-1/4 pt-20">
          <div className="relative bg-gray-200 bg-opacity-70 rounded-3xl p-8 my-5">
            <h1 className="text-4xl font-bold text-center">
              More About Meal Train
            </h1>
            <p className="mt-2 text-lg rounded-2xl py-2 px-3 border-2 boreder-gray-600 text-base font-semibold text-gray-900 bg-green-100 my-2 inline-block mx-2">
              Meal Train is made up of regular people just like you. As a fellow regular person, you understand how frustrating dieting can be.
              In fact, 88% of people, a.k.a. regular people, give up on dieting within 30 days. You know all of the typical reasons why:
              overestimating portion sizes, tedious calorie counting, killer cravings for what you can no longer eat, and the list goes on.
              It is no wonder most people are unable to even diet for a month. Essentially, failed diets have two major problems.
              First, they are a lot of work to keep up with, and second, surprisingly, they often cut out healthy foods leading to an unbalanced diet,
              which actually ramps up cravings for unhealthy foods. We decided to combat those two problems by making a dieting app that is simple to use
              and purposefully includes a balanced diet.
            </p>
            <p className="mt-2 text-lg rounded-2xl py-2 px-3 text-base font-semibold text-gray-900 bg-green-100 my-2 inline-block mx-2">
              Meal train takes all of the guesswork and counting out of dieting by generating daily meal plans with simple, easy to cook ingredients.
              These meals are prepared according to portions, so you do not have to worry about estimating what “a handful” of mashed potatoes looks like.
              When you set up your profile you pick from one of three basic meal templates: mediterranean, low-carb, and weight maintenance.
              You can also feel good about what you eat as most of the ingredients used in Meal Train are minimally processed and found in all major supermarket chains.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <svg
            className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="relative bg-gray-200 bg-opacity-70 rounded-3xl inline-block p-2 mx-8 my-10 flex-1">
        <div className="max-w-7xl gap-x-8 px-6 lg:px-8 xl:grid-cols-3 my-5">
          <div className="max-w-2xl ">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl bg-green-100 rounded-2xl p-4 ">Meet the Meal Train team!</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 bg-green-100 rounded-2xl p-4 font-semibold text-xl">
              We're just a bunch of regular people.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 bg-green-100 rounded-2xl p-4 mt-4 mx-6">
            <People people={people} />
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
};
