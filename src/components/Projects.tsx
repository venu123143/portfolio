import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClipLoader from "react-spinners/ClipLoader"; // Install: npm install react-spinners
import { Link } from "react-router-dom";
import whatsapp from "../assets/whatsapp.png";
import amazon from "../assets/amazon.png";
import thapala from "../assets/thapala.png";
import taso from "../assets/taso.png";
import { LuExternalLink } from "react-icons/lu";


const CarouselCard: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const updateIsMobile = () => setIsMobile(window.innerWidth < 640);
        updateIsMobile(); // Set initial value
        window.addEventListener("resize", updateIsMobile);
        return () => window.removeEventListener("resize", updateIsMobile);
    }, []);
    const carouselData = [
        {
            heading: "Title: WhatsApp Clone - Real Time Messaging App with Modern Features",
            description: `This WhatsApp Clone is a feature-rich messaging application designed with 
            a modern technology stack. It mirrors WhatsApp's core functionalities, offering secure user
            authentication, real-time chat, and media-sharing capabilities.`,
            bulletPoints: [
                "Full-stack implementation with modern tech stack like React, Nodejs, Express, MongoDB.",
                "Secure user authentication using OTP.",
                "Real-time chat functionality with Sockets using socket.io.",
                "One-on-one video calls with WebRTC.",
                "Responsive design using Tailwind CSS.",
                "Chat functionalities including user profile, group chats, individual chats, media sharing (photos, voice recordings), message replies, editing, and deletion.",
            ],
            link: "https://github.com/venu123143/whatsapp/",
            url: "https://whatsapp-mongo.onrender.com/",
            image: whatsapp,
            className: "h-full object-cover"
        },
        {
            heading: "Title: Amazon Clone - Your Ultimate E-Commerce Platform",
            description: `This Amazon Clone is a full-stack e-commerce platform that replicates 
            Amazon's core functionalities. Designed with React, Vite, and TypeScript, this e-commerce 
            platform offers a seamless online shopping experience.`,
            bulletPoints: [
                "Full-stack implementation with modern tech stack like React, Nodejs, Express, MongoDB.",
                "User-friendly UI with advanced filtering and sorting.",
                "User authentication with options for login, register, Google login, and OTP login.",
                "Secure payment integration.",
                "Add items to your shopping cart.",
                "Place and manage orders.",
                "Enjoy a responsive and user-friendly design.",
                "Switch between Dark Mode, Light Mode, or System Default.",
                "Search for products with an intuitive search functionality.",
                "Filter products based on various criteria for a personalized shopping experience.",
                "Ensure a responsive design that works seamlessly on all devices.",
                "Streamlined checkout process with Razorpay integration for secure payments.",
                "Engage with insightful blogs to stay updated on the latest trends and product information.",
            ],
            link: "https://github.com/venu123143/amazon_front",
            url: "https://amazon-clone-wtj7.onrender.com/",
            image: amazon,
            className: "h-full object-cover"
        },
        {
            heading: "Title: Thapala - Your Internal Email Communication Solution",
            description: `Thapala is a streamlined email application designed for internal communication. 
            It allows users to send, receive, and draft emails seamlessly within the application using a unique 
            10-digit tCode as the email address. Built on a robust Node.js backend with MySQL database support.`,
            bulletPoints: [
                "Robust backend powered by Node.js and MySQL for reliability and scalability.",
                "Used the sockets to send the email in real time.",
                "Implemented funcnality like Send, receive, Schedule and draft email securely.",
                "Save images and files in the secure vault for easy access and management.",
                "Create labels like Gmail to organize emails into categories such as study, office, and personal.",
                "Design and use templates to draft or send emails efficiently.",
                "Customizable user settings, including dark mode, light mode, and system default themes.",
                "Advanced search and filtering for finding specific emails quickly.",
                "Real-time notifications for new emails and updates.",
            ],
            link: "https://github.com/shivam-ahex/Thapala_backend/tree/development",
            url: "https://tapp.ahexlab.com/#/",
            image: thapala,
            className: "h-fit object-fit"
        },
        {
            heading: "Title: Taso - A Social Media Platform for Traders",
            description: `Taso is a robust and collaborative social media application designed specifically for traders. 
            It empowers users to connect, share, and learn within a thriving community of like-minded individuals. 
            With Taso, you can engage in meaningful discussions, create focused groups, and access valuable mentorship 
            programs tailored to your trading journey.`,
            bulletPoints: [
                "Individual Messaging: Connect with other traders directly through private one-on-one messages to exchange ideas and insights.",
                "Group Messaging: Join or create group chats for collective discussions, sharing updates, and brainstorming strategies.",
                "Clubs: Central hubs for sharing thoughts and ideas. Admins can post updates, share data, and communicate effectively with members.",
                "Linked Clubs: Unique feature allowing admins to create sub-clubs within a club for specialized discussions.",
                "Mentorship Programs: Integrated with clubs to enable experienced traders to guide others with videos, educational resources, and strategies.",
                "Interactive Sessions: Initiate one-on-one video calls or go live to engage followers and other users in real-time discussions.",
                "Advanced Notifications: Stay updated with real-time alerts for group activities, mentorship updates, and messages.",
                "Enhanced Search and Filters: Quickly find groups, messages, or posts tailored to your trading interests.",
                "User Customization: Personalize your experience with dark mode, light mode, and custom notification settings.",
                "Secure Communication: Built with privacy in mind, ensuring all chats and data are encrypted.",
            ],
            url: "https://tasosolutions.in",
            image: taso,
            className: "h-full object-cover"
        },
    ];

    const PrevArrow = (props: any) => {
        const { onClick } = props;
        return (
            <div
                style={{
                    color: "var(--text-primary)",
                }}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--accent-color)";
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                }}
                className="absolute top-1/2 left-0 z-10 transform rounded-full p-1 -translate-y-1/2 cursor-pointer"
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
                style={{
                    color: "var(--text-primary)",
                }}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--accent-color)";
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                }}
                className="absolute top-1/2 right-0 z-10 p-1 transform -translate-y-1/2 cursor-pointer"
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
        arrows: !isMobile,
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
        <div style={{ backgroundColor: "var(--background-color)" }} id="projects" className="w-full flex flex-col justify-center items-center font-inter">
            <h2 className="page_title" style={{ color: "var(--text-primary)" }}>My Projects</h2>
            {loading ? (
                <div className="flex items-center justify-center">
                    <ClipLoader size={50} color="#4A90E2" />
                </div>
            ) : (
                <div className="w-11/12 border-t-2 sm:border-l-2 shadow-retro rounded-lg">
                    <Slider {...settings}>
                        {carouselData.map((item, index) => (
                            <ProjectCard
                                key={index}
                                heading={item.heading}
                                description={item.description}
                                link={item.link}
                                image={item.image}
                                url={item.url}
                                bulletPoints={item.bulletPoints}
                                className={item.className}
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
    link?: string;
    image: any | null;
    url: string | null;
    bulletPoints?: string[];
    className: string;
}


const ProjectCard: React.FC<CardProps> = ({ heading, description, link, image, url, bulletPoints, className }) => {
    return (
        <motion.div
            style={{ backgroundColor: "var(--card-bg)" }}
            className={"relative sm:h-screen rounded-lg  shadow-lg hover:shadow-2xl overflow-hidden transform transition duration-300"}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} >
            <div className="flex flex-col md:flex-row md:h-full h-auto ">
                {/* Left Side: Image */}
                <div className="hidden md:flex md:w-2/5 flex-shrink-0 justify-center items-center">
                    <img
                        src={image}
                        alt="Project Image"
                        className={className}
                    />
                </div>

                {/* Right Side: Content */}
                <div className="p-3">
                    <div className="h-[90%] overflow-y-auto no-scrollbar">
                        <h2 style={{ color: "var(--accent-color)" }} className="text-xl font-bold mb-3 font-rubik">
                            {heading}
                        </h2>
                        <p style={{ color: "var(--text-primary)" }} className=" mb-4 font-rubik text-justify">
                            {description}
                        </p>
                        {bulletPoints && bulletPoints.length > 0 && (
                            <ul style={{ color: "var(--text-primary)" }} className="list-disc pl-6 mb-4 space-y-2 font-rubik">
                                {bulletPoints.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="flex">
                        {link && (
                            <Link
                                to={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="self-start ml-5 mt-auto w-fit space-x-4 flex items-center justify-center bg-gray-900 text-white px-6 py-3 rounded-lg cursor-pointer font-ubuntu hover:bg-zinc-950"
                            >
                                <FaGithub size={25} className="inline" />
                                <span> GitHub</span>
                            </Link>
                        )}
                        {url && (
                            <Link
                                to={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="self-start ml-5 mt-auto w-fit space-x-3 flex items-center justify-center bg-zinc-900 hover:bg-gray-900 text-white px-6 py-3 rounded-lg cursor-pointer font-ubuntu"
                            >
                                <LuExternalLink size={22} className="inline" />
                                <span>Url </span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CarouselCard;
