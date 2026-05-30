"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function BgImage() {
  const pathname = usePathname();

  if (pathname !== "/") return null;

  return (
    <motion.div
      layoutId="bg-image"
      className="fixed inset-0 -z-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/cloudy.jpg')" }}
    />
  );
}
