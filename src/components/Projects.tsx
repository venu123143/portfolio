import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import profile2 from "../assets/profile2.png";

const CarouselCard: React.FC = () => {
    const carouselData = [
        {
            heading: "Project Heading 1",
            description: `Ensure that the parent container has a defined height (h-[80%] or similar) to make the overflow-y-auto effective. 
            The sticky property requires a parent container with overflow: auto or overflow: hidden for it to work as expected. In this case, the parent card already supports it.
This approach ensures the content scrolls independently while keeping the "View Case Study" button always visible at the bottom of the right side.
            Content Scrollable Section:

Added flex-grow and overflow-y-auto to the parent container of the heading, description, and client. This allows the content to scroll within its parent while keeping the overall layout intact.
            `,
            client: "Google",
        },
        {
            heading: "Project Heading 2",
            description:
                "An innovative product that transforms how users interact with digital platforms for productivity.",
            client: "Microsoft",
        },
        {
            heading: "Project Heading 3",
            description:
                "Bringing modern solutions to e-commerce with scalable designs and intuitive interfaces.",
            client: "Amazon",
        },
    ];

    // Custom Previous Button
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

    // Custom Next Button
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

    return (
        <div className="w-full bg-[#F8F7F3]  flex justify-center items-center py-10 font-inter">
            <div className="w-11/12 shadow-retro rounded-lg">
                <Slider {...settings}>
                    {carouselData.map((item, index) => (
                        <Card
                            key={index}
                            heading={item.heading}
                            description={item.description}
                            client={item.client}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};




interface CardProps {
    heading: string;
    description: string;
    client: string;
}

const Card: React.FC<CardProps> = ({ heading, description, client }) => {
    return (
        <motion.div
            className="relative rounded-lg h-screen bg-white shadow-lg hover:shadow-2xl overflow-hidden transform transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col md:flex-row h-full">
                {/* Left Side: Image */}
                <div
                    className="w-full md:w-2/5 flex-shrink-0"
                >
                    <img
                        src={profile2}
                        alt="Project Image"
                        className="object-cover h-64 w-full md:h-full"
                    />
                </div>

                {/* Right Side: Content */}
                <div className="">
                    {/* Content Section with Scroll */}
                    <div className="p-3 h-[90%] overflow-y-auto no-scrollbar">
                        <h2 className="text-xl font-bold text-gray-800 mb-3 font-rubik">
                            {heading}
                        </h2>
                        <p className="text-gray-600 mb-4 font-rubik text-justify">{description}</p>
                        <p className="text-gray-500 text-sm mb-6">
                            <span className="font-bold text-gray-700">Client:</span> {client}
                        </p>
                    </div>
                    {/* Fixed Button */}
                    <motion.div
                        className="self-start ml-5 w-fit bg-gray-900 text-white px-6 py-3 rounded-lg cursor-pointer font-ubuntu hover:bg-gray-700"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View Case Study
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};



export default CarouselCard;
