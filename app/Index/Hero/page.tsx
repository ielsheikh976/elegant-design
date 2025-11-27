"use client";
import Image from "next/image"
import HeroImg from "@/public/Hero-img.jpg"
import HeroImg2 from "@/public/hero-img2.jpg"
import Link from "next/link";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import "swiper/css";

import partner1 from "@/public/partner1.svg";
import partner2 from "@/public/partner2.svg";
import partner3 from "@/public/partner3.svg";
import partner4 from "@/public/partner4.svg";
import partner5 from "@/public/partner5.svg";
import partner6 from "@/public/partner6.svg";

const Partners = [partner1, partner2, partner3, partner4, partner5, partner6];



function Hero() {
    return (
        <>
            <div className="hero">
                <div className="hero-bg-elm"></div>
                <div className="hero-bg-elm2"></div>
                <div className="w-full px-[8%] lg:px-[10%] py-10">
                    <div className="flex flex-col lg:flex-row gap-5 justify-between items-center">
                        <div className="w-full lg:w-1/2 relative">
                            <div>
                                <span className="hero-span border border-gray-400 GolosText font-medium
                                 px-5 py-2 rounded-full">
                                    Trusted Design Partner
                                </span>
                                <h1 className="text-6xl lg:text-8xl CalSans my-5">
                                    Find Your Inspired <span className="text-(--prim)">Interior Design</span>
                                </h1>
                                <p className="text-gray-700 w-full md:w-[60%]">
                                    Whether it's your home, office, or a commercial project, we are always
                                    dedicated to bringing your vision to life.
                                </p>
                                <button className="mt-9 border border-gray-500/50 px-5 py-3 rounded-full GolosText
                                font-semibold hover:bg-(--prim) hover:text-white hover:border-transparent transition-all
                                duration-300 cursor-pointer group">
                                    <Link href="/Pages/Services">
                                        Get Our Services <i className="bi bi-arrow-right ps-1"></i>
                                    </Link>
                                </button>
                                <div className="hero-content-img absolute top-10 right-5 cursor-pointer hidden
                                md:block ">
                                    <Image src={HeroImg2}
                                           alt="HeroImg2"
                                           className="rounded-full"
                                    />
                                    <i className="bi bi-play-fill"></i>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 z-10">
                            <div className="hero-image">
                                <Image src={HeroImg}
                                       alt="HeroImg"
                                       className="rounded-2xl w-full h-full"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="px-[8%] lg:px-[12%] py-10 pb-10">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 1500,
                    }}
                    modules={[Autoplay]}
                    breakpoints={{
                        1200: {slidesPerView: 5},
                        991: {slidesPerView: 4},
                        575: {slidesPerView: 2},
                        0: {slidesPerView: 2},
                    }}
                    className="partner-swiper"
                >
                    {Partners.map((img,index) => (
                        <SwiperSlide key={index}>
                            <Image src={img} alt="PartnerImg"
                            className="partner-img"/>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

        </>
    );
}

export default Hero;