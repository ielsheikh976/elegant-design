"use client";

import Link from "next/link";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import galleryImg1 from "@/public/gallery-img1.jpg";
import galleryImg2 from "@/public/gallery-img2.jpg";
import galleryImg3 from "@/public/gallery-img3.jpg";
import galleryImg4 from "@/public/gallery-img4.jpg";
import galleryImg5 from "@/public/gallery-img5.jpg";
import galleryImg6 from "@/public/gallery-img6.jpg";
import galleryImg7 from "@/public/gallery-img7.jpg";
import galleryImg8 from "@/public/gallery-img8.jpg";
import galleryImg9 from "@/public/gallery-img9.jpg";
import galleryImg10 from "@/public/gallery-img10.jpg";
import galleryImg11 from "@/public/gallery-img11.jpg";
import galleryImg12 from "@/public/gallery-img12.jpg";
import {useState} from "react";
import NewLetter from "@/app/UI-Components/Index/Newsletter/page";

function Gallery() {

    const [index, setIndex] = useState(-1);

    const images = [
        {src: galleryImg1.src},
        {src: galleryImg2.src},
        {src: galleryImg3.src},
        {src: galleryImg4.src},
        {src: galleryImg5.src},
        {src: galleryImg6.src},
        {src: galleryImg7.src},
        {src: galleryImg8.src},
        {src: galleryImg9.src},
        {src: galleryImg10.src},
        {src: galleryImg11.src},
        {src: galleryImg12.src},
    ]

    return (
        <>
            <div className="section-bg text-white flex flex-col">
                <h1 className="text-6xl md:text-8xl GolosText mt-15">
                    Gallery
                </h1>
                <div className="flex items-center text-xl mt-3">
                    <Link href="/" className="hover:text-(--prim) transition-all duration-300">
                        Home
                    </Link>
                    <i className="ri-arrow-right-wide-fill mt-1"></i>
                    <h2 className="GolosText ">Gallery</h2>
                </div>
            </div>

            <div className="px-[8%] lg:px-[10%] py-20">
                <div className="flex flex-col lg:flex-row gap-5">
                    <div className="w-full lg:w-1/2">
                        <div className="gallery-image" onClick={() => setIndex(0)}>
                            <Image src={galleryImg1} alt="galler-image"
                                   className="rounded-2xl object-cover cursor-pointer"/>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                            <div className="gallery-image" onClick={() => setIndex(1)}>
                                <Image src={galleryImg2} alt="galler-image"
                                       className="rounded-2xl object-cover cursor-pointer"/>
                            </div>
                            <div className="gallery-image" onClick={() => setIndex(2)}>
                                <Image src={galleryImg3} alt="galler-image"
                                       className="rounded-2xl object-cover cursor-pointer"/>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5">
                            <div className="gallery-image" onClick={() => setIndex(3)}>
                                <Image src={galleryImg4} alt="galler-image"
                                       className="rounded-2xl object-cover cursor-pointer"/>
                            </div>
                            <div className="gallery-image" onClick={() => setIndex(4)}>
                                <Image src={galleryImg5} alt="galler-image"
                                       className="rounded-2xl object-cover cursor-pointer"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-5 mt-10">
                    <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                            <div className="gallery-image" onClick={() => setIndex(5)}>
                                <Image src={galleryImg6} alt="galler-image"
                                       className="rounded-2xl object-cover cursor-pointer"/>
                            </div>
                            <div className="gallery-image" onClick={() => setIndex(6)}>
                                <Image src={galleryImg7} alt="galler-image"
                                       className="rounded-2xl object-cover cursor-pointer"/>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5">
                            <div className="gallery-image" onClick={() => setIndex(7)}>
                                <Image src={galleryImg8} alt="galler-image"
                                       className="rounded-2xl object-cover cursor-pointer"/>
                            </div>
                            <div className="gallery-image" onClick={() => setIndex(8)}>
                                <Image src={galleryImg9} alt="galler-image"
                                       className="rounded-2xl object-cover cursor-pointer"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="gallery-image" onClick={() => setIndex(9)}>
                            <Image src={galleryImg10} alt="galler-image"
                                   className="rounded-2xl object-cover cursor-pointer"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-5 mt-10">
                    <div className="w-full lg:w-1/2">
                        <div className="gallery-image" onClick={() => setIndex(10)}>
                            <Image src={galleryImg11} alt="galler-image"
                                   className="rounded-2xl object-cover cursor-pointer"/>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                            <div className="gallery-image" onClick={() => setIndex(11)}>
                                <Image src={galleryImg12} alt="galler-image"
                                       className="rounded-2xl object-cover cursor-pointer"/>
                            </div>
                            <div className="gallery-image" onClick={() => setIndex(2)}>
                                <Image src={galleryImg3} alt="galler-image"
                                       className="rounded-2xl object-cover cursor-pointer"/>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5">
                            <div className="gallery-image" onClick={() => setIndex(3)}>
                                <Image src={galleryImg4} alt="galler-image"
                                       className="rounded-2xl object-cover cursor-pointer"/>
                            </div>
                            <div className="gallery-image" onClick={() => setIndex(4)}>
                                <Image src={galleryImg5} alt="galler-image"
                                       className="rounded-2xl object-cover cursor-pointer"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <NewLetter/>

            <Lightbox
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            slides={images}/>
        </>
    );
}

export default Gallery;