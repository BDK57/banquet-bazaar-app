'use client'
import React, { useState } from "react";
import BannerSection from "../components/Resuablecomponents/BannerSection";
import HeroSection from "../components/Resuablecomponents/HeroSection";
import Cards from "../components/Resuablecomponents/Cards";
import { useSelector } from "react-redux";

const page = () => {

    const bdata = useSelector((state) => state.banquet?.banquetdata)
    console.log("banquet data is", bdata)
    const [txt, settext] = useState('')
    const [filterhalls, setfilterHalls] = useState(bdata)
    const [selectedArea, setSelectedArea] = useState("Select Value")

    const handlesearch = (text) => {
        if (text) {
            const updatedList = bdata.filter((item) => {
                return item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1;
            });
            setfilterHalls(updatedList)
            settext(text)
        }
        else {
            setfilterHalls(bdata)
            settext(text)
        }
    }



    return (
        <>

            <HeroSection />
            <BannerSection />
            <section className="container">
                <div class="h-full w-screen bg-white">
                    <div class="container  mx-auto flex justify-center items-center p-2 md:p-0">
                        <div class="border border-gray-300 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg">
                            <div class="grid grid-cols-1 w-[80vw] gap-4">
                                <div class="grid  gap-2 border border-gray-200 p-2 rounded">
                                    <div class="flex border rounded bg-gray-300 items-center p-2 w-full ">
                                        <svg class="fill-current text-gray-800 mr-2 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50">
                                            <path class="heroicon-ui"
                                                d="M14 5.62l-4 2v10.76l4-2V5.62zm2 0v10.76l4 2V7.62l-4-2zm-8 2l-4-2v10.76l4 2V7.62zm7 10.5L9.45 20.9a1 1 0 0 1-.9 0l-6-3A1 1 0 0 1 2 17V4a1 1 0 0 1 1.45-.9L9 5.89l5.55-2.77a1 1 0 0 1 .9 0l6 3A1 1 0 0 1 22 7v13a1 1 0 0 1-1.45.89L15 18.12z" />
                                        </svg>
                                        <input value={txt} onChange={(e) => handlesearch(e.target.value)} type="text" placeholder="Enter name"
                                            class="bg-gray-300 max-w-full focus:outline-none text-gray-700" />
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-center"><button class="p-2 border w-1/4 rounded-md bg-[#d5af80] text-white">Search</button></div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6  mx-auto">
                    <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 lg:grid-cols-3 mb-5">
                        {filterhalls?.length > 0 ?

                            <Cards filterhalls={filterhalls} isdelete={false}  />

                            : (
                                <div>
                                    sdklnf
                                </div>
                            )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default page