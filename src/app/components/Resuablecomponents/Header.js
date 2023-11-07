"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RegisterVendor from "../vendor/RegisterVendor";
const Header = () => {
  const [themeMode, setthemeMode] = useState(false);
  const [toggleDropdown, settoggleDropdown] = useState(false);
  const [toogleMenu, settoogleMenu] = useState(false);
  const userdata = useSelector((state) => state.user);
  const[show,setshow] = useState(false);

  console.log("user", userdata);

  useEffect(() => {
    console.log(userdata.isAuthenticated);
    console.log(userdata.userdata);
  }, [userdata]);

  const Handleclosemodal = () => {
    setshow(false)
  }
  return (
    <div className="flex bg-black	 justify-center	items-center">
      <section className="container">
        <nav className="border-gray-200 dark:bg-gray-900 dark:border-gray-700 lg:w-full lg:mx-auto lg:relative">
          <div className="flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center w-14 md:w-16 lg:w-10">
              <img src="/logos/Hero_Standard_AuroraLogo.svg" alt="Logo" />
              {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BDK</span> */}
            </a>
            <button
              data-collapse-toggle="navbar-dropdown"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-dropdown"
              aria-expanded="false"
              onClick={() => {
                settoogleMenu(!toogleMenu);
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className={`${
                toogleMenu ? "" : "hidden"
              } w-full md:block md:w-auto`}
              id="navbar-dropdown"
            >
              <ul className=" flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-[#d5af80] md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="md:text-[#fff]  block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#d5af80] md:p-0 dark:text-white md:dark:hover:text-[#d5af80] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="md:text-[#fff]  block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#d5af80] md:p-0 dark:text-white md:dark:hover:text-[#d5af80] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="md:text-[#fff]  block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#d5af80] md:p-0 dark:text-white md:dark:hover:text-[#d5af80] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contact
                  </a>
                </li>
                {userdata.isAuthenticated ? (
                    <>                  
                    <li>
                    <Link
                      href={''}
                      className="md:text-[#fff]  block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#d5af80] md:p-0 dark:text-white md:dark:hover:text-[#d5af80] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      {userdata.userdata.username}
                    </Link>
                  </li>
                  <button onClick={() => setshow(true)}>
                    <Link
                      href={''}
                      
                      className="md:text-[#fff]  block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#d5af80] md:p-0 dark:text-white md:dark:hover:text-[#d5af80] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Register as Vendor
                    </Link>
                  </button>
                </>
                ) : (
                  <li>
                    <Link 
                      
                      href={"/user/login"}
                      className="md:text-[#fff]  block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#d5af80] md:p-0 dark:text-white md:dark:hover:text-[#d5af80] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Register
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
        {show? <RegisterVendor {...userdata} Handleclosemodal={Handleclosemodal}/> : null}
      </section>
      
    </div>
  );
};

export default Header;
