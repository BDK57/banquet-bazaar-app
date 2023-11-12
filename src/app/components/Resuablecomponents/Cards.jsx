import React from 'react'
import Image from "next/image";
import Link from 'next/link';
const Cards = (props) => {
    console.log("aaaa",props)
    return (
        <div className="lg:flex relative">
            <Link href={`/banquet/${props._id}`} className="event_item__wrapper" draggable="false">
                
                <Image
                    src={"/assets/hero/homepage_hero_1280.jpg"}
                    className="rounded-xl  max-w-[100%]  h-auto"
                    style={{ filter: "brightness(0.9)" }} layout='responsive'
                    width={1920}
                    height={1920}
                />
                <div
                    className="absolute left-0 z-[5] w-full text-white padding-box h-full bottom-0"

                >
                    <div
                        className={`event_item__name_wrapper flex
                                            flex-col
                                            justify-end
                                            items-center
                                            w-full
                                            absolute
                                            bottom-[50%]
                                            left-[50%]
                                            translate-x-[-50%]
                                            translate-y-[50%]
                                            text-center
                                        
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
                        <span className="tracking-[3.6px] leading-6 text-white text-lg w-full h-full font-[Cinzel] font-extralight">{props.name}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Cards