
import React, { useEffect, useRef, useState } from 'react';
import { FaDesktop, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';
import WaveHeader from '../ui/WaveHeader';
import ExperienceCard from '../ui/ExperienceUi';
interface ServiceCardProps {
  title: string;
  projectCount: number;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, projectCount, icon }) => {
  return (
    <div className="bg-white md:cursor-pointer hover:bg-[#FDC435] rounded-lg shadow-md w-64 p-6 transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-lg font-bold ml-4 font-ubuntu">{title}</h3>
      </div>
      <p className="text-gray-600 font-inter">{projectCount} Projects</p>
    </div>
  );
};



const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1 // Trigger when 10% of the component is visible
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={componentRef} id="experience"
      className="min-h-screen  bg-[#F8F7F3] relative overflow-hidden"
    >
      <ExperienceCard />
    </div>
  );
};

export default App;