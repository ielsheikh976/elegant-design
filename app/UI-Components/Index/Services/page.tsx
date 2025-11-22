"use client";


import Image from "next/image";
import service1 from "@/public/service-1.jpg";
import service2 from "@/public/service-2.jpg";
import service3 from "@/public/service-3.jpg";
import service4 from "@/public/service-4.jpg";
import service5 from "@/public/service-5.jpg";

const services = [
    {
        id: "01",
        title: "Residential Interior Design",
        text: "Tailored design services for private homes, including stylish room makeovers, complete home transformations and personalized decor planning - creating comfortable, functional and visually stunning living spaces that reflect each client's unique taste and lifestyle.",
        img: service1,
    },
    {
        id: "02",
        title: "Commercial Interior Design",
        text: "Designing functional and attractive interiors for businesses, including offices,retail spaces and hospitality venues- blending creativity with practically to enhance brand identity, improve productivity, and create inspiring environments that leave a lasting impression on clients and visitors.",
        img: service2,
    },
    {
        id: "03",
        title: "Interior Design Consultation",
        text: "Providing professional advice on concepts, color schemes and material selection - helping clients make informed design choices that balance aesthetics and functionality while ensuring each space reflects their personal vision, style and desired atmosphere.",
        img: service3,
    },
    {
        id: "04",
        title: "Outdoor & Landscape Design",
        text: "Extending design services to outdoor spaces such as gardens, patios and decks - creating harmonious, functional and visually appearing environments that seamlessly connect indoor and outdoor living.",
        img: service4,
    },
    {
        id: "05",
        title: "Renovation and Remodeling",
        text: "Overhauling existing spaces to modernize and improve functionality ans aesthetics - transforming outdated interiors into stylish, efficient and inviting environments that align with contemporary design trends and enhance everyday living experiences.",
        img: service5,
    },
];


function Services() {
    return (
        <>
            <div className="px-[8%] lg:px-[10%] py-20 pb-60 service relative">
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="w-full lg:w-1/3 title p-8">
                        <span
                            className="rounded-full title-span border border-gray-400 px-6 GolosText uppercase font-medium">
                            Our Services
                        </span>
                    </div>
                    <div className="w-full lg:w-2/3">
                        <h1 className="CalSans text-4xl md:text-6xl mb-5">
                            Explore our <span className="text-(--prim)">Comprehensive interior designs</span>
                            Services
                        </h1>
                        <p className="text-gray-400 GolosText">
                            We specialize in transforming visions into reality. Explore our portfolio of innovative
                            architectural and interior design projects crafted with precision.
                        </p>
                    </div>
                </div>
                <div className="mt-4">
                    {services.map((service) => (
                        <div key={service.id} className="service-card border-b border-gray-400 cursor-pointer py-2 flex flex-col md:flex-row justify-between
                 items-start md:items-center gap-5">
                            <div className="flex flex-col md:flex-row w-full md:w-[70%] gap-2 md:gap-8">
                                <h4 className="text-4xl CalSans">{service.id}</h4>
                                <div className="service-content">
                                    <h2 className="mb-3 text-4xl CalSans">
                                        {service.title}
                                    </h2>
                                    <p className="GoloText text-gray-400">
                                        {service.text}
                                    </p>
                                </div>
                            </div>
                            <div className="overflow-hidden h-full w-full md:h-[210px] md:w-[300px]">
                                <Image src={service.img} alt="service-img"
                                       className="w-full service-img object-cover rounded-2xl border-2 border-black"/>
                            </div>
                            <i className="bi bi-arrow-up-right transition-all duration-300"/>

                        </div>
                    ))}
                </div>

            </div>

        </>
    );
}

export default Services;