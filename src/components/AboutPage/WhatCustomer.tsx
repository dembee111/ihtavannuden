"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WhatCustomer = () => {
  return (
    <section className="my-20">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        <motion.div
          className="space-y-4 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Манай үйлчлүүлэгч юу хэлэх вэ?
          </h1>
          <div className="border-b-4 border-[#f7c51e] w-12 mx-auto"></div>
          <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
            Бид олон жилийн туршлагатай, мэргэжлийн өндөр түвшний багтайгаар
            харилцагчиддаа хамгийн найдвартай үйлчилгээ үзүүлдэг.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#555555] leading-relaxed text-lg italic">
              {`"Claritas est etiam processus dynamicus, qui sequitur mutationem
      consuetudium lectorum. Mirum est notare quam littera gothica,
      quam nunc putamus parum claram, anteposuerit litterarum formas."`}
            </p>
            <div className="flex items-center gap-4">
              <div className="relative h-24 w-24">
                <Image
                  src={"/image/about/person1.webp"}
                  alt="Customer"
                  fill
                  className="object-cover rounded-full border-4 border-[#eaeaea]"
                />
              </div>
              <div>
                <h2 className="text-[#000000] font-bold text-lg">
                  Patrick Johanson
                </h2>
                <p className="text-[#f7c51e]">Architect</p>
              </div>
            </div>
          </motion.div>

          <div className="col-span-1 h-full">
            <div className="h-full border-l-2 border-dotted border-[#f2f2f2] "></div>
          </div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 items-center justify-items-center">
              {[
                "/image/about/client-1.jpg",
                "/image/about/client-1.jpg",
                "/image/about/client-1.jpg",
                "/image/about/client-1.jpg",
                "/image/about/client-1.jpg",
              ].map((logo, i) => (
                <Image
                  key={i}
                  src={logo}
                  alt={`client-${i}`}
                  width={143}
                  height={35}
                  className="object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatCustomer;
