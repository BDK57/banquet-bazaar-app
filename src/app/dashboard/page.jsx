"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserDashboard from "../components/user/UserDashboard";
import VendorDashBoard from "../components/vendor/VendorDashBoard";
const page = () => {


   const userdata = useSelector((state) => state.user);



   return (
      <>
        {userdata?.userdata?.usertype === 'user' && <UserDashboard/>}
        {userdata?.userdata?.usertype === 'vendor' && <VendorDashBoard/>}
      </>
   );
};

export default page;
