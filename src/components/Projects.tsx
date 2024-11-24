import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClipLoader from "react-spinners/ClipLoader"; // Install: npm install react-spinners

import whatsapp from "../assets/whatsapp.png";
import amazon from "../assets/amazon.png";

const CarouselCard: React.FC = () => {
    const [loading, setLoading] = useState(true);

    const carouselData = [
        {
            heading: "Title: WhatsApp Clone - Real-Time Messaging App with Modern Features",
            description: `This WhatsApp Clone is a feature-rich messaging application designed with 
            a modern technology stack. It mirrors WhatsApp's core functionalities, offering secure user
            authentication, real-time chat, and media-sharing capabilities. With both one-on-one and
            group video call functionality powered by WebRTC, it delivers a seamless communication 
            experience. The app's design is responsive and user-friendly, utilizing Tailwind CSS for
            styling and React for dynamic front-end interaction.`,
            link: "https://github.com/venu123143/whatsapp/",
            image: whatsapp,
        },
        {
            heading: "Title: Amazon Clone - Your Ultimate E-Commerce Platform",
            description: `This Amazon Clone is a full-stack e-commerce platform that replicates 
            Amazon's core functionalities. Designed with React, Vite, and TypeScript, this e-commerce 
            platform offers a seamless online shopping experience.`,
            link: "https://github.com/venu123143/amazon_front",
            image: amazon,
        },
    ];

    const PrevArrow = (props: any) => {
        const { onClick } = props;
        return (
            <div
                className="absolute top-1/2 left-0 z-10 transform rounded-full p-1 -translate-y-1/2 text-slate-800 hover:text-black cursor-pointer"
                onClick={onClick}
            >
                <FaArrowLeft size={30} />
            </div>
        );
    };

    const NextArrow = (props: any) => {
        const { onClick } = props;
        return (
            <div
                className="absolute top-1/2 right-0 z-10 p-1 transform -translate-y-1/2 text-gray-700 hover:text-black cursor-pointer"
                onClick={onClick}
            >
                <FaArrowRight size={30} />
            </div>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    // Simulate loading completion after assets are "loaded"
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500); // Simulate loading time
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full bg-[#F8F7F3] flex justify-center items-center py-10 font-inter">
            {loading ? (
                <div className="flex items-center justify-center h-screen">
                    <ClipLoader size={50} color="#4A90E2" />
                </div>
            ) : (
                <div className="w-11/12 shadow-retro rounded-lg">
                    <Slider {...settings}>
                        {carouselData.map((item, index) => (
                            <Card
                                key={index}
                                heading={item.heading}
                                description={item.description}
                                link={item.link}
                                image={item.image}
                            />
                        ))}
                    </Slider>
                </div>
            )}
        </div>
    );
};

interface CardProps {
    heading: string;
    description: string;
    link: string;
    image: any | null;
}

const Card: React.FC<CardProps> = ({ heading, description, link, image }) => {
    return (
        <motion.div id="projects"
            className="relative rounded-lg h-screen bg-[#F8F7F3] shadow-lg hover:shadow-2xl overflow-hidden transform transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col md:flex-row h-full">
                {/* Left Side: Image */}
                <div className=" md:w-2/5 flex-shrink-0 flex justify-center items-center">
                    <img
                        src={image}
                        alt="Project Image"
                        className="h-full rounded-md object-cover"
                    />
                </div>

                {/* Right Side: Content */}
                <div className="">
                    <div className="p-3 h-[90%] overflow-y-auto no-scrollbar">
                        <h2 className="text-xl font-bold text-gray-800 mb-3 font-rubik">
                            {heading}
                        </h2>
                        <p className="text-black mb-4 font-rubik text-justify">
                            {description}
                        </p>
                    </div>
                    <motion.div
                        onClick={() => window.open(link, "_blank")}
                        className="self-start ml-5 w-fit space-x-3 flex items-center justify-center bg-gray-900 text-white px-6 py-3 rounded-lg cursor-pointer font-ubuntu hover:bg-gray-700"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaGithub size={25} className="inline" />
                        <span> GitHub Link</span>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default CarouselCard;
