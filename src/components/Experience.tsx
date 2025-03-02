
import React, { useRef } from 'react';
import ExperienceCard from '../ui/ExperienceUi';



const Experience: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={componentRef} id="experience"
      className=" bg-[#F8F7F3] relative overflow-hidden">
      <h2 className="page_title">Experience</h2>

      <ExperienceCard />
    </div>
  );
};

export default Experience;