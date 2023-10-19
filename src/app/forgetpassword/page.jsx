"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BeatLoader } from "react-spinners";
import { ToastSuccess,ToastError } from "../components/toasters/taoster";
import {ValidateEmail } from "@/helpers/validation/validator";
import axios from "axios";


const Page = () => {

    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
    });


    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user.email.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);


    const onSubmit = async (e) => {

        setLoading(true);
        e.preventDefault();

        try {
            if (
                user.email.length > 0
            ) {
                if (ValidateEmail(user.email)) {
                    const res = await axios.post('api/users/forgetpassword',user)
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
            ToastError("Error: " + error)
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="bg">
            </div>
            <div className="container newform">
                    <form action="#">
                        <h1 className="text-2xl mb-5">Forgot Password</h1>
                        <input type="email" placeholder="Email" value={user.email} onChange={(e) => {
                            setUser({ ...user, email: e.target.value })
                    }} />
                    <button className="custom-btn btn-15 h-10 mt-5" onClick={onSubmit}
                            disabled={false}>

                            {loading ? <BeatLoader size={5} className={""} color={"white"} />: "Verify email"}</button>
                    </form>
                        </div>
        </>
    );
};
export default Page;