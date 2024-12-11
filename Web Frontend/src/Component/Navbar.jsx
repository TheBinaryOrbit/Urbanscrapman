import React, { useState } from 'react';
import logo from '../assets/navlogo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="py-1 transition-all duration-500 w-[90%] mx-auto fixed top-5 left-[50%] bg-[#FFFFFFDD] border-2 border-gray-300 translate-x-[-50%] rounded-2xl z-50">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex justify-between lg:flex-row">
                        <NavLink to={'/'} className="flex items-center">
                            <img src={logo} alt="Logo" className="w-48 mt-2 mb-2" />
                        </NavLink>
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="navbar-default"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`lg:flex lg:pl-11 w-full ${isMenuOpen ? 'block' : 'hidden'
                            }`}
                        id="navbar-default"
                    >
                        <ul className="lg:flex items-center flex-col mt-4 lg:mt-0 lg:flex-row lg:ml-auto gap-4">
                            <li>
                                <NavLink
                                    to={'/'}
                                    className="nav-link mb-2 block lg:mr-6 md:mb-0 lg:text-left text-center font-medium"
                                    onClick={toggleMenu}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/rates'}
                                    className="nav-link mb-2 block lg:mr-6 md:mb-0 lg:text-left text-center font-medium"
                                    onClick={toggleMenu}
                                >
                                    Rates
                                </NavLink>
                            </li>
                        </ul>
                        <div className="flex items-center  justify-center">
                            {
                                isMenuOpen ?
                                    (
                                        <NavLink
                                            to={'/'}
                                            className="nav-link mb-2 block lg:mr-6 md:mb-0 lg:text-left text-center font-medium"
                                            onClick={toggleMenu}
                                        >
                                            Login
                                        </NavLink>
                                    )
                                    :
                                    (
                                        <button className="bg-green-50 text-green-600 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-green-100">
                                            Login
                                        </button>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
