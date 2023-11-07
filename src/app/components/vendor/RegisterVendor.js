"use client";
import React, { useState } from "react";
import formstyle from "@/app/components/vendor/vendorform.module.css";
function RegisterVendor(props) {
  console.log("props", props);
  const [vendor, setvendor] = useState({
    name: props.userdata.displayName,
    email: props.userdata.email,
    phone: "",
    Address: "",
  });

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
              value={vendor.name}
              onChange={(e) => { }}
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
              value={vendor.email}
              onChange={(e) => { }}
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
              value={vendor.Address}
              multiple
              onChange={(e) => { }}
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
              value={vendor.phone}
              onChange={(e) => { }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
            <button className="custom-btn" style={{ width: '50%', alignContent: 'center' }}>
              Register
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default RegisterVendor;
