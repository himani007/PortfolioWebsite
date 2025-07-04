"use client"

import { FaPython, FaDatabase, FaHtml5 } from "react-icons/fa";

const skills = [
  { name: "Python", icon: <FaPython className="w-8 h-8 text-blue-600" /> },
  { name: "Machine Learning", icon: <img src="/coding.png" alt="Machine Learning" className="w-8 h-8" /> },
  { name: "Deep Learning", icon: <img src="/deep-learning.png" alt="Deep Learning" className="w-8 h-8" /> },
  { name: "Data Visualisation", icon: <img src="/data-visualization.png" alt="Data Visualisation" className="w-8 h-8" /> },
  { name: "Data Cleansing", icon: <img src="/data-management.png" alt="Data Cleansing" className="w-8 h-8" /> },
  { name: "MySQL", icon: <FaDatabase className="w-8 h-8 text-blue-600" /> },
  { name: "Computer Vision", icon: <img src="/computer.png" alt="Computer Vision" className="w-8 h-8" /> },
  { name: "Data Analysis", icon: <img src="/analysis.png" alt="Data Analysis" className="w-8 h-8" /> },
  { name: "HTML,CSS,Next.js", icon: <img src="/domain.png" alt="HTML,CSS,NextJs" className="w-8 h-8" /> },
  { name: "Power BI", icon: <img src="/monitor.png" alt="Power BI" className="w-8 h-8" /> }
];

export function SkillSection() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">Skills</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">My technical expertise</p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="relative overflow-hidden rounded-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-transform transition-shadow duration-300"
              style={{
                background: `linear-gradient(135deg, hsl(${(index * 50) % 360}, 70%, 50%), hsl(${((index * 50 + 180) % 360)}, 70%, 50%))`,
              }}
            >
              <div className="absolute inset-0 bg-white/10" />
              <div className="relative z-10 p-4 flex flex-col items-center">
                {skill.icon}
                <span className="text-white text-sm font-semibold mt-2 text-center">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}