import React from 'react';
import { motion } from 'framer-motion';
import { FaNode, FaReact } from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiSocketdotio, SiMysql, SiWebrtc,
  SiPostgresql, SiTypescript, SiLinux, SiDocker, SiSequelize
} from 'react-icons/si';

interface ISkills {
  title: string;
  icon: React.ReactNode;
  color: string;
}

const Skills: ISkills[] = [
  {
    title: 'Node.js',
    icon: <FaNode size={24} />,
    color: 'bg-green-500',
  },
  {
    title: 'Express.js',
    icon: <SiExpress size={24} />,
    color: 'bg-green-500',
  },
  {
    title: 'React.js',
    icon: <FaReact size={24} />,
    color: 'bg-blue-500',
  },
  {
    title: 'TypeScript',
    icon: <SiTypescript size={24} />,
    color: 'bg-yellow-400',
  },
  {
    title: 'MongoDB',
    icon: <SiMongodb size={24} />,
    color: 'bg-purple-500',
  },
  {
    title: 'MySQL',
    icon: <SiMysql size={24} />,
    color: 'bg-red-500',
  },
  {
    title: 'PostgreSQL',
    icon: <SiPostgresql size={24} />,
    color: 'bg-indigo-600',
  },
  {
    title: 'Sequelize',
    icon: <SiSequelize size={24} />,
    color: 'bg-slate-500',
  },
  {
    title: 'Sockets',
    icon: <SiSocketdotio size={24} />,
    color: 'bg-green-600',
  },
  {
    title: 'WebRTC',
    icon: <SiWebrtc size={24} />,
    color: 'bg-red-600',
  },
  {
    title: 'Linux',
    icon: <SiLinux size={24} />,
    color: 'bg-[#1a30f1]',
  },
  {
    title: 'Docker',
    icon: <SiDocker size={24} />,
    color: 'bg-[#1a30f1]',
  },
];

const SkillCard = ({ title, icon, color }: ISkills) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundColor: 'var(--card-bg)',
        color: 'var(--text-primary)',
      }}
      className=" relative dark:shadow-white/40 dark:text-white rounded-lg shadow-lg p-4 flex flex-col items-center"
    >
      <div
        className={`absolute top-0 bottom-0 left-0 w-2 rounded-l-lg ${color}`}
      ></div>
      <div className="bg-gray-100 dark:text-black rounded-full p-3 mb-2">{icon}</div>
      <h3 className="text-sm font-rubik font-bold text-center">{title}</h3>
    </motion.div>
  );
};

const SkillsComponent = () => {
  return (
    <div id="skills" style={{
      backgroundColor: 'var(--background-color)',
    }} className=" py-16">
      <h2 className="page_title" style={{ color: "var(--text-primary)" }}>My Skills</h2>
      <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {Skills.map((item, index) => (
          <SkillCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SkillsComponent;
