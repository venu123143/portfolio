
import React, { useRef } from 'react';
import ExperienceCard from '../ui/ExperienceUi';



const Experience: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //       }
  //     },
  //     {
  //       threshold: 0.1 // Trigger when 10% of the component is visible
  //     }
  //   );

  //   if (componentRef.current) {
  //     observer.observe(componentRef.current);
  //   }

  //   return () => {
  //     if (componentRef.current) {
  //       observer.unobserve(componentRef.current);
  //     }
  //   };
  // }, []);

  return (
    <div
      ref={componentRef} id="experience"
      className="min-h-screen  bg-[#F8F7F3] relative overflow-hidden"
    >
      <h2 className="page_title">Experience</h2>

      <ExperienceCard />
    </div>
  );
};

export default Experience;