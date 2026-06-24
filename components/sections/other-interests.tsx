"use client"

import { motion } from "framer-motion"
import { FaFilePdf, FaDownload, FaArrowRight } from "react-icons/fa"

/**
 * HOW TO ADD YOUR FILES
 * ---------------------
 * Drop your files into the `public/` folder (~/Desktop/folio-motion/public/):
 *   - Research paper PDF  ->  save it as  public/research-paper.pdf
 *   - Images             ->  save them as public/interest-1.jpg, interest-2.jpg, interest-3.jpg
 * Then just edit the titles / captions below. (File names are case-sensitive.)
 */

const researchPaper = {
  title: "My Research Paper",
  description:
    "A research paper I worked on. Click through to read the full PDF.",
  pdf: "/research-paper.pdf",
}

const galleryImages = [
  { src: "/interest-1.jpg", caption: "Add a caption" },
  { src: "/interest-2.jpg", caption: "Add a caption" },
  { src: "/interest-3.jpg", caption: "Add a caption" },
]

export function OtherInterestsSection() {
  return (
    <section
      id="other-interests"
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
              className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            >
              Other Interests
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Beyond data and code, here is some of what I get up to.
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
            className="group mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-5 max-w-3xl mx-auto rounded-2xl border border-border bg-card/60 p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
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

          {/* Image gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {galleryImages.map((img, index) => (
              <motion.div
                key={img.src}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted shadow-md"
              >
                {/* Placeholder shown until the image file exists */}
                <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
                  {img.src}
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.caption}
                  className="relative h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                  }}
                />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {img.caption}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
