"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronDown, FaUniversity } from "react-icons/fa"

type Education = {
  id: number
  degree: string
  school: string
  duration: string
  details: string[]
}

const educationData: Education[] = [
  {
    id: 1,
    degree: "MS in Data Science",
    school: "Indiana University Bloomington",
    duration: "Aug 2024 – May 2026",
    details: [
      "Relevant Courses: Computer Vision, Applied Machine Learning, Statistics for Data Science, Cloud Computing, Applied DataBase Technologies",
      "Currently Working on research projects based on Animal-Computer Interaction",
      "GPA: 3.8 / 4.0"
    ]
  },
  {
    id: 2,
    degree: "Bachelor of Technology in Computer Science",
    school: "Guru Gobind Singh Indraprastha University",
    duration: "Aug 2018 – Jun 2022",
    details: [
      "Relevant Courses: Operating Systems, DBMS, Computer Networks, Web Development",
      "Final year project: Heart Disease Prediction using Machine Learning and Deep Learning",
      "Internship: Data Science Intern at Jovian.ML",
      "GPA: 8.6 / 10.0"
    ]
  }
]

export function EducationSection() {
  const [expanded, setExpanded] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpanded(prev => (prev === id ? null : id))
  }

  return (
    <section id="education" className="bg-gray-100 py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Education</h2>
          <p className="text-gray-600 text-lg">My academic background and specialization</p>
        </div>

        <div className="space-y-6">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="bg-white rounded-xl shadow-md p-6 transition hover:shadow-lg"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleExpand(edu.id)}
              >
                <div className="flex items-start gap-4">
                  <FaUniversity className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.school}</p>
                    <p className="text-gray-500 text-sm mt-1">{edu.duration}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expanded === edu.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="text-gray-500" />
                </motion.div>
              </div>

              <AnimatePresence>
                {expanded === edu.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden mt-4"
                  >
                    <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                      {edu.details.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}