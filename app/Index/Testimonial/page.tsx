"use client";


import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import "swiper/css";
import Image from "next/image";

import test1 from "@/public/team-1.jpg";
import test2 from "@/public/testimonials-1.jpg";

const TestimonialData = [
    {
        id: "1",
        desc: "A wonderful experience! They knew what they are doing and were incredibly knowledgeable throughout the process.",
        image: test2,
        name: "Mohamed Torky",
        role: "Company owner",
    },
    {
        id: "2",
        desc: "I absolutely love my new modern living room! the clean lines, a neutral tones, and minimalist interior create such a calming & stylish atmosphere. Highly recommended their modern interior design services!",
        image: test2,
        name: "Mohamed Elshaby",
        role: "Co-founder",
    },

]


function Testimonial() {
    return (
        <>
            <div className="testimonial flex flex-col-reverse lg:flex-row gap-5 bg-[#EEE]">
                <div className="w-full lg:w-1/2 testimonial-image">

                </div>
                <div className="w-full lg:w-1/2 pe-[8%] lg:pe-[10%] ps-[8%] lg:ps-5 py-20 pb-0 md:pb-20">
                    <div>
                        <div className="flex flex-col gap-10">
                            <div className="w-full pt-8">
                                <span
                                    className="rounded-full title-span border border-gray-400 px-6 py-2 GolosText uppercase font-medium">
                                    Our clients say
                                </span>
                            </div>
                            <div className="w-full lg:w-1.2">
                                <h1 className="CalSans text-5xl md:text-7xl ">
                                    Here's what <span className="text-(--prim)">warm words our clients </span>
                                    say
                                </h1>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-5 mt-5">
                            <h1 className="text-7xl CalSans">
                                4.80
                            </h1>
                            <div className="flex flex-col items-center">
                                <div
                                    className="stars-icon flex items-center gap-1 bg-(--prim) text-white px-3 py-1 rounded-full">
                                    <i className="bi bi-star-fill text-sm"/>
                                    <i className="bi bi-star-fill text-sm"/>
                                    <i className="bi bi-star-fill text-sm"/>
                                    <i className="bi bi-star-fill text-sm"/>
                                    <i className="bi bi-star-fill text-sm"/>
                                </div>
                                <p className="GoloText">2,688 reviews</p>
                            </div>
                            <p className="w-full lg:w-[50%] font-semibold GolosText">
                                From concept to reality, the team turned my vision into a stunning, livable space. I
                                couldn't be happier with this!
                            </p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <Swiper slidesPerView={1}
                                spaceBetween={0}
                                loop={true}
                                autoplay={{
                                    delay: 2000,
                                }}
                                modules={[Autoplay]}
                                speed={1500}
                        >
                            {TestimonialData.map((test, index) => (
                                <SwiperSlide key={index}>
                                    <p className="GolosText text-2xl font-medium tracking-wide">
                                        "{test.desc}"
                                    </p>
                                    <div className="flex items-center gap-3 mt-8">
                                        <Image
                                            src={test.image}
                                            alt={test.name}
                                            className="rounded-full w-[70px] h-70px] object-cover"
                                        />
                                        <div className="flex flex-col">
                                            <h3 className="GolosText text-2xl font-semibold">
                                                {test.name}
                                            </h3>
                                            <h3 className="text-gray-600">
                                                {test.role}
                                            </h3>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Testimonial;