"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const WhatCustomer = ({ data }: any) => {
  return (
    <div className="my-16 lg:my-20 2xl:px-0 px-4 ">
      <div className="max-w-6xl mx-auto  space-y-12">
        <motion.div
          className="space-y-4 text-start md:text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">
            {data?.fields?.title}
          </h1>
          <div className="border-b-4 border-[#f7c51e] w-12 md:mx-auto"></div>
          <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
            {data?.fields?.content}
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
              {data?.fields?.partnerContent?.map((t: any, i: any) => (
                <SwiperSlide key={i}>
                  <div className="space-y-6 text-start md:text-center lg:text-left">
                    <p className="text-[#555555] leading-relaxed text-lg italic">
                      {t}
                    </p>
                    <div className="flex flex-col lg:flex-row items-start md:items-center justify-start md:justify-center lg:justify-start gap-4 mt-4">
                      <div className="relative h-24 w-36">
                        <Image
                          src={`https:${data?.fields?.partnerImages[i]?.fields?.file?.url}`}
                          alt={t}
                          fill
                          className="object-cover rounded border-4 border-[#eaeaea]"
                        />
                      </div>
                      <div>
                        <h3 className="text-[#000000] font-bold text-lg">
                          {data?.fields?.partnerName[i]}
                        </h3>
                        {/* <p className="text-[#f7c51e]">{t.title}</p> */}
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
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 items-start md:items-center justify-items-center">
              {data?.fields?.brands?.map((logo: any, i: any) => (
                <Image
                  key={i}
                  src={`https:${logo?.fields?.file?.url}`}
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
    </div>
  );
};

export default WhatCustomer;
