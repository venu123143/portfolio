
import React, { useEffect, useRef, useState } from 'react';
import { FaDesktop, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';

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

const WaveHeader = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-64 overflow-hidden">
      <svg 
        viewBox="0 0 1440 320" 
        className="absolute top-0 left-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <path 
          fill="#FDC435" 
          fillOpacity="1" 
          d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,192C672,171,768,149,864,154.7C960,160,1056,192,1152,202.7C1248,213,1344,203,1392,197.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
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

  const services = [
    {
      title: 'Website Design',
      projectCount: 76,
      icon: <FaDesktop className="text-blue-500 text-3xl" />,
    },
    {
      title: 'Mobile App Design',
      projectCount: 65,
      icon: <FaMobileAlt className="text-green-500 text-3xl" />,
    },
    {
      title: 'Brand Identity',
      projectCount: 47,
      icon: <FaPaintBrush className="text-red-500 text-3xl" />,
    },
  ];

  return (
    <div 
      ref={componentRef} 
      className="min-h-screen relative overflow-hidden py-12"
    >
      <WaveHeader />
      <div 
        className={`container mx-auto flex flex-col md:flex-row justify-around items-center gap-10 
        transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      >
        <div 
          className={`space-y-6 w-full md:w-auto transition-all duration-1000 delay-300 
          ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              projectCount={service.projectCount}
              icon={service.icon}
            />
          ))}
        </div>
        <div 
          className={`p-8 bg-white rounded-2xl shadow-xl text-center max-w-md w-full 
          transition-all duration-1000 delay-500
          ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
        >
          <div className="relative mb-6">
            <div className="absolute -top-2 -left-2 w-16 h-16 bg-red-100 rounded-full"></div>
            <h2 className="text-4xl font-dancing text-gray-800 relative z-10 font-bold">
              Hey There, I'm Binjan
            </h2>
          </div>
          <p className="text-lg font-inter text-gray-600 mb-4 italic">
            10 Years of Design Experience
          </p>
          <p className="text-base font-noto text-gray-700 mb-6 leading-relaxed">
            I craft beautifully simple, elegant, and user-friendly digital products 
            that help businesses grow and shine in the digital landscape.
          </p>
          <a
            href="mailto:binjan@example.com"
            className="inline-block bg-gradient-to-r from-red-500 to-pink-600 
            hover:from-red-600 hover:to-pink-700 text-white 
            font-ubuntu font-semibold py-3 px-6 rounded-full 
            transition-all duration-300 ease-in-out 
            transform hover:-translate-y-1 hover:shadow-lg"
          >
            Say Hello ✨
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;