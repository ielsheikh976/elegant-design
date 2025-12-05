"use client";

import Link from "next/link";
import TeamsData from "@/app/JsonData/Teams.json";
import Image from "next/image";
import quote from "@/public/quote.png";
import NewLetter from "@/app/UI-Components/Index/Newsletter/page";


function Teams() {
    return (
        <>
            <div className="section-bg text-white flex flex-col">
                <h1 className="text-6xl md:text-8xl GolosText mt-15">
                    Our Team
                </h1>
                <div className="flex items-center text-xl mt-3">
                    <Link href="/" className="hover:text-(--prim) transition-all duration-300">
                        Home
                    </Link>
                    <i className="ri-arrow-right-wide-fill mt-1"></i>
                    <h2 className="GolosText ">Team</h2>
                </div>
            </div>

            <div className="px-[8%] lg:px-[10%] py-20 pb-10 about">
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="w-full lg:w-1/3 title pt-8">
                        <span className="rounded-full title-span border border-gray-400 px-6 py-2 GolosText uppercase font-semibold">
                            Our Best Team
                        </span>
                    </div>
                    <div className="w-full lg:w-2/3">
                        <h1 className="CalSans text-4xl md:text-7xl w-full lg:w-[80%]">
                            Meet The <span className="text-(--prim)">Experts Our Interior</span> Designers
                        </h1>
                    </div>
                </div>
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 team-wrapper">
                    {TeamsData.map((team, i) => (
                        <div key={i} className="team-card cursor-pointer rounded-2xl overflow-hidden">
                            <Image src={team.image} alt={team.name} width={400} height={400} className="rounded-2xl w-full" />
                            <div className="team-content text-white">
                                 <h2 className="CalSans text-4xl">{team.name}</h2>
                                <h2 className="GolosText">{team.role}</h2>
                                <div className="flex items-center gap-2 mt-4">
                                    <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full
                                    hover:bg-white hover:text-black hover:border-transparent cursor-pointer transition-all duration-300">
                                        <i className="ri-facebook-fill"></i>
                                    </div>
                                    <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full
                                    hover:bg-white hover:text-black hover:border-transparent cursor-pointer transition-all duration-300">
                                        <i className="ri-twitter-fill"></i>
                                    </div>
                                    <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full
                                    hover:bg-white hover:text-black hover:border-transparent cursor-pointer transition-all duration-300">
                                        <i className="ri-instagram-fill"></i>
                                    </div>
                                    <div className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full
                                    hover:bg-white hover:text-black hover:border-transparent cursor-pointer transition-all duration-300">
                                        <i className="ri-linkedin-fill"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <NewLetter/>

        </>
    );
}

export default Teams;