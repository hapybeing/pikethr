"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 20px"
      }}
    >
      <div style={{ maxWidth: "900px" }}>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "64px",
            fontWeight: 600,
            lineHeight: 1.1,
            marginBottom: "20px"
          }}
        >
          The Universe
          <br />
          of Knowledge
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: "18px",
            color: "#aaa",
            marginBottom: "30px"
          }}
        >
          Pike transforms the entirety of human knowledge into an explorable interactive universe.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "12px 28px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.15)",
            background: "rgba(255,255,255,0.05)",
            color: "white",
            cursor: "pointer",
            backdropFilter: "blur(10px)"
          }}
        >
          Explore the Graph
        </motion.button>

      </div>
    </section>
  )
}
