"use client";
import { useEffect, useState } from "react";
import HeroSection from "../components/Resuablecomponents/HeroSection";
import BannerSection from "../components/Resuablecomponents/BannerSection";
import Event from "../components/Resuablecomponents/Event";
import Venue from "../components/Resuablecomponents/Venue";
import Menu from "../components/Resuablecomponents/Menu";
import Testimonials from "../components/Resuablecomponents/Testimonials";
import Booksection from "../components/Resuablecomponents/Booksection";
import Subsection from "../components/Resuablecomponents/Subsection";
import Footer from "../components/Resuablecomponents/Footer";
import Header from "../components/Resuablecomponents/Header";

const Page = () => {

    return (
        <>
       <Header/>
       <HeroSection/>
       <BannerSection/>
       <Event/>
       <Venue/>
       <Menu/>
       <Testimonials/>
       <Booksection/>
       <Subsection/>
       <Footer/>
       </>
          
    );
};
export default Page