"use client";
// import Header from "../component/Header";
// import Footer from "../component/Footer";
// import { Plus } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EditOutlined, EllipsisOutlined, SettingOutlined, DeleteOutlined, PlusOutlined, ArrowDownOutlined, ArrowUpOutlined, ExclamationCircleFilled, InboxOutlined, CloseOutlined, UploadOutlined, CheckOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Avatar, Button, Card, Skeleton, Switch, Drawer, Image, Col, Statistic, Space, Select, Modal, message, Upload, Progress } from "antd";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const { Meta } = Card;
const { Option } = Select;
const { confirm } = Modal;
// Import Swiper styles
import "swiper/css";
import axios from "axios";
import { ToastSuccess } from "../toasters/taoster";
// import { ToastSuccess } from "../components/toasters/taoster";
const VendorDashBoard = () => {

   const [swticher, setswticher] = useState({
      HallsManagement: false,
      HomeDashboard: true,
      ShowFavorites:false,
   });

   const [userhalls, setuserHalls] = useState([])
   const [hall, setHall] = useState({
      name: "",
      description: "",
      location: "",
      vendorid: "",
      capacity: "",
      price: "",
   })

   function handleChange(evt) {
      const value = evt.target.value;
      setHall({
         ...hall,
         [evt.target.name]: value
      });
   }

   useEffect(() => {
      GetAllHalls();
   }, [])

   const GetAllHalls = async () => {
      setLoading(true)
      const res = await axios.get('/api/Vendor/Hall');
      if (res.data) {
         console.log("data is", res.data.data)
         const id = await localStorage.getItem('vendorid');
         console.log("vendor id", id);
         const newdata = res.data.data.filter((item) => item.vendorid === id);
         console.log("new data is", newdata);
         if (newdata.length !== 0) {
            setuserHalls(newdata)
            setLoading(false)
         }
         else {
            setuserHalls([])
            setLoading(false)
         }
      }
   }


   const submithandle = async (e) => {
      e.preventDefault();
      console.log("file list", fileList)
      const id = await localStorage.getItem('vendorid');
      console.log("id", id)
      const data = {
         name: hall.name,
         Description: hall.description,
         vendorid: id,
         capacity: hall.capacity,
         Price: hall.price,
         galleryImage: fileList,
         location: hall.location
      }

      console.log("data is", data)

      const res = await axios.post('/api/Vendor/Hall/Add', data)

      if (res.data.status == 200) {
         confirm({
            title: 'Hall has been Added',
            icon: <CheckOutlined />,
            onOk() {
               GetAllHalls();
               onCloseAddHalls();

            },
            onCancel() {
               console.log('Cancel');
            },
         });
      }
      else {
         ToastError("Hall has Not Been Added")
      }
   }


   const [open, setOpen] = useState(false);
   const [openAddHalls, setOpenAddHalls] = useState(false);

   const showDrawer = async (item) => {
      console.log("item to update is",item)
      const hallid = await localStorage.setItem("hallid",item._id);
      setHall({
         name: item.name,
         description: item.description,
         location: item.location,
         vendorid: item.vendorid,
         capacity: item.capacity,
         price: item.price,
      })

      item.galleryImage.map((item) => {
         setFileList(prevFileList => [...prevFileList, item]);
      })
      setOpen(true);
   };

   const onClose = () => {

      setOpen(false);
   };

   const showDrawerAddHalls = () => {
      setHall({
         name: "",
         description: "",
         location: "",
         vendorid: "",
         capacity: "",
         price: "",
      })
      setFileList([])
      setOpenAddHalls(true);
   };

   const onCloseAddHalls = () => {
      setOpenAddHalls(false);
   };
   const [loading, setLoading] = useState(false);

   const onChange = (checked) => {
      console.log("helo")
      setLoading(!checked);
   };


   const showDeleteConfirm = async (item) => {
      confirm({
         title: 'Are you sure delete this task?',
         icon: <ExclamationCircleFilled />,
         content: 'Some descriptions',
         okText: 'Yes',
         okType: 'danger',
         cancelText: 'No',
         className: "custom_confirm_delete",
         onOk() {
            const handledelete = async () => {
               console.log("item",item)
               const res = await axios.delete(`/api/Vendor/Hall/${item._id}`)
               console.log("res",res.data)
               if(res.data.status == 200){
                  GetAllHalls();

                  ToastSuccess("hall has been deleted")
               }
            }
            handledelete();
         },
         onCancel() {
            console.log('Cancel');
         },
      });
   };

   const showConfirm = (e) => {
      confirm({
         title: 'Confirm You Want to Save Changes',
         icon: <ExclamationCircleFilled />,
         content: 'Some descriptions',
         onOk() {
            const updatehall = async () => {
               const data = {
                  name: hall.name,
                  Description: hall.description,
                  vendorid: hall.vendorid,
                  capacity: hall.capacity,
                  Price: hall.price,
                  galleryImage: fileList,
                  location: hall.location
               }
               const _id = await localStorage.getItem('hallid');
               console.log("hall",_id)

               const response = await axios.patch(`/api/Vendor/Hall/${_id}`,data)
               console.log("reponse id",response)
               if(response.data.status ==200){
                  ToastSuccess("hall has been updated")
                  setOpen(false)
                  GetAllHalls();
               }
             }
             updatehall();
         },
         onCancel() {
           
             
         },
      });
      e.preventDefault();
   };


   const { Dragger } = Upload;
   const [fileList, setFileList] = useState([]);
   const [thumbnailIndex, setThumbnailIndex] = useState(-1);

   const maxImages = 15;
   const uploadProps = {
      multiple: true,
      fileList,
      beforeUpload: (file) => {
         if (fileList.length + 1 <= maxImages) {
            uploadImage(file)
         } else {
            message.warning(`You can only upload up to ${maxImages} images.`);
         }
         return false;
      },
   };

   const uploadImage = async (photo) => {
      console.log(photo)
      const data = new FormData()
      data.append('file', photo)
      data.append('upload_preset', 'wpquplfl')
      data.append("cloud_name", "dvfpc6w7x")
      await fetch("https://api.cloudinary.com/v1_1/dvfpc6w7x/upload", {
         method: "post",
         body: data
      }).then(res => res.json()).
         then(data => {
            console.log(data)
     
            setFileList(prevFileList => [...prevFileList, data?.url]);

         }).catch(err => {
            console.log("An Error Occured While Uploading")
         })
   }


   const handleFileChange = ({ fileList }) => {
      setFileList(fileList);
   };

   const handleRemove = (file) => {
      const updatedFileList = fileList.filter(item => item !== file);
      setFileList(updatedFileList);

      if (thumbnailIndex === fileList.indexOf(file)) {
         setThumbnailIndex(-1);
      }
   };
   const handleThumbnailClick = (index) => {
      if (thumbnailIndex === index) {
         setThumbnailIndex(-1);
      } else {
         setThumbnailIndex(index);
      }
   };

   const getTotalSize = () => {
      const totalBytes = fileList.reduce((total, file) => total + file.size, 0);
      const totalKB = totalBytes / 1024;
      return totalKB.toFixed(2);
   };

   console.log(fileList)


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
                  
                  <h1 className="hidden md:hidden font-bold text-sm md:text-xl text-center">
                     Dashwind<span className="text-teal-600">.</span>
                  </h1>
                  <div id="profile" className="space-y-3">
                     <img
                        src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D"
                        alt="Avatar user"
                        className="w-10 h-10 md:w-20 md:h-20 rounded-full mx-auto object-contain border-2 border-[#d5af80]"
                     />
                     <div>
                        <h2 className="font-medium text-xs md:text-sm text-center text-teal-500">Hassan Khan</h2>
                        <p className="text-xs text-gray-500 text-center">Administrator</p>
                     </div>
                  </div>
                  <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
                     <input
                        type="text"
                        className="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm text-gray-600 focus:outline-none"
                        placeholder="Search"
                     />
                     <button className="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block">
                        <svg className="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path
                              fillRule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clipRule="evenodd"
                           />
                        </svg>
                     </button>
                  </div>
                  <div id="menu" className="flex flex-col space-y-2">
                     <a
                        href
                        className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#d5af80] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
                        onClick={() => {
                           setswticher({ HallsManagement: false, HomeDashboard: true });
                        }}
                     >
                        <svg className="w-6 h-6 fill-current inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        <span style={{ marginLeft: 20 }} className>Home</span>
                     </a>
                     <a
                        href
                        className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#d5af80] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                        onClick={() => {
                           setswticher({ HomeDashboard: false, HallsManagement: true });
                        }}
                     >
                        <svg className="w-6 h-6 fill-current inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                        </svg>
                        <span style={{ marginLeft: 20 }} className>Halls</span>
                     </a>
                     {/* <a
                        href
                        className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#d5af80] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                     >
                        <svg className="w-6 h-6 fill-current inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                           <path
                              fillRule="evenodd"
                              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                              clipRule="evenodd"
                           />
                        </svg>
                        <span className>Reports</span>
                     </a>
                     <a
                        href
                        className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#d5af80] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                     >
                        <svg className="w-6 h-6 fill-current inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                           <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                        </svg>
                        <span className>Messages</span>
                     </a>
                     <a
                        href
                        className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#d5af80] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                     >
                        <svg className="w-6 h-6 fill-current inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path
                              fillRule="evenodd"
                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              clipRule="evenodd"
                           />
                        </svg>
                        <span className>Calendar</span>
                     </a>
                     <a
                        href
                        className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#d5af80] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                     >
                        <svg className="w-6 h-6 fill-current inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path
                              fillRule="evenodd"
                              d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"
                           />
                        </svg>
                        <span className>Table</span>
                     </a>
                     <a
                        href
                        className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#d5af80] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                     >
                        <svg className="w-6 h-6 fill-current inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                        </svg>
                        <span className>UI Components</span>
                     </a>
                     <a
                        href
                        className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#d5af80] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                     >
                        <svg className="w-6 h-6 fill-current inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                        <span className>Users</span>
                     </a> */}
                  </div>
               </div>
            </div>

            <div className="relative" style={{ width: "calc(100% - 15rem)" }}>
               <div className={`absolute inset-0 space-x-10 ${swticher.HomeDashboard ? "block" : "hidden"}`}>
                  <div className="w-full mx-10">
                     <div className="flex justify-between">
                        <div className="none1">
                           <h3 className="text-3xl font-semibold">My Halls</h3>
                        </div>
                        <Button icon={<PlusOutlined />} className="btn_hover"
                           onClick={showDrawerAddHalls}>
                           Add Hall
                        </Button>
                     </div>
                  </div>

                  <div className="w-full">
                     <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        // slidesPerView={1}
                        // slidesPerGroup={1}
                        // height={600}
                        // loop={true}
                        // direction='vertical'
                        slidesPerView={'auto'}
                        // spaceBetween: 20,
                        mousewheel={true}
                        // height={100}
                        // autoplay={{
                        //     "delay": 2500,
                        //     "disableOnInteraction": false
                        // }}
                        // watchSlidesVisibility={true}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                        // pagination={{ clickable: true, dynamicBullets: true }}
                        breakpoints={{
                           // when window width is >= 640px
                           320: {
                              // width: 640,
                              slidesPerView: 1.2,
                              centeredSlides: true,
                              // centeredSlides: true
                           },
                           // when window width is >= 768px
                           768: {
                              // width: 768,
                              slidesPerView: 1,
                           },
                           1024: {
                              // width: 768,
                              slidesPerView: 1,
                           },
                        }}
                     >
                        {
                           userhalls.map((itemdata,index) => {
                              return (
                                 <SwiperSlide key={index}>
                                    <div className="border rounded p-2 lg:p-10">
                                       <div className="flex justify-between items-center pb-3 mb-5 lg:px-5 border-b border-b-black border-opacity-50">
                                          <Switch checked={!loading} onChange={onChange} className="bg-slate-500" />
                                          <div>
                                             <Button icon={<DeleteOutlined />} className="btn_hover"
                                                onClick={() => showDeleteConfirm(itemdata)}>
                                                Delete Hall
                                             </Button>
                                             <Button icon={<EditOutlined />} className="btn_hover ml-2"
                                                onClick={() => showDrawer(itemdata)}>
                                                Edit Hall
                                             </Button>
                                          </div>
                                       </div>
                                       <Card
                                          style={{
                                             width: "100%",
                                             marginTop: 16,
                                          }}
                                          loading={loading}
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
                                                      <h3>Book Status</h3>
                                                      <h3 className="font-bold">Open</h3>
                                                   </div>
                                                   <div className="description">
                                                      <h3>Book Status</h3>
                                                      <h3 className="font-bold">Open</h3>
                                                   </div>
                                                   <div className="description">
                                                      <h3>Book Status</h3>
                                                      <h3 className="font-bold">Open</h3>
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



                        {/* EDIT HALL DRAWER */}
                        <Drawer title="Edit Hall" placement="right" destroyOnClose={true} closable={false} onClose={onClose} open={open} getContainer={false} styles={{
                           fontFamily: "Cinzel",
                           body: {
                              paddingBottom: 80,
                              fontFamily: 'Cinzel'
                           },
                        }}>
                           <form action="#" method="POST">
                              <div className="-mx-3 flex flex-wrap">
                                 <div className="w-full px-3 sm:w-1/2">
                                 <div className="mb-5">
                                             <label htmlFor="Hall name" className="mb-3 block text-base font-medium text-[#07074D]">
                                                Hall Name
                                             </label>
                                 <input value={hall.name} onChange={handleChange} type="text" name="name" id="hallname" placeholder="Hallname" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-mainColor focus:shadow-md" />
                                 </div>
                                 </div>
                                 <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                       <label  className="mb-3 block text-base font-medium text-[#07074D]">
                                          Address
                                       </label>
                                       <input type="text" name="lName" id="lName" placeholder="Last Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-mainColor focus:shadow-md" />
                                    </div>
                                 </div>
                              </div>

                              <div className="-mx-3 flex flex-wrap">
                                 <div className="w-full px-3 sm:w-1/2">
                                 <div className="mb-5">
                                             <label  className="mb-3 block text-base font-medium text-[#07074D]">
                                                Price
                                             </label>
                                 <input value={hall.price} onChange={handleChange} type="number" name="price" id="price" placeholder="price" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-mainColor focus:shadow-md" />
                                 </div>
                                 </div>
                                 <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                       <label className="mb-3 block text-base font-medium text-[#07074D]">
                                          Capacity
                                       </label>
                                       <input value={hall.capacity} type="number" name="capacity" id="capacity" placeholder="capacity" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-mainColor focus:shadow-md" />
                                    </div>
                                 </div>
                              </div>


                              <label for="Description" class="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                              <textarea name="description" onChange={handleChange} value={hall.description} id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 mb-5 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>


                              <div className="sm:max-w-lg w-full bg-white rounded-xl z-10 mx-auto mb-5">
                                 <Dragger {...uploadProps}>
                                    <p className="ant-upload-drag-icon flex justify-center">
                                       <img className='bg-[#F2F4F7] p-2 rounded-full' src={'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVwbG9hZC1jbG91ZCI+PHBhdGggZD0iTTQgMTQuODk5QTcgNyAwIDEgMSAxNS43MSA4aDEuNzlhNC41IDQuNSAwIDAgMSAyLjUgOC4yNDIiLz48cGF0aCBkPSJNMTIgMTJ2OSIvPjxwYXRoIGQ9Im0xNiAxNi00LTQtNCA0Ii8+PC9zdmc+'} alt="" />
                                    </p>
                                    <p style={{ color: '#0068B3' }} className="ant-upload-text text-SkyColor font-medium">
                                       Click to upload <span className='text-textLight'>drag and drop</span>
                                    </p>
                                    <p className="ant-upload-hint text-textLight font-medium">
                                       PNG, JPG or JPEG (max {maxImages} photos)
                                    </p>
                                 </Dragger>

                                 <div className="mt-4 border rounded-md py-2 px-2">
                                    <p className='text-textGrey text-sm font-medium'>Hall Pic: {fileList.length}</p>
                                    <p className='text-textGrey text-sm'>Total Size: {getTotalSize()}KB</p> {/* Add "KB" directly after the size */}
                                    <Progress percent={((fileList.length / maxImages) * 100).toFixed(0)} />
                                 </div>
                                 <div className="mt-4">
                                    {fileList.map((file, index) => (
                                       console.log("file", file.url),
                                       <div key={index} className="image-item" style={{ width: 150, height: 250, display: 'inline-block', position: 'relative', marginRight: '10px' }}>
                                          <img onClick={() => handleThumbnailClick(index)} src={file} alt={`Uploaded ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                          <Button className='bg-[#FFA09B] text-dangerColor flex justify-center items-center' type="danger" size="small" shape="circle" icon={<CloseOutlined />} onClick={() => handleRemove(file)} style={{ position: 'absolute', top: '35px', right: '-5px' }} />

                                          {thumbnailIndex === index && <span className="thumbnail-label">Thumbnail</span>}

                                       </div>
                                    ))}
                                 </div>
                              </div>
                              <div>
                                 <button onClick={showConfirm} className="hover:shadow-form rounded-md bg-mainColor py-3 px-8 text-center text-base font-semibold text-white outline-none hover:bg-transparent border  hover:border-mainColor hover:text-mainColor transition-all">
                                    Save Changes
                                 </button>

                              </div>
                           </form>
                        </Drawer>
                        
                        <Drawer
                           width={720}
                           onClose={onCloseAddHalls}
                           open={openAddHalls}
                           styles={{
                              fontFamily: "Cinzel",
                              body: {
                                 paddingBottom: 80,
                                 fontFamily: 'Cinzel'
                              },
                           }}
                        >
                           <div className="flex items-center justify-center ">
                              <div className="mx-auto w-full max-w-[550px]">
                                 <form action="#" method="POST" onSubmit={submithandle}>
                                    <div className="-mx-3 flex flex-wrap">
                                       <div className="w-full px-3 sm:w-1/2">
                                          <div className="mb-5">
                                             <label htmlFor="Hall name" className="mb-3 block text-base font-medium text-[#07074D]">
                                                Hall Name
                                             </label>
                                             <input value={hall.name} onChange={handleChange} type="text" name="name" id="hallname" placeholder="Hallname" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-mainColor focus:shadow-md" />
                                          </div>
                                       </div>
                                       <div className="w-full px-3 sm:w-1/2">
                                          <div className="mb-5">
                                             <label htmlFor="Location" className="mb-3 block text-base font-medium text-[#07074D]">
                                                Location
                                             </label>
                                             <input onChange={handleChange} value={hall.location} type="text" name="location" id="Location" placeholder="Location" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-mainColor focus:shadow-md" />
                                          </div>
                                       </div>
                                    </div>

                                    <div className="-mx-3 flex flex-wrap">
                                       <div className="w-full px-3 sm:w-1/2">
                                          <div className="mb-5">
                                             <label htmlFor="price" className="mb-3 block text-base font-medium text-[#07074D]">
                                                Price
                                             </label>
                                             <input onChange={handleChange} value={hall.price} type="number" name="price" id="Price" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-mainColor focus:shadow-md" />
                                          </div>
                                       </div>
                                       <div className="w-full px-3 sm:w-1/2">
                                          <div className="mb-5">
                                             <label htmlFor="Capacity" className="mb-3 block text-base font-medium text-[#07074D]">
                                                Capacity
                                             </label>
                                             <input onChange={handleChange} value={hall.capacity} type="number" name="capacity" id="Capacity" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-mainColor focus:shadow-md" />
                                          </div>
                                       </div>
                                    </div>


                                    <label for="Description" class="block mb-2 mt-5 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                    <textarea name="description" onChange={handleChange} value={hall.description} id="description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 mb-5 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>


                                    <Dragger {...uploadProps}>
                                       <p className="ant-upload-drag-icon flex justify-center">
                                          <img className='bg-[#F2F4F7] p-2 rounded-full' src={'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVwbG9hZC1jbG91ZCI+PHBhdGggZD0iTTQgMTQuODk5QTcgNyAwIDEgMSAxNS43MSA4aDEuNzlhNC41IDQuNSAwIDAgMSAyLjUgOC4yNDIiLz48cGF0aCBkPSJNMTIgMTJ2OSIvPjxwYXRoIGQ9Im0xNiAxNi00LTQtNCA0Ii8+PC9zdmc+'} alt="" />
                                       </p>
                                       <p style={{ color: '#0068B3' }} className="ant-upload-text text-SkyColor font-medium">
                                          Click to upload <span className='text-textLight'>drag and drop</span>
                                       </p>
                                       <p className="ant-upload-hint text-textLight font-medium">
                                          PNG, JPG or JPEG (max {maxImages} photos)
                                       </p>
                                    </Dragger>

                                    <div className="mt-4 border rounded-md py-2 px-2">
                                       <p className='text-textGrey text-sm font-medium'>Hall Pic: {fileList.length}</p>
                                       <p className='text-textGrey text-sm'>Total Size: {getTotalSize()}KB</p> {/* Add "KB" directly after the size */}
                                       <Progress percent={((fileList.length / maxImages) * 100).toFixed(0)} />
                                    </div>
                                    <div className="mt-4">
                                       {fileList.map((file, index) => (
                                          <div key={index} className="image-item" style={{ width: 126, height: 126, display: 'inline-block', position: 'relative', marginRight: '10px' }}>
                                             <img onClick={() => handleThumbnailClick(index)} src={file} alt={`Uploaded ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                             <Button className='bg-[#FFA09B] text-dangerColor flex justify-center items-center' type="danger" size="small" shape="circle" icon={<CloseOutlined />} onClick={() => handleRemove(file)} style={{ position: 'absolute', top: '5px', right: '5px' }} />

                                             {thumbnailIndex === index && <span className="thumbnail-label">Thumbnail</span>}

                                          </div>
                                       ))}
                                    </div>
                                    <div>
                                       <button type="submit" className="mt-5 mb-5 hover:shadow-form rounded-md bg-mainColor py-3 px-8 text-center text-base font-semibold text-white outline-none hover:bg-transparent border  hover:border-mainColor hover:text-mainColor transition-all">
                                          Add New Hall
                                       </button>
                                    </div>
                                 </form>
                              </div>
                           </div>

                        </Drawer>
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
               </div>
               
               <div className={`absolute inset-0 ${swticher.HallsManagement ? "block" : "hidden"}`} id="HallsManagement">
                  {" "}
                  <div class="h-full w-full mx-auto bg-white">
                     <div class="container  mx-auto flex justify-center items-center p-2 md:p-0">
                        <div class="border border-gray-300 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg">
                           {/* <div class="flex flex-col md:flex-row">
                            <div class="">
                                <select class="border p-2 rounded">
                                    <option>Round-trip</option>
                                    <option>Missouri</option>
                                    <option>texas</option>
                                </select>
                            </div>
                            <div class="pt-6 md:pt-0 md:pl-6">
                                <select class="border p-2 rounded">
                                    <option>4 Passangers</option>
                                    <option>3 Passangers</option>
                                    <option>2 Passangers</option>
                                </select>
                            </div>
                            <div class="pt-6 md:pt-0 md:pl-6">
                                <select class="border p-2 rounded">
                                    <option>Economy</option>
                                </select>
                            </div>
                        </div> */}
                           <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div class="grid grid-cols-2 gap-2 border border-gray-200 p-2 rounded">
                                 <div class="flex border rounded bg-gray-300 items-center p-2 ">
                                    <svg
                                       class="fill-current text-gray-800 mr-2 w-5"
                                       xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 0 24 24"
                                       width="24"
                                       height="24"
                                    >
                                       <path
                                          class="heroicon-ui"
                                          d="M14 5.62l-4 2v10.76l4-2V5.62zm2 0v10.76l4 2V7.62l-4-2zm-8 2l-4-2v10.76l4 2V7.62zm7 10.5L9.45 20.9a1 1 0 0 1-.9 0l-6-3A1 1 0 0 1 2 17V4a1 1 0 0 1 1.45-.9L9 5.89l5.55-2.77a1 1 0 0 1 .9 0l6 3A1 1 0 0 1 22 7v13a1 1 0 0 1-1.45.89L15 18.12z"
                                       />
                                    </svg>
                                    <input type="text" placeholder="Enter Address" class="bg-gray-300 max-w-full focus:outline-none text-gray-700" />
                                 </div>
                                 <div class="flex border rounded bg-gray-300 items-center p-2 ">
                                    <svg
                                       class="fill-current text-gray-800 mr-2 w-5"
                                       xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 0 24 24"
                                       width="24"
                                       height="24"
                                    >
                                       <path
                                          class="heroicon-ui"
                                          d="M13.04 14.69l1.07-2.14a1 1 0 0 1 1.2-.5l6 2A1 1 0 0 1 22 15v5a2 2 0 0 1-2 2h-2A16 16 0 0 1 2 6V4c0-1.1.9-2 2-2h5a1 1 0 0 1 .95.68l2 6a1 1 0 0 1-.5 1.21L9.3 10.96a10.05 10.05 0 0 0 3.73 3.73zM8.28 4H4v2a14 14 0 0 0 14 14h2v-4.28l-4.5-1.5-1.12 2.26a1 1 0 0 1-1.3.46 12.04 12.04 0 0 1-6.02-6.01 1 1 0 0 1 .46-1.3l2.26-1.14L8.28 4zm7.43 5.7a1 1 0 1 1-1.42-1.4L18.6 4H16a1 1 0 0 1 0-2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V5.41l-4.3 4.3z"
                                       />
                                    </svg>
                                    <input type="text" placeholder="Enter Your Phone Number" class="bg-gray-300 max-w-full focus:outline-none text-gray-700" />
                                 </div>
                              </div>
                              <div class="grid grid-cols-2 gap-2 border border-gray-200 p-2 rounded">
                                 <div class="flex border rounded bg-gray-300 items-center p-2 ">
                                    <svg
                                       class="fill-current text-gray-800 mr-2 w-5"
                                       xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 0 24 24"
                                       width="24"
                                       height="24"
                                    >
                                       <path
                                          class="heroicon-ui"
                                          d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
                                       />
                                    </svg>
                                    <input type="text" placeholder="Enter Name" class="bg-gray-300 max-w-full focus:outline-none text-gray-700" />
                                 </div>
                                 <div class="flex border rounded bg-gray-300 items-center p-2 ">
                                    <svg
                                       class="fill-current text-gray-800 mr-2 w-5"
                                       xmlns="http://www.w3.org/2000/svg"
                                       viewBox="0 0 24 24"
                                       width="24"
                                       height="24"
                                    >
                                       <path
                                          class="heroicon-ui"
                                          d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM5.68 7.1A7.96 7.96 0 0 0 4.06 11H5a1 1 0 0 1 0 2h-.94a7.95 7.95 0 0 0 1.32 3.5A9.96 9.96 0 0 1 11 14.05V9a1 1 0 0 1 2 0v5.05a9.96 9.96 0 0 1 5.62 2.45 7.95 7.95 0 0 0 1.32-3.5H19a1 1 0 0 1 0-2h.94a7.96 7.96 0 0 0-1.62-3.9l-.66.66a1 1 0 1 1-1.42-1.42l.67-.66A7.96 7.96 0 0 0 13 4.06V5a1 1 0 0 1-2 0v-.94c-1.46.18-2.8.76-3.9 1.62l.66.66a1 1 0 0 1-1.42 1.42l-.66-.67zM6.71 18a7.97 7.97 0 0 0 10.58 0 7.97 7.97 0 0 0-10.58 0z"
                                       />
                                    </svg>
                                    <input type="text" placeholder="Enter text here..." class="bg-gray-300 max-w-full focus:outline-none text-gray-700" />
                                 </div>
                              </div>
                           </div>

                           <div className="sm:max-w-lg w-full bg-white rounded-xl z-10 mx-auto">
                              <form className="space-y-3" action="#" method="POST">
                                 <div className="grid grid-cols-1 space-y-2">
                                    <label className="text-sm font-bold text-gray-500 tracking-wide">Attach Document</label>
                                    <div className="flex items-center justify-center w-full">
                                       <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                                          <div className="h-full w-full text-center flex flex-col items-center justify-center">
                                             {/*-<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-blue-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                          </svg>*/}
                                             <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                                                <img
                                                   className="has-mask h-36 object-center"
                                                   src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                                                   alt="freepik image"
                                                />
                                             </div>
                                             <p className="pointer-none text-gray-500 ">
                                                <span className="text-sm">Drag and drop</span> files here <br /> or{" "}
                                                <a href id className="text-blue-600 hover:underline">
                                                   select a file
                                                </a>{" "}
                                                from your computer
                                             </p>
                                          </div>
                                          <input type="file" className="hidden" />
                                       </label>
                                    </div>
                                 </div>
                                 <p className="text-sm text-gray-300">
                                    <span>File type: doc,pdf,types of images</span>
                                 </p>
                              </form>
                           </div>

                           <div class="flex justify-center">
                              <button class="p-2 border w-1/4 rounded-md bg-[#d5af80] text-white">Add Halls</button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div >
         </div >
      </>
   );
};

export default VendorDashBoard;
