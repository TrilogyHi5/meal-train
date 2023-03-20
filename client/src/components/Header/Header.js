import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import icon from '../../utils/images/icon.png' // import icon image
import 'tailwindcss/tailwind.css'; // import Tailwind CSS
import './Header.css';
import backgroundImage from '../../utils/images/background4.jpg'; // import background image
import {
  Bars3Icon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { HiOutlineUser, HiOutlineLockClosed, HiOutlineAdjustments } from "react-icons/hi";
import { ChevronDownIcon } from '@heroicons/react/20/solid'


// import Auth from '../../utils/auth';


const profile = [
  { name: 'Personal Information', description: 'Update your height, weight, dob, or sex', href: '/personalinfo', icon: HiOutlineUser },
  { name: 'Food Preferences', description: 'Choose a diet or foods to exclude from your meal plan', href: '/preferences', icon: HiOutlineAdjustments },
  { name: 'Account Settings', description: 'Update your name, email, password, or profile picture', href: '/account', icon: HiOutlineLockClosed },
  { name: 'Meal Plan', description: 'View your meal plan', href: '/mealplan', icon: SquaresPlusIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {

  // const logout = (event) => {
  //   event.preventDefault();
  //   Auth.logout();
  // };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-10 border-b-4 border-green-300">
      <nav className="flex items-center justify-between py-4 px-8 bg-green-800 text-white" aria-label="Global">

        <Link to="/">
          <div className="container mx-auto text-center flex items-center">
            <img src={icon} className="w-9 h-9 icon" >
            </img>
            <div className="flex-1">
              <p className="flex items-center h-full text-white font-display text-4xl text-center pl-4" >Meal Train</p>
            </div>
          </div>
        </Link>

        <div className="flex lg:flex-1">
        </div>
        <div className="flex lg:hidden lg:flex lg:gap-x-12">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* {Auth.loggedIn() ? (
          <> */}


        <Popover.Group className="hidden lg:flex lg:gap-x-12" >
          <Popover className="relative">
            <Popover.Button className="flex items-center text-base font-semibold leading-6 hover:bg-green-900 rounded p-2">
              Profile
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {profile.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <Link to={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          {/* <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </Popover.Group>
          </>
        ) : (
          <> 
          <Popover.Group className="hidden lg:flex lg:gap-x-12" > */}

          <Link to="/about" className="text-base font-semibold leading-6 hover:bg-green-900 rounded p-2">
            About
          </Link>
          <Link to="/signup" className="text-base font-semibold leading-6 hidden md:block bg-blue-600 hover:bg-blue-800 text-white rounded p-2">
            Sign up
          </Link>
          <Link to="/login" className="text-base font-semibold leading-6 hover:bg-green-900 rounded p-2">
            Log in
          </Link>
        </Popover.Group>

        {/* </>
        )} */}

      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 border-green-300 border-2 rounded-xl overflow-y-auto w-80 h-2/3 bg-top-right top-0 right-0" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="flex items-center justify-between">
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
                <div className="space-y-2 py-6">

                  {/* {Auth.loggedIn() ? (
          <> */}

                  <Disclosure as="div" className="-mx-3 pl-3 pb-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex items-center mx-3 inline-block rounded-xl py-2 px-3 text-base font-semibold leading-7 text-gray-900 bg-green-100 hover:bg-gray-300">
                          Profile
                          <ChevronDownIcon
                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...profile].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="ml-3 block rounded-xl py-2 px-3 text-base font-semibold leading-7 text-gray-900 bg-green-100 my-2 inline-block hover:bg-gray-300"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  {/* <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
\          </>
        ) : (
          <> */}

                  <div>
                    <Link to="/about" className="mx-3 block rounded-xl py-2 px-3 text-base font-semibold leading-7 text-gray-900 bg-green-100 my-2 inline-block hover:bg-gray-300">
                      About
                    </Link>
                  </div>

                  <div>
                    <Link to="/login" className="mx-3 block rounded-xl py-2 px-3 text-base font-semibold leading-7 text-green-100 inline-block my-2 bg-blue-500 hover:bg-gray-300">
                      Login
                    </Link>
                  </div>

                  <div>
                    <Link to="/signup" className="mx-3 block rounded-xl py-2 px-3 text-base font-semibold leading-7 text-gray-900 inline-block my-2 bg-green-100 hover:bg-gray-300">
                      Sign Up
                    </Link>
                  </div>

                  {/* </>
        )} */}

                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
