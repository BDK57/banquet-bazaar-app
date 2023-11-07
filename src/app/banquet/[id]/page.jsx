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
import Image from 'next/image';
function page({params}) {
  
  const data = useSelector((state) => state.banquet?.banquetdata.find((item) => item._id === params.id))
  console.log(data)
  return (
    <section className={`h-[80vh] w-full `}>
        
    <Swiper
                className='h-full w-full'
                loop={true}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
                watchSlidesVisibility={true}
                
                modules={[Navigation, Autoplay]}
                navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                pagination={{ clickable: true, dynamicBullets: true }}
            
            >

                {
                    data.galleryImage.map((item) => {
                        console.log(item)
                        return(
                            <SwiperSlide key={item.id}>
                            <div>
                                <a className="event_item__wrapper" draggable="false">
                                    <Image
                                        alt={data.name}
                                        objectFit='cover'
                                        src={item}
                                        layout='fill'
                                        className='h-[100vh]'
                                       
                                    />
                            <div style={{position:'absolute' , zIndex:-1,top:50}}>
                                sknkjsndfk
                            </div>
                                </a>
                            </div>
                            
                        </SwiperSlide>
                        )
                       
                    })
                }

               
                


            </Swiper>
            
        </section>
  )
}

export default page