import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CiLocationArrow1, CiMail, CiHeadphones, CiGps } from "react-icons/ci";
import { motion } from "framer-motion";

// Define the type for an experience object
interface Experience {
    date: string;
    title: string;
    company_name: string;
    icon?: React.ReactNode;
    iconBg?: string; // Optional, background color for the icon
    points: string[]; // List of points describing the experience
}

// Define the type for props of the component
interface ExperienceCardProps {
    experience: Experience;
    theme?: "light" | "dark"; // Theme can be 'light' or 'dark'
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
    experience,
    theme = "light",
}) => {
    const isLightMode = theme === "light";

    return (
        <VerticalTimelineElement
            contentStyle={{
                background: isLightMode ? "#fff" : "#232631", // Updated to match the background color from the header
                color: isLightMode ? "#333" : "#fff",
            }}
            contentArrowStyle={{
                borderRight: `7px solid ${isLightMode ? "#F8F7F3" : "#232631"}`, // Arrow color adjusted to match background
            }}
            date={experience.date}
            iconStyle={{
                background: isLightMode ? "#FDC435" : experience.iconBg || "#232631", // Button color matches header color
            }}
            icon={
                experience.icon ? (
                    experience.icon
                ) : (
                    <CiLocationArrow1 />
                )}>
            <div>
                <h3
                    className={`${isLightMode ? "text-gray-800" : "text-white"
                        } text-[24px] font-noto font-[700]`}
                >
                    {experience.title}
                </h3>
                <p
                    className={`${isLightMode ? "text-gray-600" : "text-textPrimary"
                        } text-[16px] font-noto font-semibold`}
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className={`${isLightMode ? "text-gray-700" : "text-white-100"
                            } text-[14px] pl-1 tracking-wider font-noto`}
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};


const Experience = () => {

    const experiences = [
        {
            date: "Jan 2022 - Present",
            title: "Software Engineer",
            company_name: "Tech Solutions Ltd.",
            icon: <CiLocationArrow1 />,
            iconBg: "#FDC435", // Background color for the icon (can be customized)
            points: [
                "Developed and maintained web applications using React and Node.js.",
                "Collaborated with cross-functional teams to implement new features.",
                "Optimized application performance by refactoring code and improving algorithms.",
                "Led the migration of legacy systems to microservices architecture."
            ],
        },
        {
            date: "Sep 2019 - Dec 2021",
            title: "Frontend Developer",
            company_name: "Creative Tech Studios",
            icon: <CiGps />,
            iconBg: "#4CAF50", // Background color for the icon (can be customized)
            points: [
                "Designed responsive and user-friendly web interfaces using HTML, CSS, and JavaScript.",
                "Worked with product managers to ensure a seamless user experience.",
                "Implemented testing strategies to ensure high code quality.",
                "Contributed to the development of a major project that led to a 30% increase in user engagement."
            ]
        }
    ];

    return (
        <>
            <VerticalTimeline lineColor="green">
                {experiences.map((experience, index) => (
                    <ExperienceCard
                        key={`experience-${index}`}
                        experience={experience}
                    />
                ))}
            </VerticalTimeline>
        </>
    );
};
export default Experience;