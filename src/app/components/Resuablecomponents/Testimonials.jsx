'use client'
import React from 'react'
import Image from 'next/image'
import heroStyle from '@/app/hero.module.css';
function Testimonials() {
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

        md:after:w-2/5
        
        
        `}
        >
            Testimonials
        </h2>

        <div className="flex flex-col lg:flex-row lg:overflow-x-hidden lg:flex-wrap">
            <div
                className="testimonial testimonial-show w-80 md:max-w-[514px] lg:max-w-[350px]
            relative rounded-3xl outline-none mb-10 mx-auto md:w-auto"
            >
                <div
                    className=" text-white stars flex
justify-center
mb-5"
                >
                    <Image src={"/icons/star-1.svg"} width={20} height={20}></Image>
                    <Image src={"/icons/star-1.svg"} width={20} height={20}></Image>
                    <Image src={"/icons/star-1.svg"} width={20} height={20}></Image>
                    <Image src={"/icons/star-1.svg"} width={20} height={20}></Image>
                    <Image src={"/icons/star-1.svg"} width={20} height={20}></Image>
                    {/* <span className="material-icons gold900-text">star</span>
                    <span className="material-icons gold900-text">star</span>
                    <span className="material-icons gold900-text">star</span>
                    <span className="material-icons gold900-text">star</span> */}
                </div>
                <div
                    className="body tracking-[0.16px] text-sm
text-center"
                >
                    "We had our Baby Welcome Event at Banquet Bazzar, and all we can say is that our happy occasion got super happy with the amazing and spectacular
                    service that was provided to us by the Venue. The management an ...
                </div>
                <div
                    className="read-more-wrapper  mb-[-29.5px]
text-center"
                >
                    <span
                        className="read-more 
                        font-[Cinzel]
                        text-xs
                        leading-8
                        tracking-normal
                        text-[#d5af80]
                        decoration-transparent
                        cursor-pointer
                        transtion-[.2s]
                    "
                    >
                        Read more
                    </span>
                </div>
                <hr
                    className="w-52
mt-9
mb-5 sm:mb-[unset]
mx-auto
margin-bottom: 20px
border-[#d5af80]
border-0
border-t-[1px]  
border-solid
md:mb-4
"
                />
                <div
                    className="author
font-[Cinzel]
text-center
text-base
leading-8
tracking-normal
text-[#000]"
                >
                    Ramella H.
                </div>
            </div>

            <div
                className="testimonial testimonial-show w-80 md:max-w-[514px] lg:max-w-[350px]
            relative rounded-3xl outline-none mb-10 mx-auto md:w-auto"
            >
                <div
                    className=" text-white stars flex
justify-center
mb-5"
                >
                    <Image src={"/icons/star-1.svg"} width={20} height={20}></Image>
                    <Image src={"/icons/star-1.svg"} width={20} height={20}></Image>
                    <Image src={"/icons/star-1.svg"} width={20} height={20}></Image>
                    <Image src={"/icons/star-1.svg"} width={20} height={20}></Image>
                    <Image src={"/icons/star-1.svg"} width={20} height={20}></Image>
                    {/* <span className="material-icons gold900-text">star</span>
                    <span className="material-icons gold900-text">star</span>
                    <span className="material-icons gold900-text">star</span>
                    <span className="material-icons gold900-text">star</span> */}
                </div>
                <div
                    className="body tracking-[0.16px] text-sm
text-center"
                >
                    "We had our Baby Welcome Event at Banquet Bazzar, and all we can say is that our happy occasion got super happy with the amazing and spectacular
                    service that was provided to us by the Venue. The management an ...
                </div>
                <div
                    className="read-more-wrapper  mb-[-29.5px]
text-center"
                >
                    <span
                        className="read-more 
                        font-[Cinzel]
                        text-xs
                        leading-8
                        tracking-normal
                        text-[#d5af80]
                        decoration-transparent
                        cursor-pointer
                        transtion-[.2s]
                    "
                    >
                        Read more
                    </span>
                </div>
                <hr
                    className="w-52
mt-9
mb-5 sm:mb-[unset]
mx-auto
margin-bottom: 20px
border-[#d5af80]
border-0
border-t-[1px]  
border-solid
md:mb-4
"
                />
                <div
                    className="author
font-[Cinzel]
text-center
text-base
leading-8
tracking-normal
text-[#000]"
                >
                    Ramella H.
                </div>
            </div>

            <div
                className="testimonial testimonial-show w-80 md:max-w-[514px] lg:max-w-[350px]
            relative rounded-3xl outline-none mb-10 mx-auto md:w-auto"
            >
                <div
                    className=" text-white stars flex
justify-center
mb-5"
                >
                    <Image src={"/icons/star-1.svg"} width={20} height={20}></Image>
                    <Image src={"/icons/star-1.svg"} width={20} height={20}></Image>
                    <Image src={"/icons/star-1.svg"} width={20} height={20}></Image>
                    <Image src={"/icons/star-1.svg"} width={20} height={20}></Image>
                    <Image src={"/icons/star-1.svg"} width={20} height={20}></Image>
                    {/* <span className="material-icons gold900-text">star</span>
                    <span className="material-icons gold900-text">star</span>
                    <span className="material-icons gold900-text">star</span>
                    <span className="material-icons gold900-text">star</span> */}
                </div>
                <div
                    className="body tracking-[0.16px] text-sm
text-center"
                >
                    "We had our Baby Welcome Event at Banquet Bazzar, and all we can say is that our happy occasion got super happy with the amazing and spectacular
                    service that was provided to us by the Venue. The management an ...
                </div>
                <div
                    className="read-more-wrapper  mb-[-29.5px]
text-center"
                >
                    <span
                        className="read-more 
                        font-[Cinzel]
                        text-xs
                        leading-8
                        tracking-normal
                        text-[#d5af80]
                        decoration-transparent
                        cursor-pointer
                        transtion-[.2s]
                    "
                    >
                        Read more
                    </span>
                </div>
                <hr
                    className="w-52
mt-9
mb-5 sm:mb-[unset]
mx-auto
margin-bottom: 20px
border-[#d5af80]
border-0
border-t-[1px]  
border-solid
md:mb-4
"
                />
                <div
                    className="author
font-[Cinzel]
text-center
text-base
leading-8
tracking-normal
text-[#000]"
                >
                    Ramella H.
                </div>
            </div>

            <div
                className="testimonial testimonial-show w-80 md:max-w-[514px] lg:max-w-[350px]
            relative rounded-3xl outline-none mb-10 mx-auto md:w-auto"
            >
                <div
                    className=" text-white stars flex
justify-center
mb-5"
                >
                    <Image src={"/icons/star-1.svg"} width={20} height={20}></Image>
                    <Image src={"/icons/star-1.svg"} width={20} height={20}></Image>
                    <Image src={"/icons/star-1.svg"} width={20} height={20}></Image>
                    <Image src={"/icons/star-1.svg"} width={20} height={20}></Image>
                    <Image src={"/icons/star-1.svg"} width={20} height={20}></Image>
                    {/* <span className="material-icons gold900-text">star</span>
                    <span className="material-icons gold900-text">star</span>
                    <span className="material-icons gold900-text">star</span>
                    <span className="material-icons gold900-text">star</span> */}
                </div>
                <div
                    className="body tracking-[0.16px] text-sm
text-center"
                >
                    "We had our Baby Welcome Event at Banquet Bazzar, and all we can say is that our happy occasion got super happy with the amazing and spectacular
                    service that was provided to us by the Venue. The management an ...
                </div>
                <div
                    className="read-more-wrapper  mb-[-29.5px]
text-center"
                >
                    <span
                        className="read-more 
                        font-[Cinzel]
                        text-xs
                        leading-8
                        tracking-normal
                        text-[#d5af80]
                        decoration-transparent
                        cursor-pointer
                        transtion-[.2s]
                    "
                    >
                        Read more
                    </span>
                </div>
                <hr
                    className="w-52
mt-9
mb-5 sm:mb-[unset]
mx-auto
margin-bottom: 20px
border-[#d5af80]
border-0
border-t-[1px]  
border-solid
md:mb-4
"
                />
                <div
                    className="author
font-[Cinzel]
text-center
text-base
leading-8
tracking-normal
text-[#000]"
                >
                    Ramella H.
                </div>
            </div>

            <div
                className="testimonial testimonial-show w-80 md:max-w-[514px] lg:max-w-[350px]
            relative rounded-3xl outline-none mb-10 mx-auto md:w-auto"
            >
                <div
                    className=" text-white stars flex
justify-center
mb-5"
                >
                    <Image src={"/icons/star-1.svg"} width={20} height={20}></Image>
                    <Image src={"/icons/star-1.svg"} width={20} height={20}></Image>
                    <Image src={"/icons/star-1.svg"} width={20} height={20}></Image>
                    <Image src={"/icons/star-1.svg"} width={20} height={20}></Image>
                    <Image src={"/icons/star-1.svg"} width={20} height={20}></Image>
                    {/* <span className="material-icons gold900-text">star</span>
                    <span className="material-icons gold900-text">star</span>
                    <span className="material-icons gold900-text">star</span>
                    <span className="material-icons gold900-text">star</span> */}
                </div>
                <div
                    className="body tracking-[0.16px] text-sm
text-center"
                >
                    "We had our Baby Welcome Event at Banquet Bazzar, and all we can say is that our happy occasion got super happy with the amazing and spectacular
                    service that was provided to us by the Venue. The management an ...
                </div>
                <div
                    className="read-more-wrapper  mb-[-29.5px]
text-center"
                >
                    <span
                        className="read-more 
                        font-[Cinzel]
                        text-xs
                        leading-8
                        tracking-normal
                        text-[#d5af80]
                        decoration-transparent
                        cursor-pointer
                        transtion-[.2s]
                    "
                    >
                        Read more
                    </span>
                </div>
                <hr
                    className="w-52
mt-9
mb-5 sm:mb-[unset]
mx-auto
margin-bottom: 20px
border-[#d5af80]
border-0
border-t-[1px]  
border-solid
md:mb-4
"
                />
                <div
                    className="author
font-[Cinzel]
text-center
text-base
leading-8
tracking-normal
text-[#000]"
                >
                    Ramella H.
                </div>
            </div>

            <div
                className="testimonial testimonial-show w-80 md:max-w-[514px] lg:max-w-[350px]
            relative rounded-3xl outline-none mb-10 mx-auto md:w-auto"
            >
                <div
                    className=" text-white stars flex
justify-center
mb-5"
                >
                    <Image src={"/icons/star-1.svg"} width={20} height={20}></Image>
                    <Image src={"/icons/star-1.svg"} width={20} height={20}></Image>
                    <Image src={"/icons/star-1.svg"} width={20} height={20}></Image>
                    <Image src={"/icons/star-1.svg"} width={20} height={20}></Image>
                    <Image src={"/icons/star-1.svg"} width={20} height={20}></Image>
                    {/* <span className="material-icons gold900-text">star</span>
                    <span className="material-icons gold900-text">star</span>
                    <span className="material-icons gold900-text">star</span>
                    <span className="material-icons gold900-text">star</span> */}
                </div>
                <div
                    className="body tracking-[0.16px] text-sm
text-center"
                >
                    "We had our Baby Welcome Event at Banquet Bazzar, and all we can say is that our happy occasion got super happy with the amazing and spectacular
                    service that was provided to us by the Venue. The management an ...
                </div>
                <div
                    className="read-more-wrapper  mb-[-29.5px]
text-center"
                >
                    <span
                        className="read-more 
                        font-[Cinzel]
                        text-xs
                        leading-8
                        tracking-normal
                        text-[#d5af80]
                        decoration-transparent
                        cursor-pointer
                        transtion-[.2s]
                    "
                    >
                        Read more
                    </span>
                </div>
                <hr
                    className="w-52
mt-9
mb-5 sm:mb-[unset]
mx-auto
margin-bottom: 20px
border-[#d5af80]
border-0
border-t-[1px]  
border-solid
md:mb-4
"
                />
                <div
                    className="author
font-[Cinzel]
text-center
text-base
leading-8
tracking-normal
text-[#000]"
                >
                    Ramella H.
                </div>
            </div>

        </div>
    </div>
    {/* <a className="button venue-btn md:w-3/5" href="/venue">
        View More
    </a> */}
</section>
  )
}

export default Testimonials