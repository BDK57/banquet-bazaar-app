"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EditOutlined, EllipsisOutlined, SettingOutlined, DeleteOutlined, PlusOutlined, ArrowDownOutlined, ArrowUpOutlined, ExclamationCircleFilled, InboxOutlined, CloseOutlined, UploadOutlined, CheckOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Avatar, Button, Card, Skeleton, Switch, Drawer, Image, Col, Statistic, Space, Select, Modal, message, Upload, Progress } from "antd";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ToastSuccess } from "../toasters/taoster";
import { login } from "@/redux/userslice/userslice";
const { Meta } = Card;
const { Option } = Select;
const { confirm } = Modal;
const UserDashboard = () => {

   const [swticher, setswticher] = useState({
      UserProfile: true,
      Favorites: false,
   });

   
   const userdata = useSelector((state) => state.user);
   const [filteredHalls, setFilteredHalls] = useState([]);
   const [loading, setLoading] = useState(false);

   const onChange = (checked) => {
      console.log("helo")
      setLoading(!checked);
   };

   
   let dispatch = useDispatch();
   console.log("userdata",userdata)


   useEffect(() => {
      GetAllHalls();
   }, [userdata.userdata.favourites])


   const GetAllHalls = async () => {
      // setisloadin(true)
      setLoading(true)
      console.log("user data",userdata.userdata)
      const res = await axios.get('/api/Vendor/Hall');
      // setisloadin(false)
      console.log(res.data.data)
      console.log(userdata.userdata.favourites)
      if (res.data.data.length > 0 && userdata.userdata.favourites.length > 0) {
         const filteredData = res.data.data.filter(hall => userdata.userdata.favourites.includes(hall._id));
         console.log("filtereddata", filteredData)
         setLoading(false)
         setFilteredHalls(filteredData);
      }
      else{
         setFilteredHalls([])
      }

   }

   const showDeleteConfirm = async (itemdata) => {
      console.log("item",itemdata)
      const response = await axios.post(`/api/RemoveFavHalls/${itemdata._id}`)
      console.log("repose is",response)
      if(response.data.status == 200){
         ToastSuccess(response.data.message);
         dispatch(login(response.data.data));
         GetAllHalls();
         
      }
   }

   
  


















   return (
      <>
         <div id="view" className="container mt-3 mx-auto h-full w-screen flex flex-row static inset-0 font-[Cinzel]">
            <button className="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden">
               <svg className="w-5 h-5 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                     fillRule="evenodd"
                     d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                     clipRule="evenodd"
                  />
               </svg>
            </button>
            <div
               id="sidebar"
               className="bg-white h-screen md:block shadow-xl px-3 w-5/12 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
               x-show="sidenav"
            >
               <div className="space-y-6 md:space-y-10 mt-10">

                  
                  <div id="profile" className="space-y-3">
                     <img
                        src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D"
                        alt="Avatar user"
                        className="w-10 h-10 md:w-20 md:h-20 rounded-full mx-auto object-contain border-2 border-[#d5af80]"
                     />
                     <div>
                        <h2 className="font-medium text-xs md:text-sm text-center text-teal-500">{userdata.userdata?.username}</h2>
                     </div>
                  </div>
                  
                  <div id="menu" className="flex flex-col space-y-2">
                     <a
                        href
                        className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#d5af80] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
                        onClick={() => {
                           setswticher({ UserProfile: true, Favorites: false });
                        }}
                     >
                        <svg className="w-6 h-6 fill-current inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        <span style={{ marginLeft: 20 }} className>Home</span>
                     </a>
                     <a
                        href
                        className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#d5af80] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
                        onClick={() => {
                           setswticher({ UserProfile: false, Favorites: true });
                        }}
                     >
                        <svg className="w-6 h-6 fill-current inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        <span style={{ marginLeft: 20 }} className>My Favorites</span>
                     </a>
                  </div>
               </div>
            </div>

            <div className=" relative" style={{ width: "calc(100% - 15rem)" }}>
               <div className={`absolute inset-0 space-x-10 ${swticher.UserProfile ? "block" : "hidden"}`}>
                  <div className="w-full mx-10">
                     <div className="flex justify-between">
                        <div className="none1">
                           <h3 className="text-3xl font-semibold">UserProfile</h3>
                        </div>
                     </div>
                  </div>



               </div>
               <div className={`absolute inset-0 space-x-10 ${swticher.Favorites ? "block" : "hidden"}`}>
                  <div className="w-full mx-10">
                     <div className="flex justify-between">
                        <div className="none1">
                           <h3 className="text-3xl font-semibold">My Favorite Halls</h3>
                        </div>
                     </div>
                  </div>
                  
                  {
                     filteredHalls.length > 0 ? (
                        <>
                        <div className="w-full">
                  
                        <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        
                        slidesPerView={'auto'}
                        mousewheel={true}
                     
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                        breakpoints={{
                           320: {
                              slidesPerView: 1.2,
                              centeredSlides: true,
                           },
                           768: {
                              slidesPerView: 1,
                           },
                           1024: {
                              slidesPerView: 1,
                           },
                        }}
                     >
                        {
                           filteredHalls.map((itemdata, index) => {

                              return (
                                 <SwiperSlide key={index}>
                                    <div className="border rounded p-2 lg:p-10 mt-5">
                                       <div style={{display:'flex',justifyContent:'space-between'}} className="pb-3 mb-5 lg:px-5 border-b border-b-black border-opacity-50">
                                       <Switch checked={!loading} onChange={onChange} className="bg-slate-500" />
                                          <div >
                                             <Button icon={<DeleteOutlined />} className="btn_hover"
                                                onClick={() => showDeleteConfirm(itemdata)}>
                                                Delete Hall
                                             </Button>
                                          </div>
                                       </div>
                                       <Card
                                         loading={loading}
                                          style={{
                                             width: "100%",
                                             marginTop: 16,
                                          }}
                                          className="dashboard-hall-card"
                                       >
                                          <div className="font-[Cinzel] flex justify-between flex-col items-center gap-4 lg:flex-row">
                                             <Image.PreviewGroup
                                                preview={{
                                                   onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                                }}
                                             >
                                                <Image width={"70%"} src={itemdata.galleryImage[0]} className="rounded" />

                                             </Image.PreviewGroup>


                                             <div className="flex flex-col w-full justify-end mx-5">
                                                <div className="grid grid-cols-2 space-x-5">

                                                   <Card bordered={false}>
                                                      <Statistic
                                                         title="Active"
                                                         value={11.28}
                                                         precision={2}
                                                         valueStyle={{
                                                            color: '#3f8600',
                                                         }}
                                                         prefix={<ArrowUpOutlined />}
                                                         suffix="%"
                                                      />
                                                   </Card>

                                                   <Card bordered={false}>
                                                      <Statistic
                                                         title="Idle"
                                                         value={9.3}
                                                         precision={2}
                                                         valueStyle={{
                                                            color: '#cf1322',
                                                         }}
                                                         prefix={<ArrowDownOutlined />}
                                                         suffix="%"
                                                      />
                                                   </Card>
                                                </div>
                                                <div className="grid grid-cols-3 gap-2 my-5">
                                                   <div className="description">
                                                      <h3>Hall Name</h3>
                                                      <h3 className="font-bold">{itemdata.name}</h3>
                                                   </div>
                                                   <div className="description">
                                                      <h3>Capacity</h3>
                                                      <h3 className="font-bold">{itemdata.capacity}</h3>
                                                   </div>
                                                   <div className="description">
                                                      <h3>Price</h3>
                                                      <h3 className="font-bold">{itemdata.Price}</h3>
                                                   </div>
                                                </div>
                                             </div>

                                          </div>
                                       </Card>
                                    </div>
                                 </SwiperSlide>
                              )

                           })
                        }
                     </Swiper>
                     
                 

               </div>
               <div className="relative">
                  <div className="carucel_arrow  hidden lg:flex  lg:absolute right-0 lg:z-10 text-[#2f4d4b] lg:w-max-content lg:text-sm lg:leading-5 lg:font-[Cinzel] lg:align-middle mt-10">
                     <div className="carucel_prev_arrow arrow-right lg:flex lg:items-center lg:mr-[58px]">
                        <span className="name">previous</span>
                        <div
                           className="arrow_wrapper lg:ml-2 lg:w-[40px] lg:h-[40px] lg:border-2 lg:border-[#2f4d4b] lg:relative lg:overflow-hidden lg:after:content-[''] lg:after:block lg:after:absolute lg:after:w-full lg:after:h-full lg:after:right-[-100%] lg:after:top-0 lg:after:bg-[#2f4d4b]"
                           style={{ transition: "color .6s ease" }}
                        >
                           <svg
                              className="lg:absolute
 lg:top-[50%]
 lg:left-[50%]
 
 lg:translate-x-[-50%]
 lg:translate-y-[-50%]
 text-2xl"
                              xmlns="http://www.w3.org/2000/svg"
                              preserveAspectRatio="xMinYMin meet"
                              viewBox="0 0 18 9.873"
                           >
                              <path d="M4.937 9.873l.8-.8-3.568-3.568H18V4.373H2.171L5.739.805l-.8-.8L0 4.936z" />
                           </svg>
                        </div>
                     </div>

                     <div className="carucel_next_arrow arrow-left lg:flex lg:flex-row-reverse lg:items-center lg:mr-[28px]">
                        <span className="name">next</span>
                        <div className="arrow_wrapper lg:mr-2 lg:w-[40px] lg:h-[40px] lg:border-2 lg:border-[#2f4d4b] lg:relative lg:overflow-hidden lg:after:content-[''] lg:after:block lg:after:absolute lg:after:w-full lg:after:h-full lg:after:right-[-100%] lg:after:top-0 lg:after:bg-[#2f4d4b]">
                           <svg
                              className=' lg:absolute lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] text-2xl"'
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 18 9.873"
                              preserveAspectRatio="xMinYMin meet"
                           >
                              <path d="M13.063 0l-.8.8 3.568 3.568H0V5.5h15.829l-3.568 3.568.8.8L18 4.937z" />
                           </svg>
                        </div>
                     </div>
                  </div>
               </div>
               </>
                     ):(
                        <div style={{height:'70%',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                           
                           <h2
                className={`text-xl font-normal sm:text-4xl sm:font-medium flex flex-col justify-center items-center text-center uppercase font-[Cinzel] 
                   
                    
                    

                   
                    
                    
                    `}
            >
                           No Halls Has been Added yet
                
            </h2>
                           </div>
                     )
                  }
                 
               </div>
            </div>
         </div >
      </>
   );
};

export default UserDashboard;
