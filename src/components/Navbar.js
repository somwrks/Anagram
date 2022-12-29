import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  var myNav = document.getElementById('mynav');
window.onscroll = function () { 
    if (document.body.scrollTop >= 200 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};
  return (
    <><nav id="mynav" class=" px-2 sm:px-4 py-5  fixed w-full z-20 top-0 ">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="https://flowbite.com/" class="flex items-center ">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Anagram Logo"/>
        <span class="self-center text-xl text-transparent bg-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600">Anagram</span>
    </a>
    <div class="flex md:order-2">
        <button type="button" class="text-white bg-gradient-to-r from-blue-400 to-pink-600 hover:text-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 -medium rounded-lg text-base px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-base text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
    </div>
          <div
            className="items-center  justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 mt-4 bg-transparent text-white rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-lg md:border-0  dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({isActive})=>(isActive?"active ":"inactive hover:md:text-blue-700")}

                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({isActive})=>(isActive?"active hover:md:text-blue-700":"inactive hover:md:text-blue-700")}

                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  className={({isActive})=>(isActive?"active hover:md:text-blue-700":"inactive hover:md:text-blue-700")}

                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({isActive})=>(isActive?"active hover:md:text-blue-700":"inactive hover:md:text-blue-700")}

                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
