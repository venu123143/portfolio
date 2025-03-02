import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";
import { useTheme } from "../contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

const navLinks = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "contactme", label: "Contact me" },
];


const Header: React.FC = () => {
    const { state, dispatch } = useTheme();

    const [hasShadow, setHasShadow] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const phoneNumber = "+91 80089 52100";

    const [activeLink, setActiveLink] = useState<string>("home"); // State to track active link

    useEffect(() => {
        const handleScroll = () => {
            setHasShadow(window.scrollY > 20);
            if (window.scrollY === 0) {
                setActiveLink("home")
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const sectionElements = navLinks.map(link => document.getElementById(link.id));
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && activeLink !== entry.target.id) setActiveLink(entry.target.id);
                });
            },
            { root: null, rootMargin: "0px", threshold: 0.6 }
        );

        sectionElements.forEach(section => section && observer.observe(section));
        return () => sectionElements.forEach(section => section && observer.unobserve(section));
    }, []);

    const handleSetActiveLink = (link: string) => {
        setActiveLink(link);
        setIsSidebarOpen(false); // Close sidebar when a link is clicked
    };


    return (
        <header style={{ backgroundColor: hasShadow ? "var(--background-color)" : "#FDC435" }}
            className={`sticky top-0 z-50 transition-all duration-300`}
        >
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-3">
                {/* Logo */}
                <h1 className="text-2xl font-dancing font-bold" style={{ color: hasShadow ? "var(--text-primary)" : 'black' }}>
                    Venu Gopal
                </h1>
                {/* Navigation Links for Desktop */}
                <nav className="hidden md:flex text-base font-edu space-x-6 font-medium">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={() => handleSetActiveLink(link.id)}
                            style={{
                                color: !hasShadow ? "black" : "var(--accent-color)",
                            }}
                            className={`relative p-1 rounded-sm hover:shadow-sm hover:bg-purple-500/20 group font-medium  transition duration-300 ease-in-out hover:text-accent ${activeLink === link.id ? "text-accent" : "text-accent"}`}
                        >
                            {link.label}
                            <span
                                className={`absolute inset-x-0 bottom-0 h-0.5 bg-accent transition-transform duration-300 origin-left ${activeLink === link.id ? "scale-x-100" : "scale-x-0"}`}
                            ></span>
                        </a>
                    ))}
                </nav>

                {/* Menu Icon for Mobile */}
                <div className="block md:flex items-center md:gap-3">
                    <p style={{
                        color: !hasShadow ? "black" : "var(--accent-color)",
                    }} className="lg:block hidden font-edu font-medium">{phoneNumber}</p>
                    <button
                        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
                        className="p-2 md:cursor-pointer rounded-full hover:bg-white/40  hover:bg-muted transition-colors"
                        aria-label="Toggle theme"
                    >
                        {state.theme === "dark" ? (
                            <Sun className="h-6 w-6" style={{ color: "var(--accent-color)" }} />
                        ) : (
                            <Moon className="h-6 w-6" style={{ color: "var(--text-primary)" }} />
                        )}
                    </button>
                    <button
                        style={{
                            color: !hasShadow ? "black" : "var(--accent-color)",
                        }}
                        className="md:hidden text-2xl p-3 hover:bg-yellow-200 rounded-full"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        {isSidebarOpen ? <IoClose /> : <IoMenu />}
                    </button>
                </div>
            </div>

            {/* Overlay for Mobile View */}
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>
            )}

            {/* Sidebar for Mobile View */}
            {isSidebarOpen && (
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-0 right-0 h-full w-3/4 shadow-lg p-4 z-40 md:hidden"
                    style={{ backgroundColor: "var(--background-color)" }}
                >
                    <nav className="flex flex-col space-y-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                onClick={() => handleSetActiveLink(link.id)}
                                className="text-lg font-edu font-medium transition duration-300 ease-in-out"
                                style={{
                                    color: activeLink === link.id ? "var(--accent-color)" : "var(--text-primary)",
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </motion.div>
            )}
        </header>
    );
};

export default Header;
