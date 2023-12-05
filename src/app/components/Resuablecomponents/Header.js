"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RegisterVendor from "../vendor/RegisterVendor";
import axios from "axios";
import { ToastError, ToastSuccess } from "../toasters/taoster";
import { usePathname, useRouter } from 'next/navigation';
import Image from "next/image";
import vedorprofile from '../../../../vendor.png'
const Header = () => {


  const [toogleMenu, settoogleMenu] = useState(false);
  const userdata = useSelector((state) => state.user);
  const [show, setshow] = useState(false);
  const [showprofile, setprofile] = useState(false)
  let router = useRouter();
  let dispatch = useDispatch();
  const pathname = usePathname()

  const Handleclosemodal = () => {
    setshow(false)
  }

  const logout = async () => {
    try {

      const res = await axios.get("/api/users/logout")
      console.log("res" + res)
      // dispatch(logout())
      ToastSuccess('Logout Successfully')
      router.push('/')


    } catch (error) {
      ToastError("Error: " + error.response)
    }
  }


  return (
    <div className="flex bg-black	 justify-center	items-center">
      <section className="container">
        <nav className="border-gray-200 dark:bg-gray-900 dark:border-gray-700 lg:w-full lg:mx-auto lg:relative">
          <div className="flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href={'/'} className="flex items-center w-14 md:w-16 lg:w-10">
              <img src="/logos/Hero_Standard_AuroraLogo.svg" alt="Logo" />
              {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BDK</span> */}
            </Link>
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
              className={`${toogleMenu ? "" : "hidden"
                } w-full md:block md:w-auto`}
              id="navbar-dropdown"
            >
              <ul style={{ alignItems: 'center' }} className="flex  font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-[#d5af80] md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent active:text-[#e6c49b]"
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
                {userdata?.isAuthenticated ? (
                  <>

                    <div className="userview" style={{
                      backgroundColor: 'white',
                      height: 50,
                      width: 50,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 50,
                      cursor: 'pointer'
                    }} onClick={() => setprofile(!showprofile)}>
                      <p style={{ fontSize: 30 }}>{userdata?.userdata.email[0]}</p>
                    </div>
                    {
                      showprofile && <div className="menueProfile">

                        <li onClick={() => router.push('/dashboard')} className="singleitem">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            stroke="#212b36"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            fill="none"
                          >
                            <circle cx="12" cy="8" r="5" />
                            <path d="M3,21 h18 C 21,12 3,12 3,21" />
                          </svg>
                          <Link
                            className="menuitemtext"
                            href={''}
                          >

                            Your Profile
                          </Link>
                        </li>
                        {
                          userdata?.userdata?.usertype !== 'vendor' && <button className="singleitem" onClick={() => {
                            setshow(true)
                            setprofile(!showprofile)
                          }}>
                            <Image height={20} width={20} src={vedorprofile} />
                            <Link
                              className="menuitemtext"
                              href={''}
                            >
                              Vendor
                            </Link>
                          </button>
                        }

                        <button className="singleitem" onClick={() => logout()}>
                          <svg width="20"
                            height="20" class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M173 873.3c-11 0-20-9-20-20V173.9c0-11 9-20 20-20h320.7c11 0 20-9 20-20v-15c0-11-9-20-20-20H153h-35c-11 0-20 9-20 20v809.3h395.7c11 0 20-9 20-20v-15c0-11-9-20-20-20H173z" fill="#2680F0" /><path d="M609.3 273.3c-7.8-7.8-7.8-20.5 0-28.3l10.6-10.6c7.8-7.8 20.5-7.8 28.3 0l264.9 264.9c7.8 7.8 7.8 20.5 0 28.3L648.4 792.8c-7.8 7.8-20.5 7.8-28.3 0l-10.6-10.6c-7.8-7.8-7.8-20.5 0-28.3l199-199c7.8-7.8 5.1-14.1-5.9-14.1H326.1c-11 0-20-9-20-20v-15c0-11 9-20 20-20h475.7c11 0 13.6-6.4 5.9-14.1L609.3 273.3z" fill="#2680F0" /></svg>
                          <Link
                            href={''}
                            className="menuitemtext"
                          >
                            Logout
                          </Link>
                        </button>
                      </div>
                    }



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
        {show ? <RegisterVendor {...userdata} Handleclosemodal={Handleclosemodal} /> : null}
      </section>

    </div >
  );
};

export default Header;
