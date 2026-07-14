"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronDown, FaBriefcase, FaGithub } from "react-icons/fa"

type WorkExperience = {
  id: number
  role: string
  company: string
  duration: string
  details: string[]
  link?: string
}

const workExperienceData: WorkExperience[] = [
  {
    id: 6,
    role: "MRedditSum: Multi-Stage Reddit Thread Summarization",
    company: "NLP, Transformers, T5, BART, LongT5, Multimodal Summarization",
    duration: "",
    link: "https://github.com/himani007/mredditsum-reproduction",
    details: [
      "Reproduced the MRedditSum paper's Cluster-based Multi-Stage (CMS) summarization pipeline on Reddit threads as my NLP final project.",
      "Tested whether image-caption information improves text summarization, running T5-base, BART-base, and LongT5 each with and without image captions.",
      "Found that the CMS pipeline improves summaries substantially, while image captions add a smaller gain."
    ]
  },
  {
    id: 7,
    role: "Signaling the Dog: How Profile Content Accelerates Technology-Mediated Dog Rehoming",
    company: "Research, NLP, Qualitative Analysis (MaxQDA), Python, Animal-Computer Interaction",
    duration: "",
    details: [
      "Studied how the content of online adoption profiles shapes and accelerates technology-mediated dog rehoming.",
      "Analyzed large datasets of adoption records with NLP and qualitative coding (MaxQDA) to find which profile signals drive faster adoption.",
      "Produced an ACM-format research paper on the findings (also featured in the Research section)."
    ]
  },
  {
    id: 1,
    role: "RAG - based Conversational AI Chatbot",
    company: "Python, LangChain, Vector Database",
    duration: "",
    details: [
      "Engineered a Retrieval-Augmented Generation (RAG) system to build a chatbot that delivers context-aware responses by ingesting, chunking, and vectorizing external knowledge bases of medical tender data from government.",
      "Implemented pipeline for semantic search and real-time knowledge retrieval.",
      "Fine-Tuned BERT to improve semantic similarity and enhance knowledge retrieval."
    ]
  },
  {
    id: 2,
    role: "IndyGo Ridership Insights Dashboard",
    company: "Power BI, Data Analytics",
    duration: "",
    details: [
      "Developed an interactive Power BI dashboard analyzing 2022–2024 IndyGo ridership data (25.9M boardings over 12 months), identifying 1.1% boarding growth and high-traffic routes with over 2M monthly passengers.",
      "Applied ETL and statistical analysis with fact/dimension tables to provide stop-level insights and support strategic transit improvements.",
      "Integrated on-time performance metrics (79.4% average OTP) to enhance open data platform scalability and public engagement."
    ]
  },
  {
    id: 3,
    role: "Dog Emotion Recognition with Vision Transformers and Grad-CAM",
    company: "Computer Vision, Vision Transformers (ViT), YOLO, Data Annotation, Data Augmentation, Semi-supervised Learning, Image Classification",
    duration: "",
    details: [
      "Developed an end-to-end computer vision system to classify dog emotions from image and video data using a Vision Transformer (ViT) architecture",
       "Implemented a data annotation strategy to address a lack of labeled data, first training a ViT on a small, annotated dataset and then using a trained YOLO model to generate new annotations on a large, unannotated dataset",
       "Mitigated data noise and handled missing values, achieving an improved classification accuracy of 70%.",
       "Employed Grad-CAM for model interpretability, visualizing attention maps to understand model focus areas during emotion classification."
    ]
  },
  {
    id: 4,
    role: "Time Series Analysis & Visualization of Indian Stock Market Data",
    company: "Python, Pandas, Matplotlib, Scikit-learn, Data Analytics, Visualisation",
    duration: "",
    details: [
      "Conducted exploratory data analysis (EDA) on Indian stock data (Apr–Sep 2020) using Pandas, identifying volatility patterns and trends.",
      "Implemented time series forecasting (moving averages, exponential smoothing, ARIMA) with Scikit-learn to generate Buy/Sell signals for trading optimization.",
      "Developed interactive Matplotlib/Seaborn visualizations and dashboards highlighting correlations, anomalies, and metrics for risk assessment and portfolio management."
    ]
  },
  {
    id: 5,
    role: "Facial Expression Recognition using Deep Learning: CNNs and Transfer Learning",
    company: "Python, Pandas, Matplotlib, Scikit-learn, Data Analytics, Visualisation",
    duration: "",
    details: [
      "Processed and normalized the fer2013 dataset (35,887 training images, 7 classes). Implemented a data augmentation pipeline (random rotations, horizontal flips, zooms) to improve model generalization and mitigate overfitting.",
      "Architected and trained a Convolutional Neural Network (CNN) from scratch using PyTorch, achieving 75% accuracy on the validation set.",
      "Leveraged transfer learning with a fine-tuned ResNet architecture, achieving 68% accuracy on unseen test data."
    ]
  }
]

export function ProjectSection() {
  const [expanded, setExpanded] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpanded(prev => (prev === id ? null : id))
  }

  return (
    <section id="project" className="bg-gray-100 py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Projects</h2>
          <p className="text-gray-600 text-lg"></p>
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
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-blue-600 hover:underline"
                      >
                        <FaGithub className="h-4 w-4" />
                        View on GitHub
                      </a>
                    )}
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