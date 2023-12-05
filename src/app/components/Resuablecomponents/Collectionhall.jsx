'use client'
import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import HallCss from '@/app/components/cssmodules/Collectionhall.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { addbanquetdata } from '@/redux/banquetSlice/banquetslice'
import heroStyle from '@/app/hero.module.css';
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import LoadingScreen from '../Customloader/loading'
function Collectionhall(props) {
  
  useEffect(() => {
    GetAllHalls();
  }, [])

  const [halls, sethalls] = useState([])
  const [isloading , setisloadin] = useState(false)
  let dispatch = useDispatch();

  const GetAllHalls = async () => {
    setisloadin(true)
    const res = await axios.get('/api/Vendor/Hall');
    setisloadin(false)

    if (res.data) {
      sethalls(res.data.data)
      dispatch(addbanquetdata(res.data.data))
    }
  }



  return (
    <>
    <section className={`${heroStyle.bannerContainer} py-10 ${heroStyle.outlineContent} container lg:relative lg:pt-10 lg:pb-16    lg:after:content-['']
    lg:after:block
    lg:after:w-2/5
    lg:after:h-full
    lg:after:absolute
    lg:after:bg-[#faf7f2]
    lg:after:top-0
    lg:after:left-[50%]
    lg:after:translate-x-[-50%]
    lg:after:z-[-1]`}>
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
                    md:after:mb-8
                    
                    
                    `}
            >
                My Halls
            </h2>
            <Swiper
                spaceBetween={20}
                loop={true}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
                watchSlidesVisibility={true}
                onSlideChange={() => {}}
                onSwiper={(swiper) => {}}
                modules={[Navigation, Autoplay]}
                navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                pagination={{ clickable: true, dynamicBullets: true }}
                breakpoints={{
                    320: {
                        // width: 640,
                        slidesPerView: 1.2,
                        centeredSlides: true,
                        // centeredSlides: true
                    },
                    // when window width is >= 768px
                    768: {
                        // width: 768,
                        slidesPerView: 2,
                    },
                    1024: {
                        // width: 768,
                        slidesPerView: 3,
                    },
                }}
            >
            
            {isloading && <LoadingScreen/>}
                {
                    halls.map((item) => {
                        return(
                            <SwiperSlide key={item._id} >
                            <div>
                                <Link  href={`/banquet/${item._id}`} className="event_item__wrapper" draggable="false"> 
                                    <Image
                                        src={"/assets/hero/homepage_hero_375.webp"}
                                        className="sm:hidden max-w-[100%]  h-auto max-h-[150px] w-[150px]"
                                        style={{
                                            filter: "brightness(0.9)",
                                        }} layout='responsive'
                                        width={425}
                                        height={369}
                                    />
                                     
                                    <Image
                                        src={"/assets/hero/homepage_hero_768.jpg"}
                                        className="xl:hidden sm:block hidden rounded-xl  max-w-[100%]  h-auto"
                                        style={{ filter: "brightness(0.9)" }} 
                                        layout='responsive' 
                                        width={768}
                                        height={600}
                                    />
                                    <Image
                                    
                                    src={"/assets/hero/homepage_hero_1280.jpg"}
                                        className="xl:block 2xl:hidden hidden rounded-xl  max-w-[100%]  h-auto"
                                        style={{ filter: "brightness(0.9)" }} layout='responsive'
                                        width={1280}
                                        height={1044}
                                    />
                                    
                                    <Image
                                         src={"/assets/hero/homepage_hero_1920.jpg"}
                                        className="2xl:block hidden rounded-xl  max-w-[100%]  h-auto"
                                        style={{ filter: "brightness(0.9)" }} layout='responsive'
                                        width={1920}
                                        height={1500}
                                    />
                                    <div
                                        className="absolute left-0 z-[5] w-full text-white padding-box h-full bottom-0"
        
                                    >
                                        <div
                                            className={`event_item__name_wrapper flex
                                                    flex-col
                                                    justify-end
                                                    items-center
                                                    w-max-content;
                                                    absolute
                                                    bottom-[50%]
                                                    left-[50%]
                                                    translate-x-[-50%]
                                                    translate-y-[50%]
                                                
                                                    before:content-[" "]
                                                    before:block
                                                    before:w-full
                                                    before:h-[1px]
                                                    before:bg-white
                                                    before:origin-left
                                                    before:scale-0
                                                    hover:before:scale-[1]
                                                    before:transition-transform
                                                    before:duration-[0.9s]
                                                    before:ease-in
                                                    
                                                    after:content-[" "]
                                                    after:block
                                                    after:w-full
                                                    after:h-[1px]
                                                    after:bg-white
                                                    after:origin-left
                                                    after:scale-0
                                                    hover:after:scale-[1]
                                                    after:transition-transform
                                                    after:duration-[0.9s]
                                                    after:ease-in
                                                    
                                                    `}
                                            style={{
                                                transitionTimingFunction: "ease",
                                                transitionDuration: ".8s",
                                                transitionProperty: "bottom,transform",
                                                width: "-moz-max-content",
                                            }}
                                        >
                                            <span className="tracking-[3.6px] leading-6 text-white text-lg font-[Cinzel] font-extralight">{item.name}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>
                        )
                       
                    })
                }

               
                


            </Swiper>
            <div>
                <div className="carucel_arrow arrow-right hidden lg:block  lg:absolute lg:bottom-[75%] lg:right-0 lg:left-[unset]  lg:translate-x-[-20px] lg:translate-y-[-80px] lg:z-10 text-[#2f4d4b] lg:w-max-content lg:text-sm lg:leading-5 lg:font-[Cinzel] lg:align-middle">
                    <div className="carucel_prev_arrow lg:flex lg:items-center lg:mr-[128px]">
                        <span className="name">previous</span>
                        <div
                            className="arrow_wrapper lg:ml-2 lg:w-[40px]
                   lg:h-[40px] lg:border-2 lg:border-[#2f4d4b] lg:relative lg:overflow-hidden
                      lg:after:content-['']
                      lg:after:block
                      lg:after:absolute
                      lg:after:w-full
                      lg:after:h-full
                      lg:after:right-[-100%]
                      lg:after:top-0
                      lg:after:bg-[#2f4d4b]
                  "
                            style={{ transition: "color .6s ease" }}
                        >
                            <svg
                                className="lg:absolute
    lg:top-[50%]
    lg:left-[50%]
    
    lg:translate-x-[-50%]
    lg:translate-y-[-50%]
    text-2xl"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="xMinYMin meet"
                                viewBox="0 0 18 9.873"

                            >
                                <path d="M4.937 9.873l.8-.8-3.568-3.568H18V4.373H2.171L5.739.805l-.8-.8L0 4.936z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="carucel_arrow hidden lg:block arrow-left lg:absolute lg:bottom-[75%] lg:right-0 lg:left-[unset] lg:bottom-[unset] lg:translate-x-[-20px] lg:translate-y-[-80px] lg:z-10 text-[#2f4d4b] lg:w-max-content lg:text-sm lg:leading-5 lg:font-[Cinzel] lg:align-middle ">
                    <div className="carucel_next_arrow lg:flex lg:flex-row-reverse lg:items-center lg:mr-[28px]">
                        <span className="name">next</span>
                        <div
                            className="arrow_wrapper lg:mr-2 lg:w-[40px]
                   lg:h-[40px] lg:border-2 lg:border-[#2f4d4b] lg:relative lg:overflow-hidden
                      lg:after:content-['']
                      lg:after:block
                      lg:after:absolute
                      lg:after:w-full
                      lg:after:h-full
                      lg:after:right-[-100%]
                      lg:after:top-0
                      lg:after:bg-[#2f4d4b]"
                        >
                            <svg
                                className=' lg:absolute
                      lg:top-[50%]
                      lg:left-[50%]
                      
                      lg:translate-x-[-50%]
                      lg:translate-y-[-50%]
                      text-2xl"'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 18 9.873"
                                preserveAspectRatio="xMinYMin meet"

                            >
                                <path d="M13.063 0l-.8.8 3.568 3.568H0V5.5h15.829l-3.568 3.568.8.8L18 4.937z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <Link className="button max-w-xs mt-5" style={{ marginTop: "20px" }} href="/catalog">
                explore more
            </Link>
        </section>
    </>
        
  )
}

export default Collectionhall