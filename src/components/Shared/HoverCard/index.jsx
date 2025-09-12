"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function HoverCard() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-full h-[230px] overflow-hidden relative group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src="/image/porto-image-1.jpg"
        alt="Их таван нүдэн лого"
        width={800}
        height={400}
        className="w-full h-full object-center object-cover group-hover:scale-105 transition-transform"
      />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-1/2 -translate-y-1/2 w-full h-[120px] bg-black/60 flex justify-center items-center"
          >
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
                className="text-white text-xl font-semibold"
              >
                Jacov
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.5 }}
                className="text-white text-xl font-semibold"
              >
                Villa
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
