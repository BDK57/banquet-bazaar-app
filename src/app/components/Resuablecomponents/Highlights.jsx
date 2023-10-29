'use client'
import React from 'react'
import Image from 'next/image';
import heroStyle from '@/app/hero.module.css';
import { useState } from 'react';
const Highlights = () => {
  const [accordian, setaccordian] = useState(false);
  return (
    <section className={`${heroStyle.bannerContainer} py-10 ${heroStyle.outlineContent} container`}>
    <div className="outline-content relative overflow-y-hidden">
        <div className="relative">
            <Image
                src={"/assets/homepage/highLights/Highlights_375.webp"}
                width={425}
                height={369}
                layout="responsive"
                className=" sm:hidden max-w-[100%]    w-full  h-full  absolute  top-0  left-0  z-[-1]  object-contain "
                // style={{ width1: "100%", height: "100%" }}
                style={{
                    filter: "brightness(1)",
                    width: "100% !important",
                    height: "100% !important",
                }}
            />
            <Image
                width={768}
                height={600}
                src={"/assets/homepage/highLights/Highlights_768.jpg"}
                className="xl:hidden sm:block hidden rounded-xl  max-w-[100%] w-full h-full absolute top-0 left-0 z-[-1] object-contain "
                layout="responsive"
            />
            <Image
                width={1280}
                height={1044}
                layout="responsive"
                src={"/assets/homepage/highLights/Highlights_1280.jpg"}
                className="xl:block 2xl:hidden hidden rounded-xl  max-w-[100%] w-full h-full  absolute top-0 left-0 z-[-1] object-contain"
                style={{ width: "100% !important", height: "100% !important" }}
            />
            <Image
                width={1920}
                height={1500}
                layout="responsive"
                src={"/assets/homepage/highLights/Highlights_1920.jpg"}
                className="2xl:block hidden rounded-xl  max-w-[100%]  w-full h-full absolute top-0 left-0 z-[-1] object-contain "
            />
            {/* <picture>
                <source media="(min-width: 1920px)" srcSet="/assets/homepage/highLights/Highlights_1920.webp" type="image/webp" />
                <source media="(min-width: 1920px)" srcSet="/assets/homepage/highLights/Highlights_1920.jpg" />
                <source media="(min-width: 1280px)" srcSet="/assets/homepage/highLights/Highlights_1280.webp" type="image/webp" />
                <source media="(min-width: 1280px)" srcSet="/assets/homepage/highLights/Highlights_1280.jpg" />
                <source media="(min-width: 768px)" srcSet="/assets/homepage/highLights/Highlights_768.webp" type="image/webp" />
                <source media="(min-width: 768px)" srcSet="/assets/homepage/highLights/Highlights_768.jpg" />
                <source srcSet="/assets/homepage/highLights/Highlights_375.webp" type="image/webp" />
                <img className="highlights_image ls-is-cached lazyloaded" src="/assets/homepage/highLights/Highlights_375.jpg" alt title />
            </picture> */}
        </div>

        <div className="highlights_section_wrapper  pl-4 pr-4 pt-16 md:pt-40 lg:w-3/5 lg:pt-16">
            <h2
                className={`text-xl font-normal sm:text-4xl sm:font-medium flex flex-col justify-center items-center text-center uppercase font-[Cinzel]  before:content-[url(../../public/icons/Diamond.9ed26887ed10ae24d374b45f5b347613.svg)]  before:text-[#d5af80]  before:w-[18px]  before:mb-3   before:block  before:leading-[1]  before:2xl:w-[18px]  after:content-[" "] after:h-[1px] after:bg-[#d5af80] after:w-1/5 after:mt-3 after:mb-5
        
        // before:transform: rotate(0turn); // before:transition: transform 1.9s ease;]
    
        // after:transition: width 1.9s ease
        `}
            >
                Highlights
            </h2>
            <div className="text_appear down show overflow-hidden">
                <p className="highlights_description mb-0 mx-0 text-left text-xs leading-8 font-normal tracking-normal  text-[#7d7d7d] md:text-sm md:leading-8">
                    With state of the art technologies and first class service, Banquet Bazzar was designed from the ground up to make your event the most
                    memorable. We have spent countless hours thinking about all the details and enhancing this beautiful venue with features so you can
                    concentrate on what is more important: having an amazing time with your guests. Some of Banquet Bazzar’s most popular highlights include the
                    following
                </p>
            </div>


        </div>

        {/* Accordian */}
        <div className="highlights_list show  mt-8 pl-1  pr-4 pb-12 md:mt-24 md:pl-3  md:pr-7 md:pb-24 lg:mt-24 lg:pl-6 lg:pr-6 lg:flex lg:flex-wrap md:space-y-8 lg:space-y-0 lg:gap-2">
            <div className="hl_item lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[calc(50%-32px)]">
                <div className="hl_card  flex flex-row items-start">
                    <div className="hl_icon flex justify-center items-center w-16 h-16 flex-shrink-0">
                        <picture>
                            <source media="(min-width: 768px)" srcSet="/assets/homepage/highLights/Highlights_Standard_LaserLightShow.svg" />
                            <img src="/assets/homepage/highLights/Highlights_LaserLightShow.svg" className=" ls-is-cached lazyloaded" />
                        </picture>
                    </div>
                    <div className="hl_content ml-3 mr-3 flex-auto md:ml-6">
                        <div
                            className={`hl_title  text-left text-lg leading-6 font-[Cinzel] tracking-normal  text-black min-h-[60px]  flex items-center lg:hidden md:text-2xl ${accordian ? "min-h-[10px" : ""
                                }`}
                            style={{
                                transition: "min-height .6s ease 0s",
                            }}
                        >
                            laser light show
                        </div>
                        <div
                            className={`hl_description d-lg-none overflow-hidden relative pt-0 lg:hidden ${accordian ? "pt-12" : ""}`}
                            style={{ transition: "padding-top .6s ease 0s" }}
                        >
                            <p className="hl_description_text absolute top-0 m-0 text-left text-xs leading-6 tracking-normal  text-[#000]">
                                Grand Venue by day. Club at night. Create amazing atmospheres and visuals for your event.
                            </p>
                        </div>
                        <div className="hidden lg:block hl_title_hd text-left font-[Cinzel] text-2xl tracking-normal  text-black">laser light show</div>
                        <p className="hidden lg:block hl_description_hd  text-left font-[Cinzel] text-base leading-8 tracking-normal  text-black">
                            Grand Venue by day. Club at night. Create amazing atmospheres and visuals for your event.
                        </p>
                    </div>
                    <div
                        className={`hl_col_icon d-lg-none  lg:hidden flex-shrink-0 h-14 w-5 flex justify-center items-center before:content-['']  before:bg-[#d5af80]  before:w-[10px]  before:h-[3px] ${accordian ? "before:skew-y-[-40deg] after:skew-y-[40deg]" : "before:skew-y-[30deg] after:skew-y-[-40deg]"
                            }   after:content-[''] before:transition-transform after:transition-transform  after:bg-[#d5af80]  after:w-[10px]  after:h-[3px]  `}
                        onClick={() => {
                            setaccordian(!accordian);
                        }}
                    // style={{ transition: "transform .6s ease 0s" }}
                    />
                </div>
            </div>
            <div className="hl_item lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[calc(50%-32px)]">
                <div className="hl_card  flex flex-row items-start">
                    <div className="hl_icon flex justify-center items-center w-16 h-16 flex-shrink-0">
                        <picture>
                            <source media="(min-width: 768px)" srcSet="/assets/homepage/highLights/Highlights_LiveCam.svg" />
                            <img src="/assets/homepage/highLights/Highlights_LiveCam.svg" className=" ls-is-cached lazyloaded" />
                        </picture>
                    </div>
                    <div className="hl_content md:ml-6 ml-3 mr-3 flex-auto">
                        <div
                            className={`hl_title  text-left text-lg leading-6 font-[Cinzel] tracking-normal  text-black min-h-[60px]  flex items-center md:text-2xl lg:hidden ${accordian ? "min-h-[10px" : ""
                                }`}
                            style={{
                                transition: "min-height .6s ease 0s",
                            }}
                        >
                            Live Cam
                        </div>
                        <div
                            className={`hl_description d-lg-none overflow-hidden relative pt-0 lg:hidden  ${accordian ? "pt-12" : ""}`}
                            style={{ transition: "padding-top .6s ease 0s" }}
                        >
                            <p className="hl_description_text absolute top-0 m-0 text-left text-xs leading-6 tracking-normal  text-[#000]">
                                Never miss another moment.{" "}
                            </p>
                        </div>
                        <div className="hidden lg:block hl_title_hd text-left font-[Cinzel] text-2xl tracking-normal  text-black ">Live Cam</div>
                        <p className="hidden lg:block hl_description_hd  text-left font-[Cinzel] text-base leading-8 tracking-normal  text-black">
                            Grand Venue by day. Club at night. Create amazing atmospheres and visuals for your event.
                        </p>
                    </div>
                    <div
                        className={`hl_col_icon d-lg-none  lg:hidden flex-shrink-0 h-14 w-5 flex justify-center items-center before:content-['']  before:bg-[#d5af80]  before:w-[10px]  before:h-[3px] ${accordian ? "before:skew-y-[-40deg] after:skew-y-[40deg]" : "before:skew-y-[30deg] after:skew-y-[-40deg]"
                            }   after:content-[''] before:transition-transform after:transition-transform  after:bg-[#d5af80]  after:w-[10px]  after:h-[3px]  `}
                        onClick={() => {
                            setaccordian(!accordian);
                        }}
                    // style={{ transition: "transform .6s ease 0s" }}
                    />
                </div>
            </div>
            <div className="hl_item lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[calc(50%-32px)]">
                <div className="hl_card  flex flex-row items-start">
                    <div className="hl_icon flex justify-center items-center w-16 h-16 flex-shrink-0">
                        <picture>
                            <source media="(min-width: 768px)" srcSet="/assets/homepage/highLights/Highlights_Standard_CurvedLEDStageScreen.svg" />
                            <img src="/assets/homepage/highLights/Highlights_Standard_CurvedLEDStageScreen.svg" className=" ls-is-cached lazyloaded" />
                        </picture>
                    </div>
                    <div className="hl_content md:ml-6 ml-3 mr-3 flex-auto">
                        <div
                            className={`hl_title  text-left text-lg leading-6 font-[Cinzel] tracking-normal  text-black min-h-[60px]  flex items-center md:text-2xl lg:hidden ${accordian ? "min-h-[10px" : ""
                                }`}
                            style={{
                                transition: "min-height .6s ease 0s",
                            }}
                        >
                            curved led stage screen
                        </div>
                        <div
                            className={`hl_description d-lg-none overflow-hidden relative pt-0 lg:hidden ${accordian ? "pt-12" : ""}`}
                            style={{ transition: "padding-top .6s ease 0s" }}
                        >
                            <p className="hl_description_text absolute top-0 m-0 text-left text-xs leading-6 tracking-normal  text-[#000]">
                                curved led stage screen{" "}
                            </p>
                        </div>
                        <div className="hidden lg:block hl_title_hd text-left font-[Cinzel] text-2xl tracking-normal  text-black">
                            curved led stage screen
                        </div>
                        <p className="hidden lg:block hl_description_hd  text-left font-[Cinzel] text-base leading-8 tracking-normal  text-black">
                            Display anything you'd like across our giant curved LED screen.
                        </p>
                    </div>
                    <div
                        className={`hl_col_icon d-lg-none  lg:hidden flex-shrink-0 h-14 w-5 flex justify-center items-center before:content-['']  before:bg-[#d5af80]  before:w-[10px]  before:h-[3px] ${accordian ? "before:skew-y-[-40deg] after:skew-y-[40deg]" : "before:skew-y-[30deg] after:skew-y-[-40deg]"
                            }   after:content-[''] before:transition-transform after:transition-transform  after:bg-[#d5af80]  after:w-[10px]  after:h-[3px]  `}
                        onClick={() => {
                            setaccordian(!accordian);
                        }}
                    // style={{ transition: "transform .6s ease 0s" }}
                    />
                </div>
            </div>
            <div className="hl_item lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[calc(50%-32px)]">
                <div className="hl_card  flex flex-row items-start">
                    <div className="hl_icon flex justify-center items-center w-16 h-16 flex-shrink-0">
                        <picture>
                            <source media="(min-width: 768px)" srcSet="/assets/homepage/highLights/Highlights_Standard_TailoredAudioSystem.svg" />
                            <img src="/assets/homepage/highLights/Highlights_Standard_TailoredAudioSystem.svg" className=" ls-is-cached lazyloaded" />
                        </picture>
                    </div>
                    <div className="hl_content md:ml-6 ml-3 mr-3 flex-auto">
                        <div
                            className={`hl_title  text-left text-lg leading-6 font-[Cinzel] tracking-normal  text-black min-h-[60px]  flex items-center md:text-2xl lg:hidden ${accordian ? "min-h-[10px" : ""
                                }`}
                            style={{
                                transition: "min-height .6s ease 0s",
                            }}
                        >
                            tailored audio system
                        </div>
                        <div
                            className={`hl_description d-lg-none overflow-hidden relative pt-0 lg:hidden ${accordian ? "pt-12" : ""}`}
                            style={{ transition: "padding-top .6s ease 0s" }}
                        >
                            <p className="hl_description_text absolute top-0 m-0 text-left text-xs leading-6 tracking-normal  text-[#000]">
                                Our sound system is specially designed to project music only where you want it to go.{" "}
                            </p>
                        </div>
                        <div className="hidden lg:block hl_title_hd text-left font-[Cinzel] text-2xl tracking-normal  text-black">
                            tailored audio system
                        </div>
                        <p className="hidden lg:block hl_description_hd  text-left font-[Cinzel] text-base leading-8 tracking-normal  text-black">
                            Our sound system is specially designed to project music only where you want it to go.
                        </p>
                    </div>
                    <div
                        className={`hl_col_icon d-lg-none  lg:hidden flex-shrink-0 h-14 w-5 flex justify-center items-center before:content-['']  before:bg-[#d5af80]  before:w-[10px]  before:h-[3px] ${accordian ? "before:skew-y-[-40deg] after:skew-y-[40deg]" : "before:skew-y-[30deg] after:skew-y-[-40deg]"
                            }   after:content-[''] before:transition-transform after:transition-transform  after:bg-[#d5af80]  after:w-[10px]  after:h-[3px]  `}
                        onClick={() => {
                            setaccordian(!accordian);
                        }}
                    // style={{ transition: "transform .6s ease 0s" }}
                    />
                </div>
            </div>
            <div className="hl_item lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[calc(50%-32px)]">
                <div className="hl_card  flex flex-row items-start">
                    <div className="hl_icon flex justify-center items-center w-16 h-16 flex-shrink-0">
                        <picture>
                            <source media="(min-width: 768px)" srcSet="/assets/homepage/highLights/Highlights_FogMachine.svg" />
                            <img src="/assets/homepage/highLights/Highlights_FogMachine.svg" className=" ls-is-cached lazyloaded" />
                        </picture>
                    </div>
                    <div className="hl_content md:ml-6 ml-3 mr-3 flex-auto">
                        <div
                            className={`hl_title  text-left text-lg leading-6 font-[Cinzel] tracking-normal  text-black min-h-[60px]  flex items-center md:text-2xl lg:hidden ${accordian ? "min-h-[10px" : ""
                                }`}
                            style={{
                                transition: "min-height .6s ease 0s",
                            }}
                        >
                            fog machine
                        </div>
                        <div
                            className={`hl_description d-lg-none overflow-hidden relative pt-0 lg:hidden ${accordian ? "pt-12" : ""}`}
                            style={{ transition: "padding-top .6s ease 0s" }}
                        >
                            <p className="hl_description_text absolute top-0 m-0 text-left text-xs leading-6 tracking-normal  text-[#000]">
                                Walk on clouds with our massive fog machine.{" "}
                            </p>
                        </div>
                        <div className="hidden lg:block hl_title_hd text-left font-[Cinzel] text-2xl tracking-normal  text-black">fog machine</div>
                        <p className="hidden lg:block hl_description_hd  text-left font-[Cinzel] text-base leading-8 tracking-normal  text-black">
                            Walk on clouds with our massive fog machine.{" "}
                        </p>
                    </div>
                    <div
                        className={`hl_col_icon d-lg-none  lg:hidden flex-shrink-0 h-14 w-5 flex justify-center items-center before:content-['']  before:bg-[#d5af80]  before:w-[10px]  before:h-[3px] ${accordian ? "before:skew-y-[-40deg] after:skew-y-[40deg]" : "before:skew-y-[30deg] after:skew-y-[-40deg]"
                            }   after:content-[''] before:transition-transform after:transition-transform  after:bg-[#d5af80]  after:w-[10px]  after:h-[3px]  `}
                        onClick={() => {
                            setaccordian(!accordian);
                        }}
                    // style={{ transition: "transform .6s ease 0s" }}
                    />
                </div>
            </div>
            <div className="hl_item lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[calc(50%-32px)]">
                <div className="hl_card  flex flex-row items-start">
                    <div className="hl_icon flex justify-center items-center w-16 h-16 flex-shrink-0">
                        <picture>
                            <source media="(min-width: 768px)" srcSet="/assets/homepage/highLights/Highlights_Standard_ThemeSpecificLighting.svg" />
                            <img src="/assets/homepage/highLights/Highlights_Standard_ThemeSpecificLighting.svg" className=" ls-is-cached lazyloaded" />
                        </picture>
                    </div>
                    <div className="hl_content md:ml-6 ml-3 mr-3 flex-auto">
                        <div
                            className={`hl_title  text-left text-lg leading-6 font-[Cinzel] tracking-normal  text-black min-h-[60px]  flex items-center md:text-2xl lg:hidden ${accordian ? "min-h-[10px" : ""
                                }`}
                            style={{
                                transition: "min-height .6s ease 0s",
                            }}
                        >
                            theme specific lighting
                        </div>
                        <div
                            className={`hl_description d-lg-none overflow-hidden relative pt-0 lg:hidden  ${accordian ? "pt-12" : ""}`}
                            style={{ transition: "padding-top .6s ease 0s" }}
                        >
                            <p className="hl_description_text absolute top-0 m-0 text-left text-xs leading-6 tracking-normal  text-[#000]">
                                We provide custom lighting schemes to compliment your event theme.
                            </p>
                        </div>
                        <div className="hidden lg:block hl_title_hd text-left font-[Cinzel] text-2xl tracking-normal  text-black">
                            theme specific lighting
                        </div>
                        <p className="hidden lg:block hl_description_hd  text-left font-[Cinzel] text-base leading-8 tracking-normal  text-black">
                            We provide custom lighting schemes to compliment your event theme.{" "}
                        </p>
                    </div>
                    <div
                        className={`hl_col_icon d-lg-none  lg:hidden flex-shrink-0 h-14 w-5 flex justify-center items-center before:content-['']  before:bg-[#d5af80]  before:w-[10px]  before:h-[3px] ${accordian ? "before:skew-y-[-40deg] after:skew-y-[40deg]" : "before:skew-y-[30deg] after:skew-y-[-40deg]"
                            }   after:content-[''] before:transition-transform after:transition-transform  after:bg-[#d5af80]  after:w-[10px]  after:h-[3px]  `}
                        onClick={() => {
                            setaccordian(!accordian);
                        }}
                    // style={{ transition: "transform .6s ease 0s" }}
                    />
                </div>
            </div>
            <div className="hl_item lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[calc(50%-32px)]">
                <div className="hl_card  flex flex-row items-start">
                    <div className="hl_icon flex justify-center items-center w-16 h-16 flex-shrink-0">
                        <picture>
                            <source media="(min-width: 768px)" srcSet="/assets/homepage/highLights/Highlights_Standard_InteractiveProjector.svg" />
                            <img src="/assets/homepage/highLights/Highlights_Standard_InteractiveProjector.svg" className=" ls-is-cached lazyloaded" />
                        </picture>
                    </div>
                    <div className="hl_content md:ml-6 ml-3 mr-3 flex-auto">
                        <div
                            className={`hl_title  text-left text-lg leading-6 font-[Cinzel] tracking-normal  text-black min-h-[60px]  flex items-center md:text-2xl lg:hidden ${accordian ? "min-h-[10px" : ""
                                }`}
                            style={{
                                transition: "min-height .6s ease 0s",
                            }}
                        >
                            interactive projector
                        </div>
                        <div
                            className={`hl_description d-lg-none overflow-hidden relative pt-0 lg:hidden ${accordian ? "pt-12" : ""}`}
                            style={{ transition: "padding-top .6s ease 0s" }}
                        >
                            <p className="hl_description_text absolute top-0 m-0 text-left text-xs leading-6 tracking-normal  text-[#000]">
                                Enhance your experience with custom graphics and animations to project all across the dance floor.
                            </p>
                        </div>
                        <div className="hidden lg:block hl_title_hd text-left font-[Cinzel] text-2xl tracking-normal  text-black">
                            interactive projector
                        </div>
                        <p className="hidden lg:block hl_description_hd  text-left font-[Cinzel] text-base leading-8 tracking-normal  text-black">
                            Enhance your experience with custom graphics and animations to project all across the dance floor.{" "}
                        </p>
                    </div>
                    <div
                        className={`hl_col_icon d-lg-none  lg:hidden flex-shrink-0 h-14 w-5 flex justify-center items-center before:content-['']  before:bg-[#d5af80]  before:w-[10px]  before:h-[3px] ${accordian ? "before:skew-y-[-40deg] after:skew-y-[40deg]" : "before:skew-y-[30deg] after:skew-y-[-40deg]"
                            }   after:content-[''] before:transition-transform after:transition-transform  after:bg-[#d5af80]  after:w-[10px]  after:h-[3px]  `}
                        onClick={() => {
                            setaccordian(!accordian);
                        }}
                    // style={{ transition: "transform .6s ease 0s" }}
                    />
                </div>
            </div>
            <div className="hl_item lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[calc(50%-32px)]">
                <div className="hl_card  flex flex-row items-start">
                    <div className="hl_icon flex justify-center items-center w-16 h-16 flex-shrink-0">
                        <picture>
                            <source media="(min-width: 768px)" srcSet="/assets/homepage/highLights/Highlights_Standard_HazeMachine.svg" />
                            <img src="/assets/homepage/highLights/Highlights_Standard_HazeMachine.svg" className=" ls-is-cached lazyloaded" />
                        </picture>
                    </div>
                    <div className="hl_content md:ml-6 ml-3 mr-3 flex-auto">
                        <div
                            className={`hl_title  text-left text-lg leading-6 font-[Cinzel] tracking-normal  text-black min-h-[60px]  flex items-center md:text-2xl lg:hidden ${accordian ? "min-h-[10px" : ""
                                }`}
                            style={{
                                transition: "min-height .6s ease 0s",
                            }}
                        >
                            haze machine
                        </div>
                        <div
                            className={`hl_description d-lg-none overflow-hidden relative pt-0 lg:hidden ${accordian ? "pt-12" : ""}`}
                            style={{ transition: "padding-top .6s ease 0s" }}
                        >
                            <p className="hl_description_text absolute top-0 m-0 text-left text-xs leading-6 tracking-normal  text-[#000]">
                                Create artificial clouds and atmospheric effects with our hazer.
                            </p>
                        </div>
                        <div className="hidden lg:block hl_title_hd text-left font-[Cinzel] text-2xl tracking-normal  text-black">haze machine</div>
                        <p className="hidden lg:block hl_description_hd  text-left font-[Cinzel] text-base leading-8 tracking-normal  text-black">
                            Create artificial clouds and atmospheric effects with our hazer.
                        </p>
                    </div>
                    <div
                        className={`hl_col_icon d-lg-none  lg:hidden flex-shrink-0 h-14 w-5 flex justify-center items-center before:content-['']  before:bg-[#d5af80]  before:w-[10px]  before:h-[3px] ${accordian ? "before:skew-y-[-40deg] after:skew-y-[40deg]" : "before:skew-y-[30deg] after:skew-y-[-40deg]"
                            }   after:content-[''] before:transition-transform after:transition-transform  after:bg-[#d5af80]  after:w-[10px]  after:h-[3px]  `}
                        onClick={() => {
                            setaccordian(!accordian);
                        }}
                    // style={{ transition: "transform .6s ease 0s" }}
                    />
                </div>
            </div>
            <div className="hl_item lg:flex-grow-0 lg:flex-shrink-0 lg:basis-[calc(50%-32px)]">
                <div className="hl_card  flex flex-row items-start">
                    <div className="hl_icon flex justify-center items-center w-16 h-16 flex-shrink-0">
                        <picture>
                            <source media="(min-width: 768px)" srcSet="/assets/homepage/highLights/Highlights_Standard_Streaming.svg" />
                            <img src="/assets/homepage/highLights/Highlights_Standard_Streaming.svg" className=" ls-is-cached lazyloaded" />
                        </picture>
                    </div>
                    <div className="hl_content md:ml-6 ml-3 mr-3 flex-auto">
                        <div
                            className={`hl_title  text-left text-lg leading-6 font-[Cinzel] tracking-normal  text-black min-h-[60px]  flex items-center md:text-2xl lg:hidden ${accordian ? "min-h-[10px" : ""
                                }`}
                            style={{
                                transition: "min-height .6s ease 0s",
                            }}
                        >
                            streaming
                        </div>
                        <div
                            className={`hl_description d-lg-none overflow-hidden relative pt-0 lg:hidden ${accordian ? "pt-12" : ""}`}
                            style={{ transition: "padding-top .6s ease 0s" }}
                        >
                            <p className="hl_description_text absolute top-0 m-0 text-left text-xs leading-6 tracking-normal  text-[#000]">
                                Who said guests are only those in the hall? Stream your event live and have your guests tune in on Facebook, YouTube, and
                                Skype.
                            </p>
                        </div>
                        <div className="hidden lg:block hl_title_hd text-left font-[Cinzel] text-2xl tracking-normal  text-black">streaming</div>
                        <p className="hidden lg:block hl_description_hd  text-left font-[Cinzel] text-base leading-8 tracking-normal  text-black">
                            Who said guests are only those in the hall? Stream your event live and have your guests tune in on Facebook, YouTube, and Skype.
                        </p>
                    </div>
                    <div
                        className={`hl_col_icon d-lg-none  lg:hidden flex-shrink-0 h-14 w-5 flex justify-center items-center before:content-['']  before:bg-[#d5af80]  before:w-[10px]  before:h-[3px] ${accordian ? "before:skew-y-[-40deg] after:skew-y-[40deg]" : "before:skew-y-[30deg] after:skew-y-[-40deg]"
                            }   after:content-[''] before:transition-transform after:transition-transform  after:bg-[#d5af80]  after:w-[10px]  after:h-[3px]  `}
                        onClick={() => {
                            setaccordian(!accordian);
                        }}
                    // style={{ transition: "transform .6s ease 0s" }}
                    />
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Highlights
