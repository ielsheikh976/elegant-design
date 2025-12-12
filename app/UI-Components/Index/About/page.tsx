"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/app/animations/motionUtils";

import Image from "next/image";
import AboutImg1 from "@/public/About-1.jpg";
import AboutImg2 from "@/public/About-2.jpg";
import AboutImg3 from "@/public/About-3.jpg";
import CountUp from "react-countup";

const statsData = [
    {
        value: 8,
        suffix: "",
        title: "Years experience",
        desc: "Improving homes with expert craftsmanship for years"
    },
    {
        value: 20,
        suffix: "+",
        title: "Projects completed",
        desc: "Over 250 successful projects delivered with quality and care"
    },
    {
        value: 100,
        suffix: "+",
        title: "Skilled Tradespeople",
        desc: "Our team of 30 experts ensures top-quality results"
    },
    {
        value: 120,
        suffix: "+",
        title: "Client satisfaction",
        desc: "All of our clients are satisfied with our work and service"
    },
]


function About() {
    return (
        <>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="px-[8%] lg:px-[10%] py-20 about">
                <div className="flex flex-col lg:flex-row gap-10">
                    <motion.div variants={fadeInUp(0.1)} className="w-full lg:w-1/3 title p-8">
                        <span
                            className="rounded-full title-span border border-gray-400 px-6 GolosText uppercase font-medium">
                            About Elegant Designs
                        </span>
                    </motion.div>
                    <motion.div variants={fadeInUp(0.2)} className="w-full lg:w-2/3">
                        <h1 className="CalSans text-4xl md:text-7xl">
                            We Shape <span className="text-(--prim)">Interior Designs, Crafting </span>
                            Timeless and Inspiring Spaces
                        </h1>
                    </motion.div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-20">
                    <motion.div variants={fadeInUp(0.3)} className="about-image">
                        <Image src={AboutImg1} alt="about-img" className="rounded-3xl transition-all duration-300
                            hover:-translate-y-1.5"/>
                    </motion.div>
                    <motion.div variants={fadeInUp(0.6)} className="about-image lg:pt-5">
                        <Image src={AboutImg2} alt="about-img" className="rounded-3xl transition-all duration-300
                            hover:-translate-y-1.5"/>
                    </motion.div>
                    <motion.div variants={fadeInUp(0.9)} className="about-image lg:pt-10">
                        <Image src={AboutImg3} alt="about-img" className="rounded-3xl transition-all duration-300
                            hover:-translate-y-1.5"/>
                    </motion.div>
                </div>
            </motion.div>

            <div className="px-[8%] lg:px-[10%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statsData.map((item, index) => (
                    <div key={index} className="about-card">
                        <h2 className="text-5xl tracking-wider CalSans font-bold mb-6">
                            <CountUp
                                start={0}
                                end={item.value}
                                duration={2.5}
                                enableScrollSpy
                            >
                                {({ countUpRef }) => <span ref={countUpRef} />}
                            </CountUp>
                            {item.suffix}
                        </h2>
                        <div className="about-content py-6 border-t border-gray-400">
                            <h3 className="mb-3 text-2xl CalSans">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 GolosText">
                                {item.desc}
                            </p>

                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default About;