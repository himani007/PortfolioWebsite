"use client"

import { motion } from "framer-motion"
import { FaFilePdf, FaDownload, FaArrowRight } from "react-icons/fa"

/**
 * HOW TO ADD YOUR RESEARCH PAPER
 * ------------------------------
 * Save your PDF into the public/ folder as:
 *   ~/Desktop/folio-motion/public/research-paper.pdf
 * Then edit the title / description below. (File name is case-sensitive.)
 */

const researchPaper = {
  title: "Signaling the Dog: How Profile Content Accelerates Technology-Mediated Dog Rehoming",
  description:
    "An ACM-format study of how the content of online adoption profiles shapes and speeds up technology-mediated dog rehoming.",
  pdf: "/research-paper.pdf",
}

export function ResearchSection() {
  return (
    <section
      id="research"
      className="bg-gradient-to-br from-background to-secondary/30 transition-colors duration-300 overflow-hidden py-24"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col items-center justify-center"
      >
        <div className="container mx-auto px-4 z-10">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-6 text-primary"
            >
              Research
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Work I have contributed to in research settings.
            </motion.p>
          </div>

          {/* Research paper card */}
          <motion.a
            href={researchPaper.pdf}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="group flex flex-col sm:flex-row items-start sm:items-center gap-5 max-w-3xl mx-auto rounded-2xl border border-border bg-card/60 p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white">
              <FaFilePdf className="h-7 w-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground">
                {researchPaper.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {researchPaper.description}
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background">
              <FaDownload className="h-4 w-4" />
              Read paper
              <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
