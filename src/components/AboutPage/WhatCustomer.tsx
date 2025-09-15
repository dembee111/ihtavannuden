"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    text: `"Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum."`,
    name: "Patrick Johanson",
    title: "Architect",
    img: "/image/about/person1.webp",
  },
  {
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit."`,
    name: "Sarah Williams",
    title: "Designer",
    img: "/image/about/person2.webp",
  },
  {
    text: `"Suspendisse potenti. Vivamus eget arcu et urna placerat."`,
    name: "Michael Brown",
    title: "Engineer",
    img: "/image/about/person1.webp",
  },
];

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 5000 }}
              pagination={{ clickable: true }}
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  <div className="space-y-6 text-center lg:text-left">
                    <p className="text-[#555555] leading-relaxed text-lg italic">
                      {t.text}
                    </p>
                    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4 mt-4">
                      <div className="relative h-24 w-24">
                        <Image
                          src={t.img}
                          alt={t.name}
                          fill
                          className="object-cover rounded-full border-4 border-[#eaeaea]"
                        />
                      </div>
                      <div>
                        <h3 className="text-[#000000] font-bold text-lg">
                          {t.name}
                        </h3>
                        <p className="text-[#f7c51e]">{t.title}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="h-64 border-l-2 border-dotted border-[#d4d4d4]"></div>
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
