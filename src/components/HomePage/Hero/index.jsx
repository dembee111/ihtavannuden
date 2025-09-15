"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-[80vh] xl:h-screen w-full bg-[url('/image/hero-11.webp')] relative bg-overlay bg-cover bg-center z-10">
      <div className="absolute left-1/2 top-1/2 transform z-30 -translate-x-1/2 -translate-y-1/2 w-full h-auto">
        <div className="flex flex-col items-center px-3 md:px-0">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white text-xl tracking-widest font-light uppercase mb-3 x:mb-5"
          >
            Дээд зэргийн чанар
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-5xl xl:text-7xl uppercase font-semibold mb-3 xl:mb-5"
          >
            Их таван нүдэн
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white/80 max-w-sm md:max-w-lg text-center"
          >
            "Их таван нүдэн" компани нь чанартай, найдвартай үйл ажиллагаагаа
            олон улсын стандартад нийцүүлэн явуулж, үйлчлүүлэгчиддээ шилдэг
            бүтээгдэхүүн, үйлчилгээ хүргэдэг.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
