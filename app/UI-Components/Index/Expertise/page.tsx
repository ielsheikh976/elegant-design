"use client";

import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import "swiper/css";



import expertise1 from "@/public/expertise1.jpg";
import expertise2 from "@/public/expertise2.jpg";
import expertise3 from "@/public/expertise3.jpg";
import expertise4 from "@/public/expertise4.jpg";
import expertiseSlide1 from "@/public/banner-slide-1.jpg";
import expertiseSlide2 from "@/public/banner-slide-2.jpg";

const expertiseData = [
    {
        id: 1,
        title: "Renovation and Remodeling",
        desc: "Transforming outdated or damaged spaces into modern, functional, and aesthetically pleasing environments.",
        Image: expertise1
    },
    {
        id: 2,
        title: "Custom Design Consultation",
        desc: "Providing personalized design guidance to help you choose styles, colors, and layouts that match your vision.",
        Image: expertise2
    },
    {
        id: 3,
        title: "Space Planning and Layout",
        desc: "Optimizing floor plans to maximize comfort, efficiency, and flow for both residential and commercial spaces.",
        Image: expertise3
    },
    {
        id: 4,
        title: "3D Design Visualization",
        desc: "Creating detailed 3D models to give you a realistic preview of your project before construction begins.",
        Image: expertise4
    },
];



function Expertise() {
    return (
        <>
            <div className="expertise bg-[#241c18]">
                <div className="px-[8%] lg:px-[10%] md:py-50 pt-10 pb-10 md:pb-[25%] relative">

                    <div className="flex flex-col gap-10">
                        <div className="w-full p-8">
                        <span
                            className="rounded-full  text-white title-span border border-gray-400 px-6 GolosText uppercase font-medium">
                            Our expertise
                        </span>
                        </div>
                        <div className="w-full lg:w-2/3">
                            <h1 className="CalSans text-4xl md:text-7xl text-white">
                                Curating the perfect <span className="text-(--prim)">pieces to complete </span>
                                your space
                            </h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                        {expertiseData.map((expertise, index) => (
                            <div key={index} className="expertise-card"
                            style={{marginTop:`${index * 40}px`}}>
                                <div className="expertise-image">
                                    <Image src={expertise.Image} alt={expertise.title}
                                    className="rounded-2xl w-full h-full" />
                                </div>
                                <div className="expertise-info my-5">
                                    <h1 className="text-3xl CalSans text-white border-b border-gray-500/50 pb-5 w-full lg:w-[80%]">
                                        {expertise.title}
                                    </h1>
                                    <p className="text-gray-400 mt-3 text-sm">
                                        {expertise.desc}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>

                    <div className="expertise-slider">
                        <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        autoplay={{
                            delay: 1500,
                            }}
                        modules={[Autoplay]}
                        speed={2000}
                        >
                            <SwiperSlide>
                                <Image src={expertiseSlide1} alt="expertiseSlide1"
                                className="object-cover w-full h-full" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={expertiseSlide2} alt="expertiseSlide2"
                                       className="object-cover w-full h-full" />
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Expertise;