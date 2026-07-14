"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronDown, FaBriefcase } from "react-icons/fa"

type WorkExperience = {
  id: number
  role: string
  company: string
  duration: string
  details: string[]
}

const workExperienceData: WorkExperience[] = [
  {
    id: 6,
    role: "Research Assistant",
    company: "School of Education, Indiana University",
    duration: "April 2025 - Present",
    details: [
      "Benchmarking small language models (SLMs) augmented with retrieval-augmented generation (RAG) for Socratic-style K-12 math tutoring",
      "Building a reproducible evaluation benchmark and a working tutor prototype for school LMS integration",
      "Focusing on on-device, low-resource-friendly models to widen access to quality tutoring"
    ]
  },
  {
    id: 1,
    role: "Research Assistant",
    company: "Indiana University Bloomington",
    duration: "Aug 2025 – April 2026",
    details: [
      "Conducted research in Animal-Computer Interaction with Deep Learning, MaxQDA, and Python",
      "Analyzed and prepared large datasets of animal adoption records using data analysis techniques",
      "Collaborated with faculty and peers to publish research findings in academic journals and conferences",
      "Built machine learning models to predict animal behavior and adoption likelihood using NLP techniques"
    ]
  },
  {
    id: 2,
    role: "Lead Data Science Instructor",
    company: "Jovian.ML",
    duration: "Jun 2022 – Aug 2023",
    details: [
      "Developed and documented a Python library for inculcating LLM in Python scripts using React hooks",
      "Led Data Science Bootcamp cohorts as Instructor and Manager",
      "Conducted 50+ live sessions on Python, Data Analysis, and Deep Learning",
      "Revamped and created curriculums for the Data Science Bootcamp and technical content for social media",
      "Created 50+ tutorials and short videos on YouTube on Python and Data Science (with 54K+ views)"
    ]
  },
  {
    id: 3,
    role: "Associate Engineer Intern",
    company: "Symphony Tallent",
    duration: "April 2022 – June 2022",
    details: [
      "Set up Customer Relationship Management Database using MySQL",
      "Implemented a CRM to ensure its effective utilization",
      "Used WordPress to create websites(Job Portal) to ease user experience"
    ]
  },
  {
    id: 4,
    role: "Assistant Instructor for Data Science Bootcamp",
    company: "Jovian.ML",
    duration: "Feb 2021 - Dec 2021",
    details: [
      "Resolved 1000+ queries based on Python, Data Analysis, and Deep Learning via 1:1 calls and forum threads",
      "Evaluated and remarked on 1000+ course-based assignments and projects",
      "Created repository and solution notebooks (knowledge base) for Data Science and Machine Learning Projects and course work"
    ]
  },
  {
    id: 5,
    role: "Campaign Manager : Social Media and Marketing",
    company: "SCREAM (Non-Profit Organization)",
    duration: "Feb 2021 - Dec 2021",
    details: [
      "Managed end-to-end digital marketing campaigns, guiding creative teams and writing compelling copy for social feeds and donor outreach.",
      "Spearheaded social media strategy across all platforms, implementing performance analytics to track key metrics and increase audience engagement",
      "Analyzed content performance data to derive actionable insights, optimizing strategies to boost visibility and support fundraising objectives."
    ]
  }
]

export function WorkExSection() {
  const [expanded, setExpanded] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpanded(prev => (prev === id ? null : id))
  }

  return (
    <section id="work-experience" className="bg-gray-100 py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Work Experience</h2>
          <p className="text-gray-600 text-lg">My professional journey and contributions</p>
        </div>

        <div className="space-y-6">
          {workExperienceData.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-xl shadow-md p-6 transition hover:shadow-lg"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleExpand(exp.id)}
              >
                <div className="flex items-start gap-4">
                  <FaBriefcase className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                    <p className="text-gray-500 text-sm mt-1">{exp.duration}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expanded === exp.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="text-gray-500" />
                </motion.div>
              </div>

              <AnimatePresence>
                {expanded === exp.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden mt-4"
                  >
                    <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                      {exp.details.map((point, idx) => (
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