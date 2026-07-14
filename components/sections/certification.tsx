"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaChevronRight } from 'react-icons/fa'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog"

type Certificate = {
  id: number
  title: string
  description: string
  image: string
  color: string
  textColor: string
  pdfUrl: string
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Deep Learning with Pytorch: Zero to GANs",
    description: "",
    image: "/certificate1.pdf",
    color: "from-yellow-400 to-orange-500",
    textColor: "text-white",
    pdfUrl: "https://jovian.com/certificate/MFQWCNBRGQ",
  },
  {
    id: 2,
    title: "Python (Hackerrank)",
    description: "",
    image: "/python_basic_certificate.pdf",
    color: "from-green-400 to-teal-600",
    textColor: "text-white",
    pdfUrl: "https://www.hackerrank.com/certificates/aa36c06e46e5?test_finished=true",
  },
  {
    id: 3,
    title: "Web Development with Flask",
    description: "",
    image: "/certificateWeb.pdf",
    color: "from-blue-500 to-indigo-600",
    textColor: "text-white",
    pdfUrl: "https://jovian.com/certificate/MFQTQNZWHE",
  },
]

export function CertificateSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)

  return (
    <section
      id="certificates"
      className="bg-gradient-to-br from-background to-secondary/30 transition-colors duration-300 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen flex flex-col items-center justify-center py-16"
      >
        <div className="container mx-auto px-4 z-10">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-6 text-primary"
            >
              Certificates
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Showcasing my certified skills
            </motion.p>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {certificates.map((cert, idx) => (
              <motion.div
                key={cert.id}
                className={`bg-gradient-to-br ${cert.color} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + idx * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-40 object-cover rounded-md mb-3 shadow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + idx * 0.1, duration: 0.5 }}
                />
                <motion.h3
                  className={`text-xl font-semibold mt-2 ${cert.textColor}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + idx * 0.1, duration: 0.5 }}
                >
                  {cert.title}
                </motion.h3>
                <motion.p
                  className={`mt-1 ${cert.textColor} opacity-90`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 + idx * 0.1, duration: 0.5 }}
                >
                  {cert.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 + idx * 0.1, duration: 0.5 }}
                  className="mt-4"
                >
                  <button
                    onClick={() => setSelectedCertificate(cert)}
                    className={`group inline-flex items-center justify-center rounded-lg bg-white/20 px-4 py-2 text-lg font-medium hover:bg-white/30 ${cert.textColor}`}
                  >
                    View Certificate
                    <FaChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
        <DialogContent className="max-w-4xl w-full p-4">
          {selectedCertificate && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedCertificate.title}</DialogTitle>
                <DialogDescription>{selectedCertificate.description}</DialogDescription>
              </DialogHeader>
              <div className="mt-4 w-full h-[70vh]">
                <iframe
                  src={selectedCertificate.pdfUrl}
                  className="w-full h-full rounded-lg border"
                  allow="autoplay"
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}