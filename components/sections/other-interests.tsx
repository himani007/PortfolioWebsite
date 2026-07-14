"use client"

import { motion } from "framer-motion"

/**
 * HOW TO ADD YOUR IMAGES
 * ----------------------
 * Save your images into the public/ folder (~/Desktop/folio-motion/public/) as:
 *   public/interest-1.jpg, public/interest-2.jpg, public/interest-3.jpg
 * Then edit the captions below. (File names are case-sensitive.)
 */

const galleryImages = [
  { src: "/interest-1.jpg", caption: "" },
  { src: "/interest-2.jpg", caption: "" },
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
              className="text-5xl font-bold mb-6 text-primary"
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

          {/* Image gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
