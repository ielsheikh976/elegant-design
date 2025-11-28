"use client";
import {useState} from "react";

import Image from "next/image";
import faqBanner from "@/public/faq-banner.jpg";

const faqData = [
    {
        id: "01",
        question: "What interior design services do you offer?",
        answer:
            "We offer complete interior design services including space planning, concept creation, 3D visualization, material and furniture selection, renovation design, and full project management for both residential and commercial spaces.",
    },
    {
        id: "02",
        question: "What services do you offer?",
        answer:
            "Our services include residential and commercial interior design, renovation planning, layout optimization, color consultation, custom furniture design, home styling, and turnkey design solutions tailored to your needs.",
    },
    {
        id: "03",
        question: "What is your design process?",
        answer:
            "Our process includes an initial consultation, concept development, detailed design with layouts and 3D renders, material selection, client approval, and final execution with full project management and styling.",
    },
    {
        id: "04",
        question: "How do you establish your design fees?",
        answer:
            "Our fees depend on the size, scope, and complexity of your project. After the initial consultation, we provide a clear and transparent proposal with no hidden costs.",
    },
    {
        id: "05",
        question: "Will I need planning permission for my project?",
        answer:
            "Most interior changes don’t require planning permission. However, structural modifications, extensions, or exterior changes might. We will guide you through the requirements and help determine if any approvals are needed.",
    },
    {
        id: "06",
        question: "How long does a typical project take?",
        answer:
            "Project timelines vary depending on scale. Small room designs may take 2–4 weeks, while full home or commercial projects may take several weeks to a few months. A detailed timeline is provided at the start.",
    },
];



function Faqs() {

    const [ openIndex, setOpenIndex ] = useState(null);

    const toggle = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="px-[8%] lg:px-[10%] py-30">
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="w-full lg:w-1/3 title p-8">
                        <span
                            className="rounded-full title-span border border-gray-400 px-6 GolosText uppercase font-medium">
                            Popular Queries
                        </span>
                    </div>
                    <div className="w-full lg:w-2/3">
                        <h1 className="CalSans text-4xl md:text-7xl mb-5">
                            Quick and clear <span className="text-(--prim)">Answers To Your Key </span>
                            services
                        </h1>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 py-10">
                    <div className="w-full lg:w-1/1">
                        <div className="space-y-4 w-full">
                            {faqData.map((item, index) => (
                                <div key={index}
                                className={`overflow-hidden py-2 transition-all duration-300 border-b border-gray-300
                                ${openIndex === index ? "" : ""}`}>
                                    <button className="w-full flex justify-between items-center py-4 text-left focus:outline-none cursor-pointer"
                                    onClick={() => toggle(index)}>
                                        <div className="faq-heading flex items-center gap-5">
                                            <h3 className="text-3xl font-semibold text-(--prim)">
                                                {item.id}
                                            </h3>
                                            <span className="text-base md:text-3xl GolosText font-medium text-gray-800">
                                                {item.question}
                                            </span>
                                        </div>
                                        {openIndex === index ? (
                                            <i className="bi bi-dash text-(--prim) text-3xl transition-all duration-300"/>
                                        ): (
                                            <i className="bi bi-plus text-(--prim) text-3xl transition-all duration-300"/>

                                        )}
                                    </button>
                                    <div className={`transition-all duration-500 ease-in-out overflow-hidden
                                    ${openIndex === index ?
                                        "max-h-[300px] opacity-100 py-3" 
                                        : "max-h-0 opacity-0 py-0"}`}>
                                        <p className="GolosText px-7 text-sm md:text-lg">
                                            {item.answer}
                                        </p>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 pt-5">
                        <div className="faq-card flex flex-col md:flex-row lg:flex-col md:items-center items-start gap-6">
                            <Image src={faqBanner} alt="faqbanner"
                            className="rounded-2xl mb-5"/>

                            <div className="flex flex-col">
                                <h2 className="capitalize text-3xl CalSans mb-5">
                                    Still Looking For Answers Or Need A Fun Chat?
                                </h2>
                                <p className="text-gray-400 text-lg GolosText">
                                    Our team will guide you through our design process, project specifications and cost estimate.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Faqs;