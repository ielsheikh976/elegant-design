"use client";

import Image from "next/image";
import Link from "next/link";
import contactImg from "@/public/contact-image.jpg";

function Contact() {
    return (
        <>
            <div className="section-bg text-white flex flex-col">
                <h1 className="text-6xl md:text-8xl GolosText mt-15">
                    Contact Us
                </h1>
                <div className="flex items-center text-xl mt-3">
                    <Link href="/" className="hover:text-(--prim) transition-all duration-300">
                        Home
                    </Link>
                    <i className="ri-arrow-right-wide-fill mt-1"></i>
                    <h2 className="GolosText ">Contact Us</h2>
                </div>
            </div>

            <div className="px-[8%] lg:px-[10%] py-20">
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="w-full lg:w-1/2 title pt-8">
                        <span
                            className="rounded-full title-span border border-gray-400 px-6 py-2 GolosText uppercase font-medium">
                            Get in touch
                        </span>
                    </div>
                    <div className="w-full lg:w-2/3">
                        <h1 className="CalSans text-4xl md:text-7xl">
                            Have a Project in <span className="text-(--prim)">Mind? Let's Make</span> It Happen
                        </h1>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
                        <div>
                            <h2 className="text-gray-400 CalSans tracking-wider">Address :</h2>
                            <p className="GolosText text-xl mt-5">Cinema Mall, Cinema St, Disuq , KafrElsheikh</p>
                        </div>
                        <div>
                            <h2 className="text-gray-400 CalSans tracking-wider mb-5">Support</h2>
                            <span className="text-(--prim) font-semibold">+(20) 1277104751</span>
                            <p className="GolosText text-2xl font-semibold">ibrahimelsheikh196@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                     <div className="flex justify-between items-center flex-col lg:flex-row gap-15">
                         <div className="w-full lg:w-1/2">
                             <Image src={contactImg} alt="contact-image" className="w-full h-full rounded-2xl object-cover"/>
                         </div>
                         <div className="lg:w-1/2 w-full">
                             <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                 <div className="flex flex-col GolosText">
                                     <label className="font-semibold mb-2">Full Name*</label>
                                     <input type="text" placeholder="Full Name" className="bg-white border border-gray-300
                                     font-normal rounded-lg px-3 py-3 outline-none focus:border-(--prim) transition-all duration-300"/>
                                 </div>
                                 <div className="flex flex-col GolosText">
                                     <label className="font-semibold mb-2">Phone*</label>
                                     <input type="text" placeholder="Phone" className="bg-white border border-gray-300
                                     font-normal rounded-lg px-3 py-3 outline-none focus:border-(--prim) transition-all duration-300"/>
                                 </div>
                                 <div className="flex flex-col GolosText">
                                     <label className="font-semibold mb-2">Email Address*</label>
                                     <input type="text" placeholder="Email Address" className="bg-white border border-gray-300
                                     font-normal rounded-lg px-3 py-3 outline-none focus:border-(--prim) transition-all duration-300"/>
                                 </div>
                                 <div className="flex flex-col GolosText">
                                     <label className="font-semibold mb-2">Subject*</label>
                                     <input type="text" placeholder="I want to" className="bg-white border border-gray-300
                                     font-normal rounded-lg px-3 py-3 outline-none focus:border-(--prim) transition-all duration-300"/>
                                 </div>
                             </div>
                             <div className="flex flex-col GolosText mt-5">
                                 <label className="font-semibold mb-2">Your Message*</label>
                                 <textarea placeholder="Your Message" rows={5} className="bg-white border border-gray-300
                                     font-normal rounded-lg px-3 py-3 outline-none focus:border-(--prim) transition-all duration-300">
                                     </textarea>
                             </div>
                             <div className="mt-5">
                                 <button className="px-5 py-3 bg-white border border-gray-300 rounded-lg GolosText font-semibold
                                   hover:bg-(--prim) hover:text-white cursor-pointer hover:border-transparent transition-all duration-300">
                                     Send Message
                                 </button>
                             </div>
                         </div>
                     </div>
                </div>
            </div>

            <div className="contact-map h-[600px]">
                <iframe className="w-full rounded-2xl brightness-100 grayscale" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d225.3860005220825!2d30.64391342799552!3d31.13259221216103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1765546763621!5m2!1sen!2seg"
                        width="100%" height="100%" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">

                </iframe>
            </div>
        </>
    );
}

export default Contact;