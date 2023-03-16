import { Fragment, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  //ArrowPathIcon,
  Bars3Icon,
  // ChartPieIcon,
  // CursorArrowRaysIcon,
  // FingerPrintIcon,
  // SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
//import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Header({ currentPage, handlePageChange }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          {/* <a href="#about" className="-m-1.5 p-1.5">
            <span className="sr-only">Meal Train</span>
            <img className="h-8 w-auto" src={logo} alt="" />
          </a> */}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {/* <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Product
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
            </Transition>
          </Popover> */}

            {/* <Link to="#about" onClick={() => handlePageChange('About')} className="{currentPage === 'About' ? 'nav-link active' : 'nav-link'} text-sm font-semibold leading-6 text-gray-900" >
              About
            </Link> */}
            <Link to="/signup"  onClick={() => handlePageChange('Signup')} className="{currentPage === 'Signup' ? 'nav-link active' : 'nav-link'} text-sm font-semibold leading-6 text-gray-900" >
              Signup
            </Link>
            <Link to="/login" onClick={() => handlePageChange('Login')} className="{currentPage === 'Login' ? 'nav-link active' : 'nav-link'} text-sm font-semibold leading-6 text-gray-900" >
              Login
            </Link>
            <Link to="/mealplan" onClick={() => handlePageChange('Mealplan')} className="{currentPage === 'Mealplan' ? 'nav-link active' : 'nav-link'} text-sm font-semibold leading-6 text-gray-900" >
              Meal Plan
            </Link>

        </Popover.Group>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">

                {/* <Link to="/about"
                  onClick={() => handlePageChange('About')} className="{currentPage === 'About' ? 'nav-link active' : 'nav-link'}-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </Link> */}
                <Link to="/login"
                  onClick={() => handlePageChange('Login')} className="{currentPage === 'Login' ? 'nav-link active' : 'nav-link'}-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Login
                </Link>
                <Link to="/signup"
                  onClick={() => handlePageChange('Signup')} className="{currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Sign Up
                </Link>
                <Link to="/mealplan"
                  onClick={() => handlePageChange('Mealplan')} className="{currentPage === 'Mealplan' ? 'nav-link active' : 'nav-link'}-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Meal Plan
                </Link>


              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

