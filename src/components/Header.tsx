import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoCallOutline, IoCopy } from "react-icons/io5";

const Header: React.FC = () => {
    const [hasShadow, setHasShadow] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const phoneNumber = "+91 80089 52100";
    const handleCopy = () => {
        navigator.clipboard.writeText(phoneNumber);
        alert("Phone number copied to clipboard!");
    };

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

    const navLinks = [
        { id: "home", label: "Home" },
        { id: "projects", label: "Projects" },
        { id: "skills", label: "Skills" },
        { id: "experience", label: "Experience" },
        { id: "contactme", label: "Contact me" },
    ];

    return (
        <header
            className={`sticky top-0  z-50 transition-all duration-300 ${hasShadow ? "shadow-md dshadow-card bg-[#F8F7F3] " : "bg-[#FDC435]"
                }`}
        >
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-3">
                {/* Logo */}
                <h1 className="text-2xl relative font-dancing font-[700] text-black">Venu Gopal</h1>

                {/* Navigation Links */}
                <nav className="flex text-base font-edu space-x-8 text-textPrimary font-medium">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={() => handleSetActiveLink(link.id)}
                            className={`relative group font-medium text-textPrimary transition duration-300 ease-in-out hover:text-accent ${activeLink === link.id ? "text-accent" : ""
                                }`}
                        >
                            {link.label}
                            <span
                                className={`absolute inset-x-0 bottom-0 h-0.5 bg-accent transition-transform duration-300 origin-left ${activeLink === link.id ? "scale-x-100" : "scale-x-0"
                                    }`}
                            ></span>
                        </a>
                    ))}
                </nav>

                {/* Contact Section */}
                <div className="flex items-center space-x-3">
                    <p className="font-edu font-medium">{phoneNumber}</p>
                    <motion.div
                        className="relative"
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                    >
                        <motion.button
                            // initial={{ rotateY: 0 }}
                            onClick={handleCopy}
                            animate={{ rotateY: isHovered ? 180 : 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }} // Slower flip
                            className={`p-2 rounded-full flex justify-center items-center ${isHovered
                                ? "bg-white text-black"
                                : "bg-gradient-to-br from-orange-500 via-white/30 to-green-600"
                                }`}
                        >
                            {!isHovered ? <IoCallOutline /> : <IoCopy />}
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </header>
    );
};

export default Header;
