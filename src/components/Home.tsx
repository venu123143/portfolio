import React from "react";
import { motion } from "framer-motion";
// import myImage from "../assets/1.jpg";
import bgImage from "../assets/Passport.jpg";

const Home: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#F8F7F3] min-h-screen shadow-card rounded-xl p-8"
        >
            <div className="flex flex-col md:flex-row items-center">
                {/* Profile Image */}
                <motion.img
                    src={bgImage}
                    alt="Venu gopal"
                    className="w-36 h-36 rounded-full border-2 border-[#286F6B] mb-6 md:mb-0 object-cover"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                />
                
                {/* Text Content */}
                <div className="md:ml-8 text-center md:text-left">
                    <h2 className="text-3xl font-sans font-bold text-textPrimary">
                        Hey There, <br /> I'm <span className="text-accent">Your Name</span>
                    </h2>
                    <p className="mt-2 text-textSecondary">
                        I design beautifully simple things, and I love what I do.
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
        </motion.div>
    );
};

export default Home;
