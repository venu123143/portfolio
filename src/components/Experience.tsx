
import React from 'react';
import ExperienceCard from '../ui/ExperienceUi';



const Experience: React.FC = () => {
  return (
    <div
      id="experience"
      style={{
        backgroundColor: 'var(--background-color)',
      }}
      className=" relative overflow-hidden"
    >
      <h2 className="page_title" style={{ color: "var(--text-primary)" }}>Experience</h2>
      <ExperienceCard />
    </div>
  );
};

export default Experience;