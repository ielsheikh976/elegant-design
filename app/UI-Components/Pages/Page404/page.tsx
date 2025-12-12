"use client";
import Image from "next/image";
import Link from "next/link";

import page404Img from "@/public/404.png"

function Page404() {
    return (
        <>
         <div className="page404 px-[8%] flex flex-col items-center justify-center h-screen w-full text-center">
             <Image src={page404Img} alt="page404"/>
             <div className="my-5">
                 <h1 className="CalSans text-4xl md:text-7xl">
                     <span className="text-(--prim)">Oops!</span> Page Not Found!
                 </h1>
             </div>
             <p className="text-gray-400 w-full lg:w-[33%]">
                 We searched everywhere but couldn't find what you're looking for.
                 Let's find a better place for you to go.
             </p>
             <Link href="/" className="mt-6">
                 <button className="px-7 py-3 border border-gray-300 rounded-lg GolosText font-semibold hover:bg-(--prim) hover:text-white
                 hover:border-transparent transition-all duration-300 cursor-pointer">
                     Back To Home
                 </button>
             </Link>
         </div>
        </>
    );
}

export default Page404;