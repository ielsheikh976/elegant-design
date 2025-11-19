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
    {label: "Service", href: "/UI-Components/Pages/Services"},
    {
        label: "Projects",
        href: "UI-Components/Projects",
        dropdown: [
            {label: "Projects", href: "UI-Components/Projects"},
            {label: "Projects Details", href: "UI-Components/Projects/2"}
        ]
    },
    {
        label: "Blog",
        href: "UI-Components/Blogs",
        dropdown: [
            {label: "Blog", href: "UI-Components/Blogs"},
            {label: "Blog Details", href: "UI-Components/Blogs/2"}
        ]
    },
    {
        label: "Pages",
        href: "#",
        dropdown: [
            {label: "About", href: "UI-Components/Pages/About"},
            {label: "Team", href: "UI-Components/Pages/Team"},
            {label: "Gallery", href: "UI-Components/Pages/Gallery"},
            {label: "Contact", href: "UI-Components/Pages/Contact"},
            {label: "Page 404", href: "UI-Components/Pages/Page404"},

        ]
    },
    {label: "Contact", href: "UI-Components/Pages/Contact"},

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

            <div className="flex items-center justify-between px-[8%] lg:px-[12%] py-5">
                <div className="flex items-center gap-5">
                    <Link href="/" className="text-4xl font-bold Audiowide text-(--black) ">
                        Elegant<span className="text-(--prim)">Design</span>
                    </Link>

                    <nav className="hidden lg:flex space-x-4 menu-link relative ms-10 GolosText">
                        {navLinks.map((link) =>
                            link.dropdown ? (
                                <div key={link.label} className="relative group z-50">
                                    <Link
                                        href={link.href}
                                        className="flex menu-links text-lg items-center gap-1 hover:text-(--prim) transition-all duration-300">

                                        {link.label} <i className="ri-arrow-down-s-line transition-all duration-300 group-hover:rotate-180"></i>
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
                                    className="text-lg hover:text-(--prim) transition-all duration-300">
                                    {link.label}
                                </Link>

                            )
                        )}
                    </nav>
                </div>
            </div>

        </div>
    );
}

export default Navbar;