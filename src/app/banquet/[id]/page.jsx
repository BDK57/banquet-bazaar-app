'use client'
import Event from '@/app/components/Resuablecomponents/Event'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import heroStyle from '@/app/hero.module.css';
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function page({params}) {
  console.log(params)
  const data = useSelector((state) => state.banquet?.banquetdata.find((item) => item._id === params.id))
  console.log(data)
  return (
    <>
               <section className={`${heroStyle.hero__section} relative h-full`}>
                <img
                    src={"/assets/hero/homepage_hero_375.webp"}
                    className=" sm:hidden max-w-[100%]  h-auto hero__image"
                    style={{
                        filter: "brightness(0.7)",
                    }}
                    layout='responsive'
                />
                <img
                    src={"/assets/hero/homepage_hero_768.jpg"}
                    className="xl:hidden sm:block hidden  max-w-[100%]  h-auto  hero__image"
                    style={{ filter: "brightness(0.7)" }}
                    layout='responsive'
                />
                <img
                    src={"/assets/hero/homepage_hero_1280.jpg"}
                    className="xl:block 2xl:hidden hidden  max-w-[100%]  h-auto  hero__image"
                    style={{ filter: "brightness(0.7)" }}
                    layout='responsive'
                />
                <img
                    src={"/assets/hero/homepage_hero_1920.jpg"}
                    className="2xl:block hidden  max-w-[100%]  h-auto  hero__image"
                    layout='fill'
                    style={{ filter: "brightness(0.7)" }}
                />

                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] " style={{ width: "calc(100% - 32px)" }}>
                    <div className="relative flex flex-col justify-center container mx-auto">
                        <img src="/logos/Hero_Standard_AuroraLogo.svg" alt="Logo" className={`${heroStyle.backBlue} ${heroStyle.hero_logo}`} />
                        <h2 className={heroStyle.hero__subtitle}>welcome to</h2>
                        <h1 className={heroStyle.hero__title}>{data.name}</h1>
                        <h3 className={heroStyle.hero__desk}> HALL</h3>
                        <div className={heroStyle.hero__since_wrapper}>
                            <h4 className={heroStyle.hero__since}></h4>
                            <div className={heroStyle.hero__since_stars}>
                                <img src="/icons/Star_Icon.svg" alt="star" className=" ls-is-cached lazyloaded" width={8} height={7} />
                                <img src="/icons/Star_Icon.svg" alt="star" className=" ls-is-cached lazyloaded" width={8} height={7} />
                                <img src="/icons/Star_Icon.svg" alt="star" className=" ls-is-cached lazyloaded" width={8} height={7} />
                                <img src="/icons/Star_Icon.svg" alt="star" className=" ls-is-cached lazyloaded" width={8} height={7} />
                                <img src="/icons/Star_Icon.svg" alt="star" className=" ls-is-cached lazyloaded" width={8} height={7} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="my-10 bg-slate-200  dark:bg-gray-900 dark:hover:bg-gray-800 hover:bg-slate-300 w-fit mx-auto p-10 rounded-xl sm:gap-10  flex justify-center flex-col sm:flex-row items-center">
                    <h1 className="text-3xl font-semibold mt-3 dark:text-white">Dark Pic</h1>
                    <p className="text-xl font-light dark:text-blue-500 sm:hidden">by Pexels</p>
                </div> */}
            </section>
</>
  )
}

export default page