import React, { useState } from 'react';
import People from '../TeamInfo';
import andy from '../../utils/images/andy.jpg';
import jeff from '../../utils/images/jeff.jpg';

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
        imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
      <div className="bg-white">
        <div className="relative isolate px-6 pt-2 lg:px-8">
          {/* <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <svg
              className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
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
          </div> */}
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                More About Meal Train
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Meal Train is made up of regular people just like you. As a fellow regular person, you understand how frustrating dieting can be. 
              In fact, 88% of people, a.k.a. regular people, give up on dieting within 30 days. You know all of the typical reasons why: 
              overestimating portion sizes, tedious calorie counting, killer cravings for what you can no longer eat, and the list goes on. 
              It is no wonder most people are unable to even diet for a month. Essentially, failed diets have two major problems. 
              First, they are a lot of work to keep up with, and second, surprisingly, they often cut out healthy foods leading to an unbalanced diet, 
              which actually ramps up cravings for unhealthy foods. We decided to combat those two problems by making a dieting app that is 
              simple to use and purposefully includes a balanced diet.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
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
        <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet the Meal Train team!</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're just a bunch of regular people.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            <People people={people} />
          </ul>
        </div>
      </div>
      </div>
    )
  };
