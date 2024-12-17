import React from 'react'
import logo from '../../../assets/logo.png'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full p-5 bg-[#E3F2F5]'>
            <footer class="">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                    <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 gap-y-8 md:gap-8 py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">
                        <div class="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                            <img src={logo} alt="" className='w-48' />
                        </div>

                        <div class="lg:mx-auto text-left ">
                            <h4 class="text-lg text-gray-900 font-medium mb-7">Pages</h4>
                            <ul class="text-sm  transition-all duration-500">
                                <li class="mb-6"><Link to={'/'} class="text-gray-600 hover:text-gray-900">Home</Link></li>
                                <li class="mb-6"><Link to={'/login'} class="text-gray-600 hover:text-gray-900">Login</Link></li>
                                <li class="mb-6"><Link to={'/singup'} class="text-gray-600 hover:text-gray-900">Singup</Link></li>
                            </ul>
                        </div>

                        <div class="lg:mx-auto text-left ">
                            <h4 class="text-lg text-gray-900 font-medium mb-7">Links</h4>
                            <ul class="text-sm  transition-all duration-500">
                                <li class="mb-6"><Link to={'/faq'} class="text-gray-600 hover:text-gray-900">FAQ's</Link></li>
                                <li class="mb-6"> <Link to={'/rates'} class=" text-gray-600 hover:text-gray-900">Rates</Link> </li>
                                <li><HashLink to={'/#contact'} class=" text-gray-600 hover:text-gray-900">Contact</HashLink></li>
                            </ul>
                        </div>

                        <div class="lg:mx-auto text-left ">
                            <h4 class="text-lg text-gray-900 font-medium mb-7">Support</h4>
                            <ul class="text-sm  transition-all duration-500">
                                <li class="mb-6"><Link to={'/'} class="text-gray-600 hover:text-gray-900">Customer Support</Link></li>
                                <li class="mb-6"><Link to={'/'} class="text-gray-600 hover:text-gray-900">Terms & Conditions</Link></li>
                                <li class="mb-6"><Link to={'/'} class="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div class="py-7 border-t border-gray-700">
                        <div class="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                            <span class="text-sm text-gray-500">@UrbanScrapman 2024, All rights reserved.</span>
                            <div class="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
                                <p class="text-sm text-gray-700 font-bold flex justify-center items-center gap-3">Developed By <a href="https://www.github.com/7anish" target='blank' className='hover:underline flex justify-center items-center gap-1'><FaGithub />7anish</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
