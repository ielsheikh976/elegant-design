import Link from "next/link";
import {SlSocialFacebook} from "react-icons/sl";
import {BsTwitterX} from "react-icons/bs";
import {FaWhatsapp} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className="px-[8%] lg:px-[10%] py-20 pb-0 footer relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-15">
                    <div className="footer-content">
                        <Link href="/" className="text-lg md:text-3xl font-bold Audiowide text-white">
                            Elegant<span className="text-(--prim)">Design</span>
                        </Link>
                        <h2 className="text-gray-300 text-lg my-5 GolosText">
                            We transform your vision into beautifully crafted spaces.
                        </h2>
                        <p className="text-gray-300 GolosText">
                            Cinema St, Disuq, Kafr elsheikh
                        </p>
                    </div>
                    <div className="footer-content py-3">
                        <ul className="footer-links flex flex-col">
                            {[
                                {label: "About Us", href: "/UI-Components/Pages/About"},
                                {label: "Services", href: "/UI-Components/Pages/Services"},
                                {label: "Gallery", href: "/UI-Components/Pages/Gallery"},
                                {label: "Our Team", href: "/UI-Components/Pages/Teams"},
                                {label: "Blog", href: "/UI-Components/Blogs"},
                                {label: "Contact Us", href: "/UI-Components/Pages/Contact"},
                            ].map((item, i) => (
                                <Link key={i}
                                      href={item.href}
                                      className="text-gray-300 GolosText mb-1.5 text-[17px] transition-all duration-300 hover:text-[var(--prim)] hover:ml-2"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-content py-3">
                        <ul className="footer-links flex flex-col">
                            {[
                                {label: "Our Projects", href: "/UI-Components/Projects"},
                                {label: "Partners", href: "/UI-Components/Pages/Services"},
                                {label: "Partners Program", href: "/UI-Components/Pages/Gallery"},
                                {label: "Affiliate Program", href: "/UI-Components/Pages/Teams"},
                                {label: "Terms & Conditions", href: "/UI-Components/Blogs"},
                                {label: "Support Center", href: "/UI-Components/Pages/Contact"},
                            ].map((item, i) => (
                                <Link key={i}
                                      href={item.href}
                                      className="text-gray-300 GolosText mb-1.5 text-[17px] transition-all duration-300 hover:text-[var(--prim)] hover:ml-2"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-content py-3 flex flex-col">
                        <h2 className="text-xl text-(--prim) underline CalSans mb-3">
                            (+20) 1277104751
                        </h2>
                        <h4 className="text-lg GolosText text-gray-300">
                            ibrahimelsheikh196@gmail.com
                        </h4>
                        <div className="footer-social flex gap-4 py-6">
                            <SlSocialFacebook
                                size={40}
                                onClick={() => window.open("https://facebook.com/profile.php?id=61577612399445", "_blank")}
                                className="text-gray-300 cursor-pointer transition-all duration-300
                                       hover:text-[var(--prim)] hover:scale-125
                                       hover:shadow-[0_0_12px_var(--prim)] p-2 rounded-full
                                       bg-white/5 backdrop-blur-sm"
                            />

                            <FaInstagram
                                size={40}
                                className="text-gray-300 cursor-pointer transition-all duration-300
                                           hover:text-[var(--prim)] hover:scale-125
                                           hover:shadow-[0_0_12px_var(--prim)] p-2 rounded-full
                                           bg-white/5 backdrop-blur-sm"
                            />

                            <FaWhatsapp
                                size={40}
                                onClick={() => window.open("https://wa.me/201009067128", "_blank")}
                                className="text-gray-300 cursor-pointer transition-all duration-300
                                           hover:text-[var(--prim)] hover:scale-125
                                           hover:shadow-[0_0_12px_var(--prim)] p-2 rounded-full
                                           bg-white/5 backdrop-blur-sm"
                            />

                            <BsTwitterX
                                size={40}
                                className="text-gray-300 cursor-pointer transition-all duration-300
                                           hover:text-[var(--prim)] hover:scale-125
                                           hover:shadow-[0_0_12px_var(--prim)] p-2 rounded-full
                                           bg-white/5 backdrop-blur-sm"
                            />
                        </div>

                    </div>
                </div>
                <div className="footer-bottom flex justify-center items-center py-8 border-t border-gray-500">
                    <p className="text-gray-300 text-lg">&copy; Copyright {new Date().getFullYear()}. All Rights
                        Reserved By
                        <Link href="/"
                              className="font-semibold transition-all duration-300 text-white text-xl hover:text-(--prim)"> Ibrahim
                            Elsheikh
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Footer;