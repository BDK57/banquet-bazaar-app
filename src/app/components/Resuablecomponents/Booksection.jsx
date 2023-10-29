'use client'
import React from 'react'
import heroStyle from '@/app/hero.module.css';
function Booksection() {
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

        // medium Size Res
        md:after:w-[70%]
        md:text-4xl
        md:leading-[54px]
        tracking-normal
        
        `}
                >
                    Steps To Book An Event
                </h2>

                {/* Inner Section */}
                <div className="StepsToBookAnEvent-wrapper  flex justify-center flex-wrap lg:flex-row lg:gap-8">
                    <div className="StepsToBookAnEvent-item col-lg-4 col-md-12 col-12 flex flex-col w-full md:w-[70%] lg:w-[30%]">
                        <h2
                            className="StepsToBookAnEvent_header     bg-white
block
w-[120px]
h-[120px]
text-center
relative
rounded-[60px]
text-7xl
leading-[108px]
font-[Cinzel]
z-[1000]
text-[#2f4d4b]
mt-14
-mb-16
mx-auto
"
                        >
                            1
                        </h2>
                        <div className="StepsToBookAnEvent-show">
                            <div
                                className="StepsToBookAnEvent_description     w-full
                        md:min-h-[180px]
                    
                        lg:min-h-[220px]
                        min-h-[0px]
block
mx-auto
my-0
text-center
bg-[#faf7f2]
z-[10]
text-[#2f4d4b]
pt-20
px-10
pb-5

font-[Cinzel]
text-lg
leading-6
md:text-3xl
md:leading-10
tracking-normal
"
                            >
                                schedule an appointment for a tour
                            </div>
                            <div
                                className="StepsToBookAnEvent_content
                        my-5
                        mx-auto
                        text-left
                        w-full
                        text-xs
                        leading-6
                        md:text-base
                        md:leading-8
                        tracking-normal
                        text-[#000]
                        }
                        "
                            >
                                Take a tour and receive an introduction to packages and menu options with assigned manager.
                            </div>
                        </div>
                    </div>
                    <div className="StepsToBookAnEvent-item col-lg-4 col-md-12 col-12 flex flex-col w-full md:w-[70%] lg:w-[30%]">
                        <h2
                            className="StepsToBookAnEvent_header     bg-white
block
w-[120px]
h-[120px]
text-center
relative
rounded-[60px]
text-7xl
leading-[108px]
font-[Cinzel]
z-[1000]
text-[#2f4d4b]
mt-14
-mb-16
mx-auto
"
                        >
                            2
                        </h2>
                        <div className="StepsToBookAnEvent-show">
                            <div
                                className="StepsToBookAnEvent_description     w-full
                        md:min-h-[180px]
                        min-h-[0px]
                        lg:min-h-[220px]
block
mx-auto
my-0
text-center
bg-[#faf7f2]
z-[10]
text-[#2f4d4b]
pt-20
px-9
pb-5
font-[Cinzel]
text-lg
leading-6
md:text-3xl
md:leading-10
tracking-normal
"
                            >
                                contract signing
                            </div>
                            <div
                                className="StepsToBookAnEvent_content
                        my-5
                        mx-auto
                        text-left
                        w-full
                        text-xs
                        leading-6
                        md:text-base
                        md:leading-8
                        tracking-normal
                        text-[#000]
                        }
                        "
                            >
                                Meet our production managers to go over the entertainment packages and lighting options. Reserve date with 25%
                            </div>
                        </div>
                    </div>
                    <div className="StepsToBookAnEvent-item col-lg-4 col-md-12 col-12 flex flex-col w-full md:w-[70%] lg:w-[30%]">
                        <h2
                            className="StepsToBookAnEvent_header     bg-white
block
w-[120px]
h-[120px]
text-center
relative
rounded-[60px]
text-7xl
leading-[108px]
font-[Cinzel]
z-[1000]
text-[#2f4d4b]
mt-14
-mb-16
mx-auto
"
                        >
                            3
                        </h2>
                        <div className="StepsToBookAnEvent-show">
                            <div
                                className="StepsToBookAnEvent_description     w-full
                        md:min-h-[180px]
                        min-h-[0px]
                        
                        lg:min-h-[220px]
block
mx-auto
my-0
text-center
bg-[#faf7f2]
z-[10]
text-[#2f4d4b]
pt-20
px-9
pb-5
font-[Cinzel]
text-lg
leading-6
md:text-3xl
md:leading-10
tracking-normal
"
                            >
                                discuss finishing touches
                            </div>
                            <div
                                className="StepsToBookAnEvent_content
                        my-5
                        mx-auto
                        text-left
                        w-full
                        text-xs
                        leading-6
                        md:text-base
                        md:leading-8
                        tracking-normal
                        text-[#000]
                        }
                        "
                            >
                                Finalize the menu one month before the event and confirm the final count of the guests and floor plan two weeks before the event.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="button venue-btn md:w-3/5" href="/venue">
                View More
            </a>
        </section>
    )
}

export default Booksection