"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { FaChevronRight, FaChevronLeft, FaMedium } from 'react-icons/fa'
import { Card } from "@/components/ui/card"

type Blog = {
  id: number;
  title: string;
  description: string;
  image: string;
  color: string;
  textColor: string;
  mediumUrl: string;
};

// Newest first. Medium resolves each post by the trailing id, so the links
// are stable even if the slug text changes.
const blogs: Blog[] = [
  {
    id: 1,
    title: "PS: I Graduated",
    description: "Reflections on finishing my Master's: the highs, the lessons, and what two life-changing years taught me.",
    image: "/blog-ps-graduated.png",
    color: "from-amber-500 to-pink-600",
    textColor: "text-amber-100",
    mediumUrl: "https://himani-gulati.medium.com/ps-i-graduated-751c93b80e0c"
  },
  {
    id: 2,
    title: "LLMs vs AI Agents",
    description: "What actually separates a large language model from an AI agent, explained simply.",
    image: "https://cdn-images-1.medium.com/max/700/1*4Y1frGZ7EQX7qG9DjpnTqw.png",
    color: "from-blue-500 to-purple-600",
    textColor: "text-blue-100",
    mediumUrl: "https://himani-gulati.medium.com/llms-vs-ai-agents-043c7958e99e"
  },
  {
    id: 3,
    title: "Let's Start Using HuggingFace 🤗",
    description: "A beginner-friendly walkthrough to start building with the HuggingFace ecosystem.",
    image: "https://cdn-images-1.medium.com/max/700/1*aZWqHtE-bylRsp6KGTVJ2w.png",
    color: "from-green-500 to-yellow-500",
    textColor: "text-green-100",
    mediumUrl: "https://himani-gulati.medium.com/lets-start-using-huggingface-b5ee5eae2b5d"
  },
  {
    id: 4,
    title: "Hyper-parameter Tuning in Decision Trees and Random Forests",
    description: "A comprehensive guide to hyper-parameter tuning in Decision Trees and Random Forests.",
    image: "https://cdn-images-1.medium.com/max/700/0*mPPJrhuRtuovklbk",
    color: "from-red-500 to-pink-600",
    textColor: "text-red-100",
    mediumUrl: "https://himani-gulati.medium.com/hyper-parameter-tuning-in-decision-trees-and-random-forests-3bdee09ea5af"
  },
  {
    id: 5,
    title: "Understanding the Gaussian Filter",
    description: "Breaking down the BLURRRRR! A comprehensive guide to the Gaussian filter, and how it works.",
    image: "https://cdn-images-1.medium.com/max/700/1*yw8yzlLU_twCUfAKc-GEZw.png",
    color: "from-amber-500 to-orange-600",
    textColor: "text-amber-100",
    mediumUrl: "https://himani-gulati.medium.com/understanding-the-gaussian-filter-c2cb4fb4f16b"
  },
  {
    id: 6,
    title: "Introduction to Diffusion Models",
    description: "A theoretical understanding of Diffusion models for beginners.",
    image: "https://cdn-images-1.medium.com/max/700/1*ooyn3AkR7pm5JKlFZxpbdg.png",
    color: "from-cyan-500 to-blue-600",
    textColor: "text-cyan-100",
    mediumUrl: "https://himani-gulati.medium.com/introduction-to-diffusion-models-b9c8f2f534fa"
  },
  {
    id: 7,
    title: "Numpy's Random Module",
    description: "A practical tour of NumPy's random module and how to generate the data you need.",
    image: "https://cdn-images-1.medium.com/max/700/1*_oGev3NXV98tV6xGS8LHkw.png",
    color: "from-violet-500 to-indigo-600",
    textColor: "text-violet-100",
    mediumUrl: "https://himani-gulati.medium.com/numpys-random-module-8d3fde9bc582"
  },
  {
    id: 8,
    title: "Understanding Box Plots",
    description: "What box plots really show you about your data: quartiles, outliers and all.",
    image: "https://cdn-images-1.medium.com/max/700/0*WmRntgtzN5DEfzyA.png",
    color: "from-teal-500 to-emerald-600",
    textColor: "text-teal-100",
    mediumUrl: "https://himani-gulati.medium.com/understanding-box-plots-d161a3d3f7ec"
  },
  {
    id: 9,
    title: "Scraping Data Using Beautiful Soup and Python",
    description: "Collect data from the web step by step using Beautiful Soup and Python.",
    image: "https://cdn-images-1.medium.com/max/700/0*uTUKeCqG7sceQEdC",
    color: "from-rose-500 to-red-600",
    textColor: "text-rose-100",
    mediumUrl: "https://himani-gulati.medium.com/scraping-data-using-beautiful-soup-and-python-4170e7ec63fd"
  },
  {
    id: 10,
    title: "Time Series Analysis: Data Exploration and Visualization",
    description: "Exploring and visualizing time-series data before you start modelling it.",
    image: "/blog1.png",
    color: "from-fuchsia-500 to-purple-600",
    textColor: "text-fuchsia-100",
    mediumUrl: "https://himani-gulati.medium.com/time-series-analysis-data-exploration-and-visualization-9dbede5cbb8d"
  },
  {
    id: 11,
    title: "Facial Expression Recognition with PyTorch (4 Models)",
    description: "Building and comparing four PyTorch models to recognize facial expressions.",
    image: "/blog2_image.png",
    color: "from-sky-500 to-indigo-600",
    textColor: "text-sky-100",
    mediumUrl: "https://himani-gulati.medium.com/facial-expression-recognition-with-pytorch-using-4-differently-approached-models-ee5c35110193"
  },
  {
    id: 12,
    title: "Facial Expression Recognition (Part II)",
    description: "Part two: refining the facial expression models and digging into the results.",
    image: "/blog3_image.png",
    color: "from-lime-500 to-green-600",
    textColor: "text-lime-100",
    mediumUrl: "https://himani-gulati.medium.com/facial-expression-recognition-with-pytorch-with-4-differently-approached-models-part-ii-aa722ef91b23"
  }
];

const MEDIUM_PROFILE_URL = "https://himani-gulati.medium.com"

const SCROLL_AMOUNT = 380

export function BlogSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const delta = direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT
    scrollRef.current.scrollBy({ left: delta, behavior: "smooth" })
  }

  return (
    <section id="blogs" className="bg-gradient-to-br from-background to-secondary/30 transition-colors duration-300 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen flex flex-col items-center justify-center"
      >

        <div className="container mx-auto px-4 z-10">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-6 text-primary"
            >
              Blogs
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Informative Blogs
            </motion.p>
          </div>

          {/* Blogs Cards - horizontal scroll */}
          <div className="relative group/scroll">
            {/* Left arrow */}
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/40 backdrop-blur-sm border border-border/50 text-foreground/70 hover:bg-background/60 hover:text-foreground transition-all duration-200 shadow-md -translate-x-1"
            >
              <FaChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            {/* Right arrow */}
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/40 backdrop-blur-sm border border-border/50 text-foreground/70 hover:bg-background/60 hover:text-foreground transition-all duration-200 shadow-md translate-x-1"
            >
              <FaChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <motion.div
              ref={scrollRef}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="overflow-x-auto overflow-y-hidden pb-4 -mx-4 px-4 scroll-smooth scrollbar-thin"
              style={{ scrollbarGutter: "stable" }}
            >
            <div className="flex flex-nowrap gap-6 w-max min-w-full">
              {blogs.map((project, index) => (
                <motion.div
                  key={project.id}
                  className={`flex-shrink-0 w-[320px] sm:w-[360px] bg-gradient-to-br ${project.color} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                />
                <motion.h3
                  className={`text-2xl font-semibold mt-4 ${project.textColor}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className={`mt-2 ${project.textColor} opacity-90`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                >
                  {project.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  className="mt-4"
                >
                  <a
                    href={project.mediumUrl} // Make sure this URL exists in your project object
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center justify-center rounded-lg bg-white/20 px-4 py-2 text-lg font-medium hover:bg-white/30 ${project.textColor}`}
                  >
                    View Blog
                    <FaChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </motion.div>
              </motion.div>
            ))}
            </div>
            </motion.div>
          </div>

          {/* Link to full Medium profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-12 flex justify-center"
          >
            <a
              href={MEDIUM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-base font-semibold text-background shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <FaMedium className="h-5 w-5" />
              Read more on Medium
              <FaChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
