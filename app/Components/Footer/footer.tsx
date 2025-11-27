import Link from "next/link";


function Footer() {
    return (
        <>
            <div className="px-[8%] lg:px-[10%] py-20 mb-0 footer relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-15">
                    <div className="footer-content">
                        <Link href="/" className="text-lg md:text-3xl font-bold Audiowide text-white">
                            Elegant<span className="text-(--prim)">Design</span>
                        </Link>
                        <h2 className="text-gray-300 text-lg my-5 GolosText">
                            We transform your vision into beautifully crafted spaces.
                        </h2>
                        <p className="text-gray-300 GolosText">
                            Cinema St, Disuq, Kafrelsheikh
                        </p>
                    </div>
                    <div className="footer-content py-3">
                        <ul className="footer-links flex flex-col">
                            <Link href="/UI-Components/Pages/About"
                                  className="text-gray-300 GolosText mb-1 text-[17px] transition-all duration-300 hover:text-(--prim) hover:ml-2">
                                About Us
                            </Link>
                            <Link href="/UI-Components/Pages/Services"
                                  className="text-gray-300 GolosText mb-1 text-[17px] transition-all duration-300 hover:text-(--prim) hover:ml-2">
                                Services
                            </Link>
                            <Link href="/UI-Components/Pages/Gallery"
                                  className="text-gray-300 GolosText mb-1 text-[17px] transition-all duration-300 hover:text-(--prim) hover:ml-2">
                                Gallery
                            </Link>
                            <Link href="/UI-Components/Pages/Teams"
                                  className="text-gray-300 GolosText mb-1 text-[17px] transition-all duration-300 hover:text-(--prim) hover:ml-2">
                                Our Team
                            </Link>
                            <Link href="/UI-Components/Blogs"
                                  className="text-gray-300 GolosText mb-1 text-[17px] transition-all duration-300 hover:text-(--prim) hover:ml-2">
                                Blog
                            </Link>
                            <Link href="/UI-Components/Pages/Contact"
                                  className="text-gray-300 GolosText mb-1 text-[17px] transition-all duration-300 hover:text-(--prim) hover:ml-2">
                                Contact Us
                            </Link>
                        </ul>
                    </div>
                    <div className="footer-content py-3">
                        <ul className="footer-links flex flex-col">
                            <Link href="/UI-Components/Projects"
                                  className="text-gray-300 GolosText mb-1 text-[17px] transition-all duration-300 hover:text-(--prim) hover:ml-2">
                                Our Projects
                            </Link>
                            <Link href="/UI-Components/Pages/Services"
                                  className="text-gray-300 GolosText mb-1 text-[17px] transition-all duration-300 hover:text-(--prim) hover:ml-2">
                                Services
                            </Link>
                            <Link href="/UI-Components/Pages/Gallery"
                                  className="text-gray-300 GolosText mb-1 text-[17px] transition-all duration-300 hover:text-(--prim) hover:ml-2">
                                Gallery
                            </Link>
                            <Link href="/UI-Components/Pages/Teams"
                                  className="text-gray-300 GolosText mb-1 text-[17px] transition-all duration-300 hover:text-(--prim) hover:ml-2">
                                Our Team
                            </Link>
                            <Link href="/UI-Components/Blogs"
                                  className="text-gray-300 GolosText mb-1 text-[17px] transition-all duration-300 hover:text-(--prim) hover:ml-2">
                                Blog
                            </Link>
                            <Link href="/UI-Components/Pages/Contact"
                                  className="text-gray-300 GolosText mb-1 text-[17px] transition-all duration-300 hover:text-(--prim) hover:ml-2">
                                Contact Us
                            </Link>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Footer;