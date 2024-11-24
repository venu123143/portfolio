import React from 'react';
import { motion } from 'framer-motion';
import { FaNode, FaReact, FaCubes } from 'react-icons/fa';
import { SiMongodb, SiSocketdotio, SiMysql, SiWebrtc, SiPostgresql, SiTypescript } from 'react-icons/si';
interface PortfolioItem {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
}

const portfolioData: PortfolioItem[] = [
  {
    title: 'Node.js Developer',
    subtitle: 'Expert in building scalable backend solutions using Node.js with RESTful APIs, WebSocket, and Express.',
    icon: <FaNode size={30} />,
    color: 'bg-green-500',
  },
  {
    title: 'React.js Developer',
    subtitle: 'Specialized in creating dynamic, responsive web applications with React.js and hooks, ensuring optimal user experience.',
    icon: <FaReact size={30} />,
    color: 'bg-blue-500',
  },
  {
    title: 'TypeScript Enthusiast',
    subtitle: 'Proficient in using TypeScript to build robust, type-safe applications, improving maintainability and reducing runtime errors.',
    icon: <SiTypescript size={30} />,
    color: 'bg-yellow-400',
  },
  {
    title: 'MongoDB Specialist',
    subtitle: 'Experienced in designing and managing NoSQL databases, optimizing queries, and scaling applications with MongoDB.',
    icon: <SiMongodb size={30} />,
    color: 'bg-black',
  },
  {
    title: 'MySQL Developer',
    subtitle: 'Expert in relational database management, schema design, and query optimization using MySQL.',
    icon: <SiMysql size={30} />,
    color: 'bg-red-500',
  },
  {
    title: 'PostgreSQL Developer',
    subtitle: 'Proficient in building and managing advanced database systems with PostgreSQL, including complex query writing and performance tuning.',
    icon: <SiPostgresql size={30} />,
    color: 'bg-indigo-600',
  },
  {
    title: 'Sequilize Expert',
    subtitle: 'Skilled in designing and implementing distributed systems with Node.js, Docker, and Kubernetes for high scalability.',
    icon: <FaCubes size={30} />,
    color: 'bg-slate-500',
  },
  {
    title: 'Sockets Specialist',
    subtitle: 'Skilled in designing and implementing distributed systems with Node.js, Docker, and Kubernetes for high scalability.',
    icon: <SiSocketdotio size={30} />,
    color: 'bg-green-600',
  },
  {
    title: 'WebRtc Expert',
    subtitle: 'Skilled in designing and implementing distributed systems with Node.js, Docker, and Kubernetes for high scalability.',
    icon: <SiWebrtc size={30} />,
    color: 'bg-red-600',
  },
];

const PortfolioItem = ({ title, subtitle, icon, color }: PortfolioItem) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white relative rounded-lg shadow-lg p-6 flex flex-col items-center"
    >
      <div
        className={`absolute top-0 bottom-0 left-0 w-2 rounded-l-lg ${color}`}
      ></div>
      <div className="bg-gray-100 rounded-full p-4 mb-4">{icon}</div>
      <h3 className="text-xl font-rubik font-bold mb-2">{title}</h3>
      <p className="text-black/60 font-ubuntu text-center">{subtitle}</p>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <div id="skills" className="bg-[#F8F7F3] py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {portfolioData.map((item, index) => (
          <PortfolioItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;