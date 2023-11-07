'use client'
import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import HallCss from '@/app/components/cssmodules/Collectionhall.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { addbanquetdata } from '@/redux/banquetSlice/banquetslice'

function Collectionhall() {

  useEffect(() => {
    GetAllHalls();
  }, [])

  const [halls, sethalls] = useState([])
  let dispatch = useDispatch();

  const GetAllHalls = async () => {
    const res = await axios.get('/api/Vendor/Hall');
    console.log("resss", res.data)
    if (res.data) {
      sethalls(res.data.data)
      console.log(res.data.data)
      dispatch(addbanquetdata(res.data.data))
    }
  }



  return (
    <section className='d-flex mt-5 justify-center items-center'>
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
        Banquet Halls
      </h2>
      <div className='container mx-auto flex justify-center items-center'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2">
          {
            halls.map((item) => {
              return (
                <Link key={item._id} href={`/banquet/${item._id}`} className={`${HallCss.maincontainer}`}>
                  <div className={`${HallCss.back}`} >
                    <h2>{item.name}</h2>
                    <p>{item.Description}</p>
                  </div>
                  <div className={`${HallCss.front}`} >
                    <div className={`${HallCss.image}`} >
                      <Image alt={item.name}  layout='fill'
                        objectFit='cover' src={item.coverimage} />
                      <h2>Copywriting</h2>
                    </div>
                  </div>
                </Link>
              )
            })
          }


        </div>
      </div>
    </section>

  )
}

export default Collectionhall