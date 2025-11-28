"use client";
import Link from "next/link"

function Banner() {
    return (
        <>
            <div
                className="px-[8%] lg:px-[10%] py-30 banner h-[50vh] md:h-[90vh] flex flex-col items-center justify-center">
                <div className="title flex flex-col items-center justify-center">
                        <span
                            className="text-white title-span border border-gray-400 mt-4 py-2 px-6 GolosText uppercase font-medium rounded-2xl">
                            Your Best Choice
                        </span>
                    <h1 className="CalSans text-5xl md:text-8xl w-full lg:w-[70%] my-5 text-white">
                        Let's Start <span className="text-(--prim)">Your New Dream </span>
                        Project
                    </h1>
                    <Link href="/UI-Components/Pages/Contact">
                        <button className="rounded-full px-10 py-4 GolosText text-white bg-[#5b6063] transition-all duration-300
                        cursor-pointer text-xl hover:bg-(--prim)">
                            Get A Quote!
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Banner;