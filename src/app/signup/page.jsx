"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BeatLoader, BounceLoader, BarLoader,RingLoader } from "react-spinners";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { ToastError, ToastSuccess } from "../components/toasters/taoster";
import { CheckPassword, ValidateEmail } from "@/helpers/validation/validator";


const Page = () => {


    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
        isVerified: false,
        isAdmin: false,
    });
    

    const onSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            if (
                user.email.length > 0 &&
                user.password.length > 0 ||
                user.username.length > 0
            ) {
                console.log(CheckPassword(user.password))
                if (ValidateEmail(user.email)) {

                    if ((CheckPassword(user.password))) {
                        const response = await axios.post("/api/users/signup", user);
                        console.log("res",response.data)
                        if (response.data.status === 200) {
                            router.push("/login");
                            ToastSuccess(response.data.message)
                        }
                        else{
                            ToastSuccess(response.data.error)
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


        } catch (error) {
            ToastError("Error: " + error.response.data.error)
            // console.log("error Found", error.response);

        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        setTimeout(() => {
            container.classList.add('right-panel-active')
        }, 200)
    }, []);
    return (
        <>

            <div className="bg">
            </div>
            <div className="container" id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1 className="text-3xl mb-5">Create Account</h1>
    
                        <input type={"text"}
                            id={"username"}
                            placeholder={"Username"}
                            value={user.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })} />
                        <input type={"email"}
                            id={"email"}
                            placeholder={"Email"}
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })} />
                        <input type={"password"}
                            id={"password"}
                            placeholder={"Password"}
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })} />
                       

                        <button className="custom-btn btn-15 h-10  mt-5" onClick={onSubmit}
                            disabled={false}>

                            {loading ? <BeatLoader size={5} className={""} color={"white"} />: "Sign Up"}</button>

                        <Link className={"text-sm my-2 mt-5"} href={"/login"}>
                            Already have an account? Login
                        </Link>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" value={user.email} onChange={(e) => {
                            setUser({ ...user, email: e.target.value })
                        }} />
                        <input type="password" placeholder="Password" value={user.password} onChange={(e) => {
                            setUser({ ...user, password: e.target.value })
                        }} />
                        <a href="#">Forgot your password?</a>
                        <button className="custom-btn btn-15" onClick={onSubmit}>Sign in</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className="text-3xl">Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            {/* <button className="ghost custom-btn btn-15" id="signIn">Sign In</button> */}

                            <Link href='/login'> <button className="ghost custom-btn btn-15" id="signIn">Sign In</button></Link>

                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className="text-3xl">Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost custom-btn btn-15" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
                <Toaster />
            </div>
        </>
    );
};
export default Page