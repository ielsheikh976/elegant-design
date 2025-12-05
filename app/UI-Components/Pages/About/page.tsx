"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import about2 from "@/public/About-2.jpg";
import about4 from "@/public/About-4.jpg";
import timeline1 from "@/public/timeline-1.jpg";
import timeline2 from "@/public/timeline-2.jpg";
import timeline3 from "@/public/timeline-3.jpg";
import timeline4 from "@/public/timeline-4.jpg";
import Expertise from "@/app/UI-Components/Index/Expertise/page";
import Testimonial from "@/app/UI-Components/Index/Testimonial/page";

import partner1 from "@/public/partner1.svg";
import partner2 from "@/public/partner2.svg";
import partner3 from "@/public/partner3.svg";
import partner4 from "@/public/partner4.svg";
import partner5 from "@/public/partner5.svg";
import partner6 from "@/public/partner6.svg";
import NewLetter from "@/app/UI-Components/Index/Newsletter/page";

const Partners = [partner1, partner2, partner3, partner4, partner5, partner6];

const historyData = [
    {
        image: timeline1,
        year: "2025",
        text: "Celebrates 10 years with a retrospective showcase of the company's most iconic projects and milestones."
    },
    {
        image: timeline2,
        year: "2024",
        text: "Celebrates 10 years with a retrospective showcase of the company's most iconic projects and milestones."
    },
    {
        image: timeline3,
        year: "2023",
        text: "Celebrates 10 years with a retrospective showcase of the company's most iconic projects and milestones."
    },
    {
        image: timeline4,
        year: "2022",
        text: "Celebrates 10 years with a retrospective showcase of the company's most iconic projects and milestones."
    },
    {
        image: about2,
        year: "2021",
        text: "Celebrates 10 years with a retrospective showcase of the company's most iconic projects and milestones."
    },
];




function About() {
    return (
        <>
            <div className="section-bg text-white flex flex-col">
                <h1 className="text-6xl md:text-8xl GolosText mt-15">
                    About Us
                </h1>
                <div className="flex items-center text-xl mt-3">
                    <Link href="/" className="hover:text-(--prim) transition-all duration-300">
                        Home
                    </Link>
                    <i className="ri-arrow-right-wide-fill mt-1"></i>
                    <h2 className="GolosText ">About Us</h2>
                </div>
            </div>

            <div className="px-[8%] lg:px-[10%] py-20">
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="w-full lg:w-2/3 pt-8">
                        <span
                            className="rounded-full title-span border border-gray-400 px-6 GolosText uppercase font-medium">
                            Started in 2022
                        </span>
                        <h1 className="CalSans pt-8 text-4xl md:text-5xl w-full lg:w-[80%] mb-5">
                            We Shape <span className="text-(--prim)">Interior Designs, Crafting </span>
                            Timeless and Inspiring Spaces
                        </h1>
                        <div className="about-content md:pt-15">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                                <div className="about-text">
                                    <h2 className="text-[10rem] leading-40 GolosText font-semibold text-(--prim)">
                                        10
                                    </h2>
                                    <p className="text-2xl lg:px-15 CalSans">
                                        Years of experience
                                    </p>
                                </div>
                                <div className="about-image">
                                    <Image src={about4} alt="About-image"
                                           className="object-cover w-full h-full rounded-2xl"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <div className="about-image md:h-[600px]">
                            <Image src={about2} alt="About-image" className="object-cover w-full h-full rounded-2xl"/>
                        </div>
                        <div className="about-pere pt-10">
                            <p className="GolosText text-sm text-gray-500">
                                We believe that every space has the power to inspire, and that great design brings that
                                inspiration to life. Our mission is to craft
                                environments that stir creativity , evoke emotion, and reflect the essence those who
                                inhabit them.
                            </p>
                            <button className="mt-9 border border-gray-500/50 px-5 py-3 rounded-full GolosText
                                font-semibold hover:bg-(--prim) hover:text-white hover:border-transparent transition-all
                                duration-300 cursor-pointer">
                                <Link href="/">
                                    Learn More <i className="bi bi-arrow-right ps-1"></i>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="video w-full pb-10">
                <video src="/Video-bg.mp4"
                       autoPlay
                       loop
                       muted
                       playsInline
                       className="w-full h-full object-cover"/>
            </div>

            <div className="px-[8%] lg:px-[10%] py-20 pb-0">
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="w-full lg:w-1/3 title p-8">
                        <span
                            className="rounded-full title-span border border-gray-400 px-6 GolosText uppercase font-medium">
                            Our History
                        </span>
                    </div>
                    <div className="w-full lg:w-2/3">
                        <h1 className="CalSans text-4xl md:text-6xl mb-5">
                            Our History <span className="text-(--prim)">Is Full Of Interesting </span>
                            Stages And Events.
                        </h1>
                    </div>
                </div>
                <div className="history-swiper py-15 pb-0">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        speed={200}
                        modules={[Autoplay]}
                        breakpoints={{
                            1199: {slidesPerView: 4},
                            991: {slidesPerView: 2},
                            575: {slidesPerView: 1},
                            0: {slidesPerView: 1},

                        }}>
                        {historyData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="history-card">
                                    <Image src={item.image} alt={`history-${item.year}`}
                                           className="rounded-2xl w-40 h-40 object-cover"/>
                                    <div className="history-content py-15">
                                        <h2 className="text-3xl CalSans font-semibold mb-5">
                                            {item.year}
                                        </h2>
                                        <p className="GolosText text-sm text-gray-500">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>

           <div className="bg-[#EEE]">
               <Expertise/>
           </div>
            <div className="bg-[#EEE] pt-0 md:pt-[18%]">
                <Testimonial/>
            </div>
            <div className="px-[8%] lg:px-[12%] py-30 pb-0">
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
            <NewLetter/>

        </>
    );
}

export default About;