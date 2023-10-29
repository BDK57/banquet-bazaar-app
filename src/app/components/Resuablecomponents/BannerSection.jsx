'use client'
import React from 'react'
import heroStyle from '@/app/hero.module.css';
function BannerSection() {
  return (
    <section className={`${heroStyle.bannerContainer} py-10 ${heroStyle.outlineContent} container`}>
    <h2
        className={`text-xl font-semibold sm:text-4xl sm:font-medium flex flex-col justify-center items-center text-center uppercase font-[Cinzel] 
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
        after:w-4/5
        after:mt-3
        
        
        `}
    >
        welcome to Banquet Bazzar
    </h2>
    <p className={`text-lg font-light my-5 text-center mx-auto leading-relaxed md:w-4/5 `}>
        Banquet Bazzar is one of the most contemporary and technologically advanced banquet halls in Los Angeles. We offer specialized, all inclusive
        amenities and services which set us apart from the competition. Whether it's lounging at our custom bridal suite after a photoshoot or our
        one of a kind speaker system designed to project sound only at the dance floor, we have considered every detail and perfected your
        experience at Banquet Bazzar. We take pride in the versatility and quality of our venue and services. Our management and staff work tirelessly to
        ensure that all events go above and beyond your expectations. Whether it’s a corporate event or your wedding day, let’s make it a one of a
        kind experience
    </p>
</section>
  )
}

export default BannerSection