'use client'
import React from 'react'
import Image from 'next/image'
import heroStyle from '@/app/hero.module.css';
function Menu() {
  return (
    <section className={`${heroStyle.bannerContainer} py-10 ${heroStyle.outlineContent} container`}>
    <div className="outline-content">
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
        
        
        `}
        >
            Menu
        </h2>
        <div className="homeWappper lg:flex lg:mt-5">
            <div
                className="_image_wrapper_down venue_image show
                relative
                w-full
              
                object-cover
                z-0 
            
            "
            >
                {/* <source srcSet="/assets/homepage/venue/Venue_375.webp" type="image/webp" /> */}
                <Image
                    src={"/assets/homepage/menu/Menu_375.jpg"}
                    width={425}
                    height={369}
                    layout="responsive"
                    className=" sm:hidden max-w-[100%]  h-auto"
                    // style={{ width1: "100%", height: "100%" }}
                    style={{
                        filter: "brightness(0.9)",
                        width: "100% !important",
                        height: "100% !important",
                    }}
                />
                <Image
                    width={768}
                    height={600}
                    src={"/assets/homepage/menu/Menu_768.jpg"}
                    className="xl:hidden sm:block hidden   max-w-[100%]      w-full
h-full
relative
                    object-cover"

                    style={{
                        filter: "brightness(0.9)",

                        // width: "100% !important", height: "100% !important"
                    }}
                />
                <Image
                    width={1280}
                    height={1044}
                    layout="responsive"
                    src={"/assets/homepage/menu/Menu_1280.jpg"}
                    className="xl:block 2xl:hidden hidden max-w-[100%]  h-auto"
                    style={{ filter: "brightness(0.9)", width: "100% !important", height: "100% !important" }}
                />
                <Image
                    width={1920}
                    height={1500}
                    layout="responsive"
                    src={"/assets/homepage/menu/Menu_1920.jpg"}
                    className="2xl:block hidden   max-w-[100%]  h-auto"
                    style={{ filter: "brightness(0.9)" }}
                />
                {/* <picture>
                    <source media="(min-width: 1920px)" srcSet="/assets/homepage/venue/Venue_1920.webp" type="image/webp" />
                    <source media="(min-width: 1920px)" srcSet="/assets/homepage/venue/Venue_1920.jpg" />
                    <source media="(min-width: 1280px)" srcSet="/assets/homepage/venue/Venue_1280.webp" type="image/webp" />
                    <source media="(min-width: 1280px)" srcSet="/assets/homepage/venue/Venue_1280.jpg" />
                    <source media="(min-width: 768px)" srcSet="/assets/homepage/venue/Venue_768.webp" type="image/webp" />
                    <source media="(min-width: 768px)" srcSet="/assets/homepage/venue/Venue_768.jpg" />
                    <source srcSet="/assets/homepage/venue/Venue_375.webp" type="image/webp" />
                    <img className="_image ls-is-cached lazyloaded" src="/assets/homepage/venue/Venue_375.jpg" alt title />
                </picture> */}
            </div>
            <div
                className="venue_summary     
                lg:w-11/12
             z-[1]
             relative
             bg-[#faf7f2]
             py-[1.875rem]
             px-[1.25rem]"
            >
                <div className="text_appear down show">
                    <p
                        className="venue_text     text-center
// font: normal normal 300 12px/30px Roboto;
text-xs
tracking-normal
font-light
leading-8
text-black

md:text-sm
md:leading-8 
md:text-left"
                    >
                        Our venue is newly renovated and designed to serve events from 250-300 people. The venue is about 9,400 square feet and boasts a
                        luxurious grand foyer, bridal suite, and main hall which is about 4,800 square feet. The large dance floor, where the speakers and
                        projects are focused on can be changed with custom themes to fit your event or personality. Our kitchen has a safe working environment
                        and contains the latest in cooking appliances to ensure your food arrives on time and perfectly prepped.
                    </p>
                </div>
                <a className="button venue-btn md:w-3/5" href="/venue">
                    explore venue
                </a>
            </div>
        </div>
    </div>
</section>
  )
}

export default Menu