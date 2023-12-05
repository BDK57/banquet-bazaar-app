import React from 'react'
import Image from "next/image";
const Cards = ({ filterhalls, isdelete, handledelete, isupdated, handleupdate }) => {
    console.log("dddd", filterhalls)
    return (
        <>
            {
                filterhalls?.map((item) => {
                    return (
                        <div className="lg:flex relative">
                            {/* <Link href={`/banquet/${props._id}`} className="event_item__wrapper" draggable="false"> */}

                            <Image
                                src={"/assets/hero/homepage_hero_1280.jpg"}
                                className="rounded-xl  max-w-[100%]  h-auto"
                                style={{ filter: "brightness(0.9)", position: 'relative' }} layout='responsive'
                                width={1920}
                                height={1920}
                            />
                            {isdelete &&
                                <>
                                    <div onClick={() => {
                                        console.log("iet", item)
                                        handledelete(item)
                                    }} style={{ position: 'absolute', top: 10, left: 10, zIndex: 999 }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill='#FFFFFF' viewBox="0 0 30 30" width="30px" height="30px">
                                            <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z" /></svg>

                                    </div>
                                </>
                            }
                            {isupdated &&
                                <>
                                    <div onClick={() => {
                                        console.log("iet", item)
                                        handleupdate(item)
                                    }} style={{ position: 'absolute', top: 10, right: 10, zIndex: 999 }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0)">
                                                <path d="M14.9239 4.04412L19.8061 8.92622L7.44801 21.2843L2.56863 16.4022L14.9239 4.04412ZM23.5107 2.86667L21.3334 0.689423C20.492 -0.152008 19.1257 -0.152008 18.2814 0.689423L16.1958 2.77501L21.0779 7.65715L23.5107 5.22443C24.1633 4.57177 24.1633 3.51929 23.5107 2.86667ZM0.0137079 23.2644C-0.0751408 23.6642 0.285881 24.0225 0.685791 23.9253L6.12612 22.6062L1.24674 17.7241L0.0137079 23.2644Z" fill="black" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                    </div>
                                </>
                            }


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
                                    <span className="tracking-[3.6px] leading-6 text-white text-lg w-full h-full font-[Cinzel] font-extralight">{item.name}</span>
                                </div>
                            </div>
                            {/* </Link>D */}

                        </div>
                    )

                })
            }
        </>



    )
}

export default Cards