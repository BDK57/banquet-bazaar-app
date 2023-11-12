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
import Testimonials from '@/app/components/Resuablecomponents/Testimonials';
import Footer from '@/app/components/Resuablecomponents/Footer';
function page({ params }) {
    console.log(params)
    const data = useSelector((state) => state.banquet?.banquetdata.find((item) => item._id === params.id))
    console.log("data is", data)
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


            </section>


            <section className='mt-5 p-5'>

                <h2
                    className={`text-xl font-normal sm:text-4xl sm:font-medium flex flex-col justify-center items-center text-center uppercase font-[Cinzel] 
        before:content-[url(../../public/icons/Diamond.9ed26887ed10ae24d374b45f5b347613.svg)]  before:text-[#d5af80] 
        before:w-[18px] 
        before:mb-3  
        before:block 
        before:leading-[1] 
        before:2xl:w-[18px] 
        
        // before:transform: rotate(0turn); // before:transition: transform 1.9s ease;]
        
        // After

        // after:transition: width 1.9s ease
        after:content-[" "]
        after:h-[1px]
        after:bg-[#d5af80]
        after:w-1/5
        after:mt-3
        after:mb-5
        md:after:w-2/5
        `}
                >
                    {data.name}
                </h2>
                <div
                    className="tracking-[0.16px] text-sm text-center mt-5 mb-5"
                >
                    {data.Description}

                </div>
                <div style={{ maxWidth: 400,  maxHeight: 400, display: 'flex', flexDirection: 'column', padding: 10 }}>
                    <div style={{ display: 'flex', }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-20">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <h2 style={{marginLeft:20,fontSize:20 , fontFamily:'Cinzel'}}>{data.location}</h2>
                    </div>
                    
                </div>
            </section>
            <Testimonials/>
            <Footer/>

        </>
    )
}

export default page