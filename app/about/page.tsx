"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="">
      <h1>SOBRE NOZES</h1>
      <motion.div
        layoutId="bg-image"
        className="w-96 h-64 rounded-xl overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/cloudy.jpg')",
        }}
      />
    </main>
  );
}
