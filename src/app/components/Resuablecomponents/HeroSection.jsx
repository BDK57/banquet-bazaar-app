'use client'
import React from 'react'
import heroStyle from '@/app/hero.module.css';

function HeroSection() {
  return (
    <section className={`${heroStyle.hero__section} relative h-full`}>
    <img
        src={"/assets/hero/homepage_hero_375.webp"}
        className=" sm:hidden max-w-[100%]  h-auto hero__image"
        style={{
            filter: "brightness(0.7)",
        }}
        layout='responsive'
    />
    <img
        src={"/assets/hero/homepage_hero_768.jpg"}
        className="xl:hidden sm:block hidden  max-w-[100%]  h-auto  hero__image"
        style={{ filter: "brightness(0.7)" }}
        layout='responsive'
    />
    <img
        src={"/assets/hero/homepage_hero_1280.jpg"}
        className="xl:block 2xl:hidden hidden  max-w-[100%]  h-auto  hero__image"
        style={{ filter: "brightness(0.7)" }}
        layout='responsive'
    />
    <img
        src={"/assets/hero/homepage_hero_1920.jpg"}
        className="2xl:block hidden   max-w-[100%]  h-auto  hero__image"
        layout='fill'
        style={{ filter: "brightness(0.7)" }}
    />

    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] " style={{ width: "calc(100% - 32px)" }}>
        <div className="relative flex flex-col justify-center container mx-auto">
            <img src="/logos/Hero_Standard_AuroraLogo.svg" alt="Logo" className={`${heroStyle.backBlue} ${heroStyle.hero_logo}`} />
            <h2 className={heroStyle.hero__subtitle}>welcome to</h2>
            <h1 className={heroStyle.hero__title}>Banquet Bazzar</h1>
            <h3 className={heroStyle.hero__desk}></h3>
            <div className={heroStyle.hero__since_wrapper}>
                <div className={heroStyle.hero__since_stars}>
                    <img src="/icons/Star_Icon.svg" alt="star" className=" ls-is-cached lazyloaded" width={8} height={7} />
                    <img src="/icons/Star_Icon.svg" alt="star" className=" ls-is-cached lazyloaded" width={8} height={7} />
                    <img src="/icons/Star_Icon.svg" alt="star" className=" ls-is-cached lazyloaded" width={8} height={7} />
                    <img src="/icons/Star_Icon.svg" alt="star" className=" ls-is-cached lazyloaded" width={8} height={7} />
                    <img src="/icons/Star_Icon.svg" alt="star" className=" ls-is-cached lazyloaded" width={8} height={7} />
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default HeroSection