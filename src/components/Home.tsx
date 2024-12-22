import React from "react";
import { motion } from "framer-motion";
import profile2 from "../assets/profile2.png";
import { ReactTyped } from "react-typed";

const Home: React.FC = () => {
    const socialLinks = [
        {
            href: "https://github.com/venu123143",
            imgSrc: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
            alt: "GitHub",
            label: "GitHub",
        },
        {
            href: "https://x.com/venu_reddy_9493",
            imgSrc: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
            alt: "Twitter",
            label: "Twitter",
        },
        {
            href: "https://www.linkedin.com/in/venu-reddy-a226881b6/",
            imgSrc: "https://cdn-icons-png.flaticon.com/512/145/145807.png",
            alt: "LinkedIn",
            label: "LinkedIn",
        },
    ];
    return (
        <div id="home" className="bg-[#F8F7F3] rounded-xl p-8 flex flex-col items-center md:flex-row">
            {/* Left Section */}
            <div className="flex flex-col md:flex-row items-center w-full md:w-3/4">

                {/* Text Content */}
                <motion.div
                    className="md:ml-8 text-center space-y-4 md:text-left mt-6 md:mt-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <h2 className="text-3xl font-sans font-bold text-textPrimary">
                        Hey There, <br /> I'm {" "}
                        <span className="text-accent">
                            <ReactTyped
                                strings={[
                                    "Full Stack Developer..."
                                ]}
                                typeSpeed={50}
                                backSpeed={30}
                                loop
                            />
                        </span>
                    </h2>
                    <p className="mt-2 font-edu  text-md font-medium">
                        Having more than 2 years of experience in web development.
                    </p>

                    <a target="_blank" href="https://www.canva.com/design/DAFj-JlZs_I/lYKRtoro-a54diJcflWvuA/view?utm_content=DAFj-JlZs_I&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                        className="px-8 py-3 block w-fit bg-gradient-to-r from-[#4A90E2] to-[#007AFF] text-white font-rubik font-medium text-lg rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                        Hire Me
                    </a>

                </motion.div>

                {/* Animated Profile Image */}
                <motion.div
                    className="relative w-full md:w-[500px] md:h-[500px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 800 800"
                        width="1200"
                        height="1200"
                        className="absolute top-0 left-0 w-full h-full z-10"
                    >
                        <path
                            d="M100 400c50-150 300-300 500-200s200 300 100 500-400 100-500-100-150-50-100-200z"
                            fill="#286F6B"
                        />
                    </svg>

                    {/* Animated Image */}
                    <motion.img
                        src={profile2}
                        alt="Profile"
                        className="absolute rounded-full top-0 left-0 w-full h-full object-cover z-20"
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                        }}
                    />
                </motion.div>
            </div>

            {/* Right Section */}
            <motion.div
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 50, duration: 0.5 }}
            >
                <div className="mt-10 md:mt-0 md:ml-10 flex flex-col items-center md:items-end w-full">
                    <div
                        className="flex flex-col space-y-4"
                    >
                        {/* Social Media Links */}
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow hover:shadow-lg transition duration-300 ease-in-out"
                            >
                                <img src={link.imgSrc} alt={link.alt} className="w-6 h-6" />
                                <span className="text-[#286F6B] font-edu font-medium">{link.label}</span>
                            </a>
                        ))}
                    </div>
                </div>
                {/* Your content here */}
            </motion.div>
        </div>
    );
};

export default Home;
