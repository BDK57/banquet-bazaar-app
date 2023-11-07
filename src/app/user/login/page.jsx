"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { BeatLoader, } from "react-spinners";
import { ToastError,ToastSuccess } from "@/app/components/toasters/taoster";
import { CheckPassword, ValidateEmail } from "@/helpers/validation/validator";
// import { Auth, provider } from "../firebase.config";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Auth , provider } from "@/app/firebase.config";
import { login } from "@/redux/userslice/userslice";
const Page = () => {


    useEffect(() => {
        setTimeout(() => {
            document.querySelector('#container').classList.remove('right-panel-active')
        }, 50)
    }, []);


    const router = useRouter();

    const [user, setUser] = useState({
        email: "",
        password: "",
    });


    const [loading, setLoading] = useState(false);
    let dispatch = useDispatch();


    const GoogleSignin = async () => {
        await signInWithPopup(Auth, provider).then(async (result) => {
            console.log("result", result.user)
            if (result.user) {
                const data = {
                    displayName: result.user.displayName,
                    email: result.user.email,
                    accessToken: result.user.accessToken,
                }
                const res = await axios.post('/api/users/sociallogin', data)
                if (res.status === 200) {
                    console.log("res is",res.data.user)
                    dispatch(login(res.data.user))
                    ToastSuccess('Log in')
                    router.push("/");
                }

            }

        }).catch((error) => {
            ToastError(error)
        })
    }








    const onSubmit = async (e) => {

        setLoading(true);
        e.preventDefault();
        try {
            if (user.email.length > 0 || user.password.length > 0) {
                if (ValidateEmail(user.email)) {
                    if ((CheckPassword(user.password))) {
                        const response = await axios.post("/api/users/login", user);
                        if (response.data.status === 200) {
                            ToastSuccess('Log in')
                            router.push("/");
                        }
                        else {
                            ToastError(response.data.error)
                        }
                    }
                    else {

                        ToastError("Enter Valid Format Password")
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
            <div className="main">
            <div className="container right-panel-active" id="container">
                <div className="form-container sign-in-container">
                    <form className="globolform"  action="#">
                        <h1 className="text-3xl">Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
                            <a href="#" onClick={GoogleSignin} className="social" ><i className="fab fa-google-plus-g" /></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
                        </div>
                        <span className="text-lg mt-2 mb-5">or use your account</span>
                        <input type="email" placeholder="Email" value={user.email} onChange={(e) => {
                            setUser({ ...user, email: e.target.value })
                        }} />
                        <input type="password" placeholder="Password" value={user.password} onChange={(e) => {
                            setUser({ ...user, password: e.target.value })
                        }} />
                        <Link href={'/user/forgetpassword'} className="mt-5 mb-5" >Forgot your password?</Link>
                        <button className="custom-btn btn-15 h-10" onClick={onSubmit}
                            disabled={false}>

                            {loading ? <BeatLoader size={5} className={""} color={"white"} /> : "Sign In"}</button> </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className="text-3xl">Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost custom-btn btn-15" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className="text-3xl">Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <Link href='/user/signup'> <button className="ghost custom-btn btn-15" id="signUp">Sign up</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
        </>
    );
};
export default Page;