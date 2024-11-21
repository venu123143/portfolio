import React, { useEffect, useState } from "react";
import { IoCallOutline } from "react-icons/io5";

const Header: React.FC = () => {
    const [hasShadow, setHasShadow] = useState(false);
    const [activeLink, setActiveLink] = useState<string>("services"); // State to track active link

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setHasShadow(true);
            } else {
                setHasShadow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleSetActiveLink = (link: string) => {
        setActiveLink(link);
    };

    return (
        <header
            className={`sticky top-0  z-50 transition-all duration-300 ${hasShadow ? "shadow-md dshadow-card bg-[#F8F7F3] " : "bg-[#FDC435]"
                }`}
        >
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-3">
                {/* Logo */}
                <h1 className="text-2xl relative font-dancing font-[700] text-black">Venu Gopal</h1>

                {/* Navigation Links */}
                <nav className="flex font-edu space-x-8 text-textPrimary font-medium">
                    <a
                        href="#services"
                        onClick={() => handleSetActiveLink("services")}
                        className={`relative group text-lg font-medium text-textPrimary transition duration-300 ease-in-out hover:text-accent ${activeLink === "services" ? "text-accent" : ""
                            }`}
                    >
                        Services
                        <span
                            className={`absolute inset-x-0 bottom-0 h-0.5 bg-accent transition-transform duration-300 origin-left ${activeLink === "services" ? "scale-x-100" : "scale-x-0"
                                }`}
                        ></span>
                    </a>
                    <a
                        href="#works"
                        onClick={() => handleSetActiveLink("works")}
                        className={`relative group text-lg font-medium text-textPrimary transition duration-300 ease-in-out hover:text-accent ${activeLink === "works" ? "text-accent" : ""
                            }`}
                    >
                        Works
                        <span
                            className={`absolute inset-x-0 bottom-0 h-0.5 bg-accent transition-transform duration-300 origin-left ${activeLink === "works" ? "scale-x-100" : "scale-x-0"
                                }`}
                        ></span>
                    </a>
                    <a
                        href="#notes"
                        onClick={() => handleSetActiveLink("notes")}
                        className={`relative group text-lg font-medium text-textPrimary transition duration-300 ease-in-out hover:text-accent ${activeLink === "notes" ? "text-accent" : ""
                            }`}
                    >
                        Notes
                        <span
                            className={`absolute inset-x-0 bottom-0 h-0.5 bg-accent transition-transform duration-300 origin-left ${activeLink === "notes" ? "scale-x-100" : "scale-x-0"
                                }`}
                        ></span>
                    </a>
                    <a
                        href="#experience"
                        onClick={() => handleSetActiveLink("experience")}
                        className={`relative group text-lg font-medium text-textPrimary transition duration-300 ease-in-out hover:text-accent ${activeLink === "experience" ? "text-accent" : ""
                            }`}
                    >
                        Experience
                        <span
                            className={`absolute inset-x-0 bottom-0 h-0.5 bg-accent transition-transform duration-300 origin-left ${activeLink === "experience" ? "scale-x-100" : "scale-x-0"
                                }`}
                        ></span>
                    </a>
                </nav>

                {/* Contact Section */}
                <div className="flex font-rubik items-center space-x-3">
                    <p className="text-textPrimary font-medium">+91 80089 52100</p>
                    <button className="p-2 bg-gradient-to-br from-orange-500 via-white/30 to-green-600 rounded-full">
                        {/* 📞 */}
                        <IoCallOutline />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
