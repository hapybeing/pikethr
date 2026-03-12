"use client"

import { motion } from "framer-motion"

export default function Vision() {
  return (
    <section className="relative py-56 px-6 text-center">

      <motion.h2
        initial={{ opacity:0, y:40 }}
        whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }}
        transition={{ duration:0.8 }}
        className="text-6xl font-semibold max-w-4xl mx-auto leading-tight"
      >
        Humanity's Knowledge
        <br/>
        As A Living System
      </motion.h2>

      <motion.p
        initial={{ opacity:0 }}
        whileInView={{ opacity:1 }}
        transition={{ delay:0.3 }}
        viewport={{ once:true }}
        className="text-neutral-400 max-w-2xl mx-auto mt-8 text-lg"
      >
        Pike transforms static information into a dynamic universe where
        knowledge grows, connects, and evolves over time.
      </motion.p>

    </section>
  )
}
