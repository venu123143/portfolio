import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CiLocationArrow1, CiGps } from "react-icons/ci";
import { useTheme } from "../contexts/ThemeContext";

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
                        } text-[24px] font-rubik font-[700]`}
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

            <ul className="mt-5 list-disc text-justify ml-5 space-y-2">
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
    const { state } = useTheme();

    const experiences = [
        {
            date: "Jul 2023 - Present",
            title: "Associate Software Engineer",
            company_name: "Ahex Technologies.",
            icon: <CiLocationArrow1 />,
            iconBg: "#FDC435",
            points: [
                "Expertise in Node.js and React.js. Worked with REST APIs, GraphQL , Sockets etc.",
                "Optimized application performance by refactoring code and improving algorithms.",
                "Worked with multiple databases like MySql, Postgres, Mongodb and Redis.",
                "Worked with Sequelize ORM in multiple projects.",
                "Used TypeScript in every project.",
            ],
        },
        {
            date: "Sep 2022 - Mar 2023",
            title: "Jspiders Training",
            company_name: "Jspiders (BTM layout) Bangalore",
            icon: <CiGps />,
            iconBg: "#4CAF50",
            points: [
                "Took comprehensive training in SQL, React.js, JavaScript, HTML, and CSS.",
                "Focused on mastering foundational and advanced concepts over 8 months.",
            ],
        },
    ];

    return (
        <>
            <VerticalTimeline lineColor="green">

                {experiences.map((experience, index) => (
                    <ExperienceCard
                        key={`experience-${index}`}
                        experience={experience}
                        theme={state.theme}

                    />
                ))}
            </VerticalTimeline>
        </>
    );
};
export default Experience;
