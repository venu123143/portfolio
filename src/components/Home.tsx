import React from "react";
import { motion } from "framer-motion";
import profile2 from "../assets/profile2.png";
import { ReactTyped } from "react-typed"; // note: ensure correct import if it's a default export
 
const Home: React.FC = () => {
    return (
        <div
            id="home"
            className=" p-8 flex flex-col gap-6 items-center justify-between md:flex-row"
            style={{ backgroundColor: "var(--background-color)" }}
        >
            {/* Left Section */}
            <motion.div
                className="md:ml-8 text-center space-y-4 md:text-left mt-6 md:mt-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <h2
                    className="text-xl sm:text-3xl font-sans font-bold"
                    style={{ color: "var(--text-primary)" }} // dynamic text color
                >
                    Hey There, <br /> I'm{" "}
                    <span style={{ color: "var(--accent-color)" }}>
                        <ReactTyped
                            strings={[" Full Stack Developer..."]}
                            typeSpeed={50}
                            backSpeed={30}
                            loop
                        />
                    </span>
                </h2>
                <p
                    className="mt-2 font-edu text-md font-medium"
                    style={{ color: "var(--text-primary)" }}
                >
                    Having more than 2 years of experience in web development.
                </p>

                <div className="flex justify-center md:justify-start space-x-4 mt-6">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.canva.com/design/DAFj-JlZs_I/lYKRtoro-a54diJcflWvuA/view?utm_content=DAFj-JlZs_I&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                        className="px-8 py-3 block font-edu w-fit text-white font-medium text-lg rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4"
                        style={{
                            background: "linear-gradient(to right, var(--accent-color), var(--accent-color-alt))",
                        }}
                    >
                        Resume
                    </a>

                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/venu123143"
                        className="px-8 py-3 block font-edu w-fit text-white font-medium text-lg rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4"
                        style={{
                            backgroundColor: "var(--button-bg)",
                        }}
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
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 5, ease: "linear" }}
                >
                    <circle
                        cx="50"
                        cy="50"
                        r="48"
                        stroke="var(--accent-color)"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray="5,5"
                    />
                    <path
                        d="M50 2C24.3 2 2 24.3 2 50s22.3 48 48 48 48-22.3 48-48S75.7 2 50 2zm0 92c-24.3 0-44-19.7-44-44S25.7 6 50 6s44 19.7 44 44-19.7 44-44 44z"
                        fill="var(--accent-color)"
                    />
                </motion.svg>

                <motion.img
                    src={profile2}
                    alt="Profile"
                    className="absolute rounded-full w-[90%] h-[90%] object-cover z-20"
                    style={{
                        clipPath: "circle(50% at 50% 50%)",
                    }}
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>
        </div>
    );
};

export default Home;
