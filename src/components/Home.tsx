import React from "react";
import { motion } from "framer-motion";
import profile2 from "../assets/profile2.png";
import { ReactTyped } from "react-typed";

const Home: React.FC = () => {
    // const socialLinks = [
    //     {
    //         href: "https://github.com/venu123143",
    //         imgSrc: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    //         alt: "GitHub",
    //         label: "GitHub",
    //     },
    //     {
    //         href: "https://x.com/venu_reddy_9493",
    //         imgSrc: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
    //         alt: "Twitter",
    //         label: "Twitter",
    //     },
    //     {
    //         href: "https://www.linkedin.com/in/venu-reddy-a226881b6/",
    //         imgSrc: "https://cdn-icons-png.flaticon.com/512/145/145807.png",
    //         alt: "LinkedIn",
    //         label: "LinkedIn",
    //     },
    // ];
    return (
        <div id="home" className="bg-[#F8F7F3] rounded-xl p-8 flex flex-col gap-6 items-center justify-between md:flex-row">
            {/* Left Section */}
            <motion.div
                className="md:ml-8 text-center space-y-4 md:text-left mt-6 md:mt-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <h2 className="text-xl sm:text-3xl font-sans font-bold text-textPrimary">
                    Hey There, <br /> I'm {" "}
                    <span className="text-accent">
                        <ReactTyped
                            strings={["Full Stack Developer..."]}
                            typeSpeed={50}
                            backSpeed={30}
                            loop
                        />
                    </span>
                </h2>
                <p className="mt-2 font-edu text-md font-medium">
                    Having more than 2 years of experience in web development.
                </p>

                <div className="flex justify-center md:justify-start space-x-4 mt-6">
                    <a
                        target="_blank"
                        href="https://www.canva.com/design/DAFj-JlZs_I/lYKRtoro-a54diJcflWvuA/view?utm_content=DAFj-JlZs_I&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                        className="px-8 py-3 block font-edu w-fit bg-gradient-to-r from-[#4A90E2] to-[#007AFF] text-white font-medium text-lg rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                        Resume
                    </a>

                    <a
                        target="_blank"
                        href="https://github.com/venu123143"  // Replace with your actual GitHub profile link
                        className="px-8 py-3 block font-edu w-fit bg-gray-800 text-white font-medium text-lg rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-600"
                    >
                        GitHub
                    </a>
                </div>
            </motion.div>

            {/* Animated Profile Image */}
            <motion.div
                className="relative overflow-hidden w-full md:w-[500px] md:h-[500px] flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    whileHover={{ rotate: 360 }}  // Rotate on hover
                    transition={{ duration: 5, ease: "linear" }}
                >
                    <circle cx="50" cy="50" r="48" stroke="#286F6B" strokeWidth="4" fill="none" strokeDasharray="5,5" />
                    <path d="M50 2C24.3 2 2 24.3 2 50s22.3 48 48 48 48-22.3 48-48S75.7 2 50 2zm0 92c-24.3 0-44-19.7-44-44S25.7 6 50 6s44 19.7 44 44-19.7 44-44 44z" fill="#286F6B" />
                </motion.svg>

                {/* Animated Image */}
                <motion.img
                    src={profile2}
                    alt="Profile"
                    className="absolute rounded-full w-[90%] h-[90%] object-cover z-20"
                    style={{
                        clipPath: "circle(50% at 50% 50%)", // Ensures the image is circular
                    }}
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>

        </div >
    );
};

export default Home;
