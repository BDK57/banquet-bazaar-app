'use client'
import Event from '@/app/components/Resuablecomponents/Event'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import heroStyle from '@/app/hero.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from 'next/navigation';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Testimonials from '@/app/components/Resuablecomponents/Testimonials';
import Footer from '@/app/components/Resuablecomponents/Footer';
import { HeartFilled, MergeCellsOutlined } from '@ant-design/icons';
import { ToastError, ToastSuccess } from '@/app/components/toasters/taoster';
import axios from 'axios';
import { favoritesHall, login } from '@/redux/userslice/userslice';
function page({ params }) {


    const data = useSelector((state) => state.banquet?.banquetdata.find((item) => item._id === params.id))
    const userdata = useSelector((state) => state.user);

    let dispatch = useDispatch();

    const addtoFavoritesApi = async () => {
        console.log("userdata",userdata)
        if(userdata.userdata !== ''){
                const response = await axios.post(`/api/favHalls/${params.id}`);
                console.log("repose",response)
                if(response.data.status == 200){
                    ToastSuccess(response.data.message);
                    dispatch(favoritesHall(params.id))
                    dispatch(login(response.data.data))
                }
                else{
                    ToastError(response.data.message)
                }
            
        }
        else{
         ToastError("You have to Register Yourself For this Operation");
        }
    }



    return (
        <>
            <div onClick={addtoFavoritesApi} className='fixed right-2 bottom-0 z-40 mt-5 mb-5 hover:shadow-form rounded-md bg-white pt-1 pb-1 px-2 text-center text-base font-semibold text-white outline-none hover:bg-transparent border   hover:border-mainColor hover:text-mainColor transition-all' style={{ boxShadow: "0px 0px 13px 2px rgba(0,0,0,0.3)" }}>
                <HeartFilled className="text-mainColor text-xl" />
            </div>
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
               
            </section>
            <Testimonials />
            <Footer />

        </>
    )
}

export default page