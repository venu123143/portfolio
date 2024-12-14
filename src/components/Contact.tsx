import React, { useRef, useState, useEffect } from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import { Mail, Globe, MapPin, Phone, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
    const contactInfo = {
        email: "venugopalreddy9493@gmail.com",
        website: "www.nerchuko.in",
        twitter: "@venu_reddy_9493",
        linkedin: "linkedin.com/in/venu-reddy-a226881b6/",
        address: "Kavali, Andhra Pradesh, India",
        phone: "+91 80089 52100",
    };

    const contactOptions = [
        {
            icon: <Mail className="w-8 h-8" />,
            title: "Email",
            subtitle: "Send us an email",
            linkText: contactInfo.email,
            link: `mailto:${contactInfo.email}`,
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Website",
            subtitle: "Visit our website",
            linkText: contactInfo.website,
            link: `https://${contactInfo.website}`,
        },
        {
            icon: <FaXTwitter className="w-8 h-8" />,
            title: "Twitter",
            subtitle: "Follow us on Twitter",
            linkText: contactInfo.twitter,
            link: `https://twitter.com/${contactInfo.twitter.replace('@', '')}`,
        },
        {
            icon: <FaLinkedin className="w-8 h-8" />,
            title: "LinkedIn",
            subtitle: "Connect with us on LinkedIn",
            linkText: contactInfo.linkedin,
            link: `https://${contactInfo.linkedin}`,
        },
        {
            icon: <MapPin className="w-8 h-8" />,
            title: "Address",
            subtitle: contactInfo.address,
        },
        {
            icon: <Phone className="w-8 h-8" />,
            title: "Phone",
            subtitle: "Give us a call",
            linkText: contactInfo.phone,
            link: `tel:${contactInfo.phone}`,
        },
    ];

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showRightArrow, setShowRightArrow] = useState(false);
    const [showLeftArrow, setShowLeftArrow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollContainerRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
                setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10); // Show right arrow if not fully scrolled
                setShowLeftArrow(scrollLeft > 10); // Show left arrow if scrolled past the start
            }
        };

        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            handleScroll(); // Initial check
        }

        return () => {
            container?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 600, // Adjust the scroll amount
                behavior: 'smooth',
            });
        }
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -600, // Adjust the scroll amount
                behavior: 'smooth',
            });
        }
    };

    return (
        <div id="contactme" className="bg-[#F8F7F3] p-8 w-full relative">
            <div className="">
                <div className="">
                    <h1 className="page_title">Contact Information</h1>
                    {/* <p className="text-gray-600">Here's how you can reach us.</p> */}
                </div>

                <div className="relative">
                    {showLeftArrow && (
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10"
                        >
                            <button
                                onClick={scrollLeft}
                                className="bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition duration-300"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                        </motion.div>
                    )}

                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto pb-6 gap-6 snap-x snap-mandatory no-scrollbar"
                    >
                        {contactOptions.map((option, index) => (
                            <div
                                key={index}
                                className="flex-none w-80 snap-center"
                            >
                                <div className="bg-white border border-gray-200 rounded-xl p-6 h-full hover:border-gray-300 transition-all duration-300">
                                    <div className="p-3 bg-gray-50 rounded-full w-fit mb-6">
                                        {option.icon}
                                    </div>

                                    <h3 className="text-lg font-semibold mb-2">
                                        {option.title}
                                    </h3>

                                    <p className="text-gray-600 mb-4">
                                        {option.subtitle}
                                    </p>

                                    {option.link && (
                                        <a
                                            href={option.link}
                                            target={option.link.startsWith('http') ? '_blank' : undefined}
                                            rel={option.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className="text-gray-900 font-medium hover:text-blue-600 transition-colors duration-300"
                                        >
                                            {option.linkText}
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {showRightArrow && (
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10"
                        >
                            <button
                                onClick={scrollRight}
                                className="bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition duration-300"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
