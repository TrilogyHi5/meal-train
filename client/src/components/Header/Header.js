import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import icon from '../../utils/images/icon.png' // import icon image
import 'tailwindcss/tailwind.css'; // import Tailwind CSS
import backgroundImage from '../../utils/images/background4.jpg'; // import background image

import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-10 border-b-4 border-green-300">
      <nav className="flex items-center justify-between py-4 px-8 bg-green-800 text-white" aria-label="Global">
        
      <Link to="/">
          <div className="container mx-auto text-center flex items-center">
            <img src={icon} className="w-9 h-9 animate-rock" >
            </img>
            <div className="flex-1">
              <p className="flex items-center h-full text-white font-display text-4xl text-center pl-4" >Meal Train</p>
            </div>
          </div>
        </Link>

        <div className="flex lg:flex-1">
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12" >
          <Link to="/" className="text-base font-semibold leading-6 hover:bg-green-900 rounded px-4 py-2">
            Home
          </Link>
          <Link to="/about" className="text-base font-semibold leading-6 hover:bg-green-900 rounded px-4 py-2">
            About
          </Link>
          <Link to="/signup" className="text-base font-semibold leading-6 hidden md:block bg-blue-600 hover:bg-blue-800 text-white rounded px-4 py-2">
            Sign up
          </Link>
          <Link to="/login" className="text-base font-semibold leading-6 hover:bg-green-900 rounded px-4 py-2">
            Log in
          </Link>
          <Link to="/mealplan" className="text-base font-semibold leading-6 hover:bg-green-900 rounded px-4 py-2" >
            Meal Plan
          </Link>
          <Link to="/settings" className="text-base font-semibold leading-6 hover:bg-green-900 rounded px-4 py-2" >
            Settings
          </Link>
        </Popover.Group>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full border-green-300 border-2 rounded-xl overflow-y-auto max-h-80 bg-top-right top-0 right-0 w-56" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="flex items-center justify-between">
            {/* <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src={logo}
                alt=""
                
              />
            </a> */}
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div>


                <div>
                  <Link to="/" className="mx-3 block rounded-xl py-2 px-3 text-base font-semibold leading-7 text-gray-900 bg-green-100 my-2 inline-block hover:bg-gray-300 mx-2">
                    Home
                  </Link>
                </div>

                <div>
                  <Link to="/about" className="mx-3 block rounded-xl py-2 px-3 text-base font-semibold leading-7 text-gray-900 bg-green-100 my-2 inline-block hover:bg-gray-300 mx-2">
                    About
                  </Link>
                </div>

                <div>
                  <Link to="/login" className="mx-3 block rounded-xl py-2 px-3 text-base font-semibold leading-7 text-green-100 inline-block my-2 bg-blue-500 hover:bg-gray-300 mx-2">
                    Login
                  </Link>
                </div>

                <div>
                  <Link to="/signup" className="mx-3 block rounded-xl py-2 px-3 text-base font-semibold leading-7 text-gray-900 inline-block my-2 bg-green-100 hover:bg-gray-300 mx-2">
                    Sign Up
                  </Link>
                </div>

                <div>
                  <Link to="/mealplan" className="mx-3 block rounded-xl py-2 px-3 text-base font-semibold leading-7 text-gray-900 inline-block bg-green-100 my-2 hover:bg-gray-300 mx-2">
                    Meal Plan
                  </Link>
                </div>
                <div>
                  <Link to="/settings" className="mx-3 block rounded-xl py-2 px-3 text-base font-semibold leading-7 text-gray-900 inline-block bg-green-100 my-2 hover:bg-gray-300 mx-2">
                    Settings
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
