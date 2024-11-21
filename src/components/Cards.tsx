import React from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaUserCog, FaUserTie } from 'react-icons/fa';

interface PortfolioItem {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
}

const portfolioData: PortfolioItem[] = [
  {
    title: 'Visual Designer',
    subtitle: 'A visual designer designs for a variety of platforms, which may include internet and internet sites, games, movies.',
    icon: <FaUserGraduate size={24} />,
    color: 'bg-yellow-500',
  },
  {
    title: 'UI/UX Designer',
    subtitle: 'User interface design is about engineering the design of user interfaces for software and devices such as mobile.',
    icon: <FaUserCog size={24} />,
    color: 'bg-green-500',

  },
  {
    title: 'Sr. Product Designer',
    subtitle: 'Prod Product Photography Canada. Large Selection. Always Sale. Prices, Full Offer. Save Online.',
    icon: <FaUserTie size={24} />,
    color: 'bg-blue-500',
  },
  {
    title: 'Graphic Designer',
    subtitle: 'Responsible for creating visual concepts, by hand or using computer software, to communicate ideas that inspire, inform, and captivate consumers.',
    icon: <FaUserGraduate size={24} />,
    color: 'bg-blue-500',

  },
  {
    title: 'UX Researcher',
    subtitle: 'Conduct user research to understand user needs, behaviors, and pain points, and use that information to inform the design process.',
    icon: <FaUserCog size={24} />,
    color: 'bg-purple-500',

  },
  {
    title: 'Art Director',
    subtitle: 'Oversee the creative direction and visual style of a project, ensuring that the overall aesthetic is cohesive and on-brand.',
    icon: <FaUserTie size={24} />,
    color: 'bg-red-500',
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
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{subtitle}</p>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <div className="bg-[#F8F7F3] py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {portfolioData.map((item, index) => (
          <PortfolioItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;