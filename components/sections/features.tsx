"use client"

import { motion } from "framer-motion"

const features = [
  {
    title: "Knowledge Graph",
    description:
      "Explore disciplines, discoveries, and ideas through a living network."
  },
  {
    title: "Interactive Universe",
    description:
      "Navigate human knowledge like a galaxy of connected insights."
  },
  {
    title: "AI Assisted Discovery",
    description:
      "Reveal hidden relationships across science, philosophy, and art."
  }
]

export default function Features() {
  return (
    <section className="relative py-40 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-glass"
          >

            <h3 className="text-xl font-semibold mb-3">
              {feature.title}
            </h3>

            <p className="text-neutral-400 text-sm leading-relaxed">
              {feature.description}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  )
}
