"use client"

import { motion } from "framer-motion"

const links = [
  { name: "Universe", href: "#" },
  { name: "Knowledge", href: "#" },
  { name: "Research", href: "#" },
  { name: "Vision", href: "#" }
]

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",
        top: 20,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        zIndex: 50
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
          padding: "10px 25px",
          borderRadius: "999px",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.1)"
        }}
      >
        <div style={{ fontWeight: 600 }}>Pike</div>

        <div style={{ display: "flex", gap: "20px", color: "#aaa" }}>
          {links.map(link => (
            <a
              key={link.name}
              href={link.href}
              style={{ textDecoration: "none", color: "#aaa" }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
