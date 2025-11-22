"use client";

import {useRef} from "react";
import {useScroll, motion, useTransform} from "framer-motion";

const paralexData = [
    {
        id: 1,
        tag: "Residential",
        number: "01",
        title: (
            <>
                Industrial <br/> elegance condo
            </>
        ),
        location: "Berlin, Germany",
        year: "2025",
        bg: "/Paralex1.jpg"
    },
    {
        id: 2,
        tag: "Residential",
        number: "02",
        title: (
            <>
                Serene <br/> Space Studio
            </>
        ),
        location: "Berlin, Germany",
        year: "2025",
        bg: "/Paralex2.jpg"
    },
    {
        id: 3,
        tag: "Residential",
        number: "03",
        title: (
            <>
                Urban Zen <br/> Apartment
            </>
        ),
        location: "Berlin, Germany",
        year: "2025",
        bg: "/Paralex3.jpg"
    },
]

function Paralex() {
    return (
        <div className="mt-20 pb-30">
            {paralexData.map((item) => (
                <ParalexSection key={item.id} item={item}/>
            ))}
        </div>
    );
}

export default Paralex;


function ParalexSection({item}: { item: any }) {
    const ref = useRef(null)

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"],

    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
    const translateY = useTransform(scrollYProgress, [0, 1], [0, 200]);

    return (
        <motion.div
            ref={ref}
            className="paralex-wrap sticky top-0 left-0 h-full"
            style={{
                backgroundImage: `url(${item.bg})`,
                scale,
                y: translateY,
                zIndex: item.id * 1,

            }}
        >
            <div className="paralex-content flex flex-col justify-baseline px-[8%] py-20">
                <div className="flex justify-between items-center gap-5">
                    <span className="text-white GolosText border border-gray-300 px-4 p-2 rounded-full uppercase">
                        {item.tag}
                    </span>
                    <h1 className="GolosText text-6xl font-semibold text-(--prim)">
                        {item.number}
                    </h1>
                </div>
                <div className="text-gray-300">
                    <h1 className="CalSans text-6xl md:text-8xl">
                        {item.title}
                    </h1>
                    <p className="mt-3 text-2xl">
                        {item.location} <br/> {item.year}
                    </p>
                </div>
            </div>

        </motion.div>
    )

}