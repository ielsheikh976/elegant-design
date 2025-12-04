"use client";
import Link from "next/link";
import ProjectsData from "@/app/JsonData/Projects.json"
import {useParams} from "next/navigation";
import {useState} from "react";
import CountUp from "react-countup";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import "swiper/css";


const DetailInfo = [
    {
        id: 1,
        title: "Open Living Spaces :",
        pere: "Creating open-plan living areas to enhance the flow and connection between indoor and outdoor spaces.",
    },
    {
        id: 2,
        title: "Outdoor Living :",
        pere: "Designing comfortable exterior zones such as patios, terraces, and lounges that extend the living experience beyond the home.",
    },
    {
        id: 3,
        title: "Natural Materials :",
        pere: "Incorporating wood, stone, and organic textures to bring warmth, authenticity, and a timeless aesthetic to the design.",
    },
    {
        id: 4,
        title: "Modern Amenities :",
        pere: "Integrating advanced features, smart technology, and contemporary comforts that elevate everyday living.",
    },
    {
        id: 5,
        title: "Large Windows :",
        pere: "Using expansive windows to maximize natural light, frame scenic views, and create a stronger connection with the surrounding environment.",
    },
];


function ProjectDetails() {

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const {id} = useParams();
    const project = ProjectsData.find((p) => p.id === Number(id));
    if (!project) {
        return (
            <div className="section-bg text-white flex flex-col">
                <h1 className="text-5xl md:text-6xl GolosText mt-15">Project Not Found!</h1>
                <div className="flex items-center gap-5 mt-3">
                    <Link href="/UI-Components/Projects" className="hover:text-(--prim) text-xl transition-all duration-300 mt-5 border border-gray-300 px-4 py-2
                    rounded-full hover:bg-white">
                        Back to Projects
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="section-bg text-white flex flex-col">
                <h1 className="text-5xl md:text-8xl GolosText mt-15">
                    Project Details
                </h1>
                <div className="flex items-center text-xl mt-3">
                    <Link href="/" className="hover:text-(--prim) transition-all duration-300">
                        Home
                    </Link>
                    <i className="ri-arrow-right-wide-fill mt-1"></i>
                    <Link href="/UI-Components/Projects" className="hover:text-(--prim) transition-all duration-300">
                        Projects
                    </Link>
                    <h2 className="GolosText "></h2>
                    <i className="ri-arrow-right-wide-fill mt-1"></i>
                    <h2 className="GolosText text-white">{project.title}</h2>
                </div>
            </div>

            <div className="px-[8%] lg:px-[10%] py-20">
                <h2 className="CalSans text-5xl md:text-7xl">{project.title}</h2>
                <div
                    className="mt-10 border-b border-gray-300 pb-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                    <div className="flex flex-col items-start">
                        <h2 className="CalSans text-gray-400 tracking-wider">Architect :</h2>
                        <h3 className="GolosText text-xl">Themelexus</h3>
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className="CalSans text-gray-400 tracking-wider">Project Type :</h2>
                        <h3 className="GolosText text-xl flex flex-wrap">
                            {project.tags.map((tag, idx) => (
                                <div key={idx} className="flex">
                                    {tag}
                                </div>
                            ))}
                        </h3>
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className="CalSans text-gray-400 tracking-wider">Client :</h2>
                        <h3 className="GolosText text-xl">Ibrahim Elsheikh</h3>
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className="CalSans text-gray-400 tracking-wider">Terms :</h2>
                        <h3 className="GolosText text-xl">6 Months</h3>
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className="CalSans text-gray-400 tracking-wider">Strategy :</h2>
                        <h3 className="GolosText text-xl">Minimalistic</h3>
                    </div>
                    <div className="flex flex-col items-start">
                        <h2 className="CalSans text-gray-400 tracking-wider">Date :</h2>
                        <h3 className="GolosText text-xl">{project.date}</h3>
                    </div>
                </div>
                <div className="project-det-img mt-10 w-full h-[500px] md:h-[700px] rounded-2xl overflow-hidden">
                    <Image src={project.image} alt={project.title} width={800} height={400}
                           className="w-full h-full object-cover"/>
                </div>


                <div className="mt-10">
                    <h2 className="CalSans text-5xl md:text-7xl">
                        Design in Details
                    </h2>
                    <p className="text-gray-500 GolosText mt-5">
                        This design was developed with a strong focus on harmony, simplicity, and visual balance. Every
                        material, texture, and color was selected to enhance the atmosphere while maintaining a refined
                        sense of comfort. The layout ensures smooth movement throughout the space, allowing each element
                        to complement the next. From lighting accents to structural detailing, every feature works
                        together to create an elegant interior that feels cohesive, functional, and thoughtfully crafted
                        from start to finish.
                    </p>

                    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-5">
                        {DetailInfo.map((info, index) => (
                            <div key={index} className="flex gap-2">
                                <i className="bi bi-check-circle-fill text-(--prim)"></i>
                                <p className="GolosText text-gray-500">
                                    <span className="text-black font-semibold">{info.title}</span> {info.pere}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-10 border border-gray-300 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className="p-10 border border-gray-200 flex flex-col justify-center items-center">
                        <h2 className="text-5xl tracking-wider GolosText font-bold">
                            (<span>
                                 <CountUp
                                     start={0}
                                     end={30}
                                     duration={8}
                                     enableScrollSpy
                                 >
                                    {({countUpRef}) => <span ref={countUpRef}/>}
                                </CountUp>
                              </span> M2)
                        </h2>
                        <h2 className="GolosText text-xl mt-2">
                            bedroom
                        </h2>
                    </div>
                    <div className="p-10 border border-gray-200 flex flex-col justify-center items-center">
                        <h2 className="text-5xl tracking-wider GolosText font-bold">
                            (<span>
                                <CountUp
                                    start={0}
                                    end={12}
                                    duration={8}
                                    enableScrollSpy
                                >
                                    {({countUpRef}) => <span ref={countUpRef}/>}
                                </CountUp>

                              </span> M2)
                        </h2>
                        <h2 className="GolosText text-xl mt-2">
                            bathroom
                        </h2>
                    </div>
                    <div className="p-10 border border-gray-200 flex flex-col justify-center items-center">
                        <h2 className="text-5xl tracking-wider GolosText font-bold">
                            (<span>
                                 <CountUp
                                     start={0}
                                     end={29}
                                     duration={8}
                                     enableScrollSpy
                                 >
                                    {({countUpRef}) => <span ref={countUpRef}/>}
                                </CountUp>
                              </span> M2)
                        </h2>
                        <h2 className="GolosText text-xl mt-2">
                            workspace
                        </h2>
                    </div>
                    <div className="p-10 border border-gray-200 flex flex-col justify-center items-center">
                        <h2 className="text-5xl tracking-wider GolosText font-bold">
                            (<span>
                                 <CountUp
                                     start={0}
                                     end={12}
                                     duration={8}
                                     enableScrollSpy
                                 >
                                    {({countUpRef}) => <span ref={countUpRef}/>}
                                </CountUp>
                              </span> M2)
                        </h2>
                        <h2 className="GolosText text-xl mt-2">
                            kitchen
                        </h2>
                    </div>
                </div>
                <div className="mt-10">
                    <h2 className="CalSans text-5xl md:text-7xl">
                        Incredible Result
                    </h2>
                    <p className="GolosText text-gray-500 mt-5">
                        This project delivers an exceptional result that reflects thoughtful planning, refined
                        craftsmanship, and a strong sense of visual harmony. Every detail—materials, colors, lighting,
                        and spatial layout—was carefully selected to enhance both functionality and aesthetic appeal.
                        The design balances comfort and modern elegance, creating an atmosphere that feels welcoming yet
                        sophisticated. Clear lines, natural textures, and purposeful accents come together to form a
                        cohesive environment that elevates the overall experience of the space. The final outcome is a
                        beautifully executed interior that not only looks incredible but also performs seamlessly in
                        everyday living.

                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full md:h-[750px] overflow-hidden">
                {project.images.map((img, index) => (
                    <div
                        key={index}
                        className={`
                          relative transition-all duration-700 ease-in-out flex flex-col
                          ${hoveredIndex === index ? "md:w-[60%]" : "md:w-[20%]"}
                          ${hoveredIndex === null ? "md:w-full" : ""}
                          w-full h-[333px] md:h-auto mx-[2px] my-[2px] md:my-[0px]
                        `}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="flex-1 overflow-hidden">
                            <img
                                src={img}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                            />
                        </div>

                    </div>
                ))}
            </div>

            <div className="px-[8%] lg:px-[10%] py-20 about">
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="w-full lg:w-1/3 title pt-8">
                        <span
                            className="rounded-full title-span border border-gray-400 px-6 py-2 GolosText uppercase font-semibold">
                            Related Projects
                        </span>
                    </div>
                    <div className="w-full lg:w-2/3">
                        <h1 className="CalSans text-4xl md:text-7xl w-full lg:w-[60%]">
                            Explore <span className="text-(--prim)">Our Project </span>Showcase
                        </h1>
                    </div>
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 150,
                    }}
                    modules={[Autoplay]}
                    speed={1800}
                    breakpoints={{
                        1200: {slidesPerView: 3},
                        991: {slidesPerView: 2},
                        575: {slidesPerView: 1},
                        0: {slidesPerView: 1},
                    }}
                    className="mt-30"
                >
                    {ProjectsData.map((project, index) => (

                        <SwiperSlide key={index}>
                            <div className="project-card group">
                                <Link href={`/UI-Components/Projects/${project.id}`}>
                                    <div
                                        className="project-image relative w-full h-[500px] overflow-hidden rounded-2xl cursor-pointer">
                                        <div
                                            className="project-img w-full h-full bg-cover group-hover:scale-110 transition-all duration-500 bg-center"
                                            style={{backgroundImage: `url(${project.image})`}}>
                                        </div>
                                        <div className="absolute top-5 left-5 flex gap-2 z-50">
                                            {project.tags.map((tag, idx) => (
                                                <div key={idx} className="bg-white/20 backdrop-blur-sm text-white border border-gray-300 px-4 py-1 rounded-full
                                                hover:bg-(--prim) hover:border-transparent transition-all duration-300">
                                                    {tag}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                                <div className="project-info my-5">
                                    <Link href={`/UI-Components/Projects/${project.id}`}>
                                        <h2 className="GolosText font-semibold text-3xl hover:text-(--prim) transition-all duration-300">
                                            {project.title}
                                        </h2>
                                    </Link>
                                    <h5 className="GolosText text-2xl mt-2">{project.location}</h5>
                                    <p className="GolosText text-md text-gray-700">{project.date}</p>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}

                </Swiper>
            </div>


        </>
    );
}

export default ProjectDetails;