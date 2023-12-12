"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BeatLoader } from "react-spinners";
import { ToastError , ToastSuccess } from "@/app/components/toasters/taoster";
import {ValidateEmail } from "@/helpers/validation/validator";
import axios from "axios";


const Page = () => {

    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
    });


    const [loading, setLoading] = useState(false);

    


    const onSubmit = async (e) => {

        setLoading(true);
        e.preventDefault();

        try {
            if (
                user.email.length > 0
            ) {
                if (ValidateEmail(user.email)) {
                    console.log("email is",user)
                    const res = await axios.post("/api/users/forgetpassword",user)
                    console.log("emai",res)
                    if(res.status == 200){
                        ToastSuccess(res.data.message)
                    }
                    else{
                        ToastError(res.data.message)
                    }
                }
                else {

                    ToastError("Please Enter Valid Email Address")
                }
            }

            else {
                ToastError("Fill The Given Form")
            }
        }

        catch (error) {
            console.log("error",error)
            ToastError("Error: " + error)
        } finally {
            setLoading(false);
        }
    };

    

    return (
        <>
            <div className="main">
            <div className="forgetpassform" >
                    <form action="#" style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                        <h1 className="text-2xl mb-5 text-center">Forgot Password</h1>
                        <input style={{ padding: 10, borderWidth: 1, marginBottom: 20, borderRadius: 20 , marginTop:20 }} type="email" placeholder="Email" value={user.email} onChange={(e) => {
                            setUser({ ...user, email: e.target.value })
                    }} />
                    <button className="custom-btn btn-15 h-10 mt-5" onClick={onSubmit}
                            disabled={false}>

                            {loading ? <BeatLoader size={5} className={""} color={"white"} />: "Verify email"}</button>
                    </form>
                        </div>
            </div>
            
        </>
    );
};
export default Page;