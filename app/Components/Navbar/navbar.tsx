"use client";
import Link from "next/link";
import {useState, useEffect} from "react";

type NavLink = {
    label: string;
    href: string;
    dropdown?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
    {label: "home", href: "/"},
    {label: "Services", href: "/UI-Components//Pages/Services"},
    {
        label: "Projects",
        href: "/UI-Components//Projects",
        dropdown: [
            {label: "Projects", href: "/UI-Components//Projects"},
            {label: "Projects Details", href: "/UI-Components//Projects/2"}
        ]
    },
    {
        label: "Blog",
        href: "/Blogs",
        dropdown: [
            {label: "Blog", href: "/UI-Components//Blogs"},
            {label: "Blog Details", href: "/UI-Components//Blogs/2"}
        ]
    },
    {
        label: "Pages",
        href: "#",
        dropdown: [
            {label: "About", href: "//UI-Components/Pages/About"},
            {label: "Team", href: "/UI-Components//Pages/Team"},
            {label: "Gallery", href: "/UI-Components//Pages/Gallery"},
            {label: "Contact", href: "/UI-Components//Pages/Contact"},
            {label: "Page 404", href: "/UI-Components//Pages/Page404"},

        ]
    },
    {label: "Contact", href: "/UI-Components//Pages/Contact"},

]

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleDropdown = (label: string) => {
        setOpenDropdowns((prev) => (prev[label] ? {} : {[label]: true}));
    };


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setShow(false);
            } else {
                setShow(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, [lastScrollY]);


    return (
        <div className={`w-full transition-all bg-white duration-500 fixed top-0 left-0 z-100
      ${show ? "translate-y-0" : "-translate-y-full"}`}>

            <div className="flex items-center justify-between px-[5%] py-5">
                <div className="flex items-center gap-5">
                    <Link href="/" className="text-xl md:text-3xl font-bold Audiowide text-(--black) ">
                        Elegant<span className="text-(--prim)">Design</span>
                    </Link>

                    <nav className="hidden lg:flex space-x-4 menu-link relative ms-10">
                        {navLinks.map((link) =>
                            link.dropdown ? (
                                <div key={link.label} className="relative group z-50">
                                    <Link
                                        href={link.href}
                                        className="flex menu-links text-md xl:text-lg items-center gap-1 hover:text-(--prim) transition-all duration-300">

                                        {link.label} <i
                                        className="ri-arrow-down-s-line transition-all duration-300 group-hover:rotate-180"></i>
                                    </Link>
                                    <div
                                        className="absolute left-0 top-8 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all
                                         duration-300 bg-(--white) shadow-xl border border-gray-50/10 rounded-lg z-500 min-w-[180px]">
                                        {link.dropdown.map((item) =>
                                            (
                                                <Link
                                                    key={item.label}
                                                    href={item.href}
                                                    className="block px-4 py-2 text-md hover:text-(--prim) transition-all duration-300">
                                                    <i className="bi bi-gear text-xs px-1"/>{item.label}
                                                </Link>
                                            ))}

                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-md xl:text-lg hover:text-(--prim) transition-all duration-300">
                                    {link.label}
                                </Link>

                            )
                        )}
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <button className="hidden xl:flex items-center gap-1 cursor-pointer"
                            onClick={() => window.location.href = 'tel:+201277104751'}>
                        <i className="bi bi-telephone-inbound text-md px-3 py-2 rounded-full"/>
                        <div className="flex flex-col items-start">
                            <p>Call Us Now</p>
                            <h3 className="text-(--prim)">+201277104751</h3>
                        </div>
                    </button>
                    <Link href="/UI-Components//Pages/Contact">
                        <button className="bg-(--prim) text-sm lg:text-md text-white font-medium lg:px-5 px-2 py-3 rounded-full hover:bg-white
                        hover:text-(--black) border border-transparent hover:border-gray-400 cursor-pointer transition-all duration-300">
                            Get a Quote!
                        </button>
                    </Link>

                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden text-lg">
                        <i className={`ri-${mobileMenuOpen ? "close-line" : "menu-3-line"} transition-all duration-300`}></i>
                    </button>
                </div>
            </div>

            <div className={`lg:hidden bg-(--white) border-t border-gray-400 overflow-hidden transition-all duration-500
                ${mobileMenuOpen ? "max-h-[700px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"}`}>
                <div className="px-[8%] space-y-3">
                    {navLinks.map((link) => (
                        <div key={link.label}
                             className="border border-gray-700/50 rounded-lg overflow-hidden">
                            {link.dropdown ? (
                                <>
                                    <button onClick={() => toggleDropdown(link.label)}
                                            className="w-full flex justify-between items-center px-4 py-3 text-left
                                    text-(--text) font-medium hover:text-(--prim) transition">
                                        {link.label}
                                        <i className={`ri-arrow-down-s-line transition-transform duration-300
                                        ${openDropdowns[link.label] ? "rotate-180" : ""}`}/>
                                    </button>
                                    <div className={`pl-6 pr-4 bg-gray-800/10 border-t border-gray-700/40 transition-all
                                    duration-500 ${openDropdowns[link.label] ? "max-h-[360px] opacity-100 py-2" : "max-h-0 opacity-0 py-0"}`}>
                                        {link.dropdown.map((item) => (
                                            <Link href={item.href}
                                                  key={item.label}
                                                  className="block py-2 font-medium hover:text-(--prim) transition"
                                                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <Link href={link.href}
                                      className=" block px-4 py-3 text-(--text) font-medium hover:text-(--prim) transition"
                                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                                    {link.label}
                                </Link>
                            )}

                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Navbar;