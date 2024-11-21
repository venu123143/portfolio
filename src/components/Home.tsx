import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/Passport.jpg";

const Home: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#F8F7F3] min-h-screen shadow-card rounded-xl p-8 flex flex-col items-center md:flex-row"
        >
            {/* Left Section */}
            <div className="flex flex-col md:flex-row items-center w-full md:w-3/4">
                {/* Profile Image */}
                <motion.img
                    src={bgImage}
                    alt="Venu gopal"
                    className="w-48 h-48 rounded-full border-2 border-[#286F6B] mb-6 md:mb-0 object-cover"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.7 }}
                />

                {/* Text Content */}
                <div className="md:ml-8 text-center md:text-left">
                    <h2 className="text-4xl font-sans font-bold text-textPrimary">
                        Hey There, <br /> I'm <span className="text-accent">Full Stack Developer...</span>
                    </h2>
                    <p className="mt-2 font-rubik">
                        Having more than 2 years of experience in web development.
                    </p>
                    <p className="mt-4 font-bold">10 Years Experience</p>

                    {/* Button */}
                    <div className="mt-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2 text-white bg-[#286F6B] shadow-md rounded-full font-semibold transition duration-300 ease-in-out hover:bg-[#1F5A56] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#286F6B] focus:ring-opacity-50"
                        >
                            Hire Me
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="mt-10 md:mt-0 md:ml-10 flex flex-col items-center md:items-start w-full md:w-1/4">
                {/* <h3 className="text-xl font-semibold mb-4 text-textPrimary">Connect with Me</h3> */}
                <motion.div
                    className="flex flex-col space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Social Media Links */}
                    <a
                        href="https://www.linkedin.com/in/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow hover:shadow-lg transition duration-300 ease-in-out"
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                            alt="LinkedIn"
                            className="w-6 h-6"
                        />
                        <span className="text-[#286F6B] font-edu font-medium">LinkedIn</span>
                    </a>

                    <a
                        href="https://github.com/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow hover:shadow-lg transition duration-300 ease-in-out"
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                            alt="GitHub"
                            className="w-6 h-6"
                        />
                        <span className="text-[#286F6B] font-edu font-medium">GitHub</span>
                    </a>

                    <a
                        href="https://twitter.com/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow hover:shadow-lg transition duration-300 ease-in-out"
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                            alt="Twitter"
                            className="w-6 h-6"
                        />
                        <span className="text-[#286F6B] font-edu font-medium">Twitter</span>
                    </a>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Home;
