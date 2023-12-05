"use client";
import React, { useState } from "react";
import formstyle from "@/app/components/vendor/vendorform.module.css";
import axios from "axios";
import { ToastSuccess } from "../toasters/taoster";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { login, vendordata } from "@/redux/userslice/userslice";
function RegisterVendor(props) {
  console.log("props", props);

  const [name , setname] = useState(props?.userdata?.username)
  const [email,setemail] = useState(props?.userdata?.email)
  const[phone , setphone] = useState('')
  const[Address , setAddress] = useState('')
  let route = useRouter();
  let dispatch = useDispatch();


  const registerToVendor = async (e) => {
    e.preventDefault();
    const data = {
      username:name,
      email:email,
      phone:phone,
      Address:Address,
      userid:props?.userdata?._id
    }
    
    console.log("data",data)
    console.log("data iss",data)
    const res = await axios.post('/api/Vendor/register',data)
    console.log("res",res.data)
    if(res.data.status == 200){
      ToastSuccess(res.data.msg)
      const user = await axios.get('/api/users/currentUser')
      console.log("user",user)
      dispatch(vendordata(data))
      dispatch(login(user.data.data))
      props.Handleclosemodal();
      route.push('/')
      
    }

  }


  return (
    <section className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <form className={`${formstyle.vendorform}`}>
        <div className={`${formstyle.vendorheader}`}>
          <h1>Be Our Vendor </h1>
          <svg  onClick={()=>props.Handleclosemodal()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div className={`${formstyle.inputfieldcontent}`}>
          <div className={`${formstyle.row}`}>
            <label class=" text-sm font-bold" for="username">
              Username
            </label>
            <input
              class="shadow appearance-none border rounded py-2 px-3 w-50   focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => { setname(e.target.value)}}
            />
          </div>
          <div className={`${formstyle.row}`}>
            <label class=" text-sm font-bold">
              email
            </label>
            <input
              class="shadow appearance-none border rounded py-2 px-3 w-50   focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Enter Your email"
              value={email}
              onChange={(e) => { setemail(e.target.value)}}
            />
          </div>
          <div className={`${formstyle.row}`}>
            <label class="text-sm font-bold">
              Address
            </label>
            <input
              class="shadow appearance-none border rounded py-2 px-3 w-50   focus:outline-none focus:shadow-outline"
              id="Address"
              type="text"
              placeholder="Adress"
              value={Address}
              multiple
              onChange={(e) => { setAddress(e.target.value)}}
            />
          </div>
          <div className={`${formstyle.row}`}>
            <label class="text-sm font-bold" for="username">
              phone
            </label>
            <input
              class="shadow appearance-none border rounded py-2 px-3 w-50   focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="phone"
              value={phone}
              onChange={(e) => { setphone(e.target.value)}}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
            <button onClick={registerToVendor} className="custom-btn" style={{ width: '50%', alignContent: 'center' }}>
              Register
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default RegisterVendor;
