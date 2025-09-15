"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experts = [
  {
    name: "Бат-Эрдэнэ",
    title: "Инженер",
    img: "/image/about/person1.webp",
  },
  {
    name: "Сарангэрэл",
    title: "Эдийн засагч",
    img: "/image/about/person4.webp",
  },
  {
    name: "Түвшинбаяр",
    title: "Маркетингийн мэргэжилтэн",
    img: "/image/about/person3.webp",
  },
  {
    name: "Сарангэрэл",
    title: "Эдийн засагч",
    img: "/image/about/person5.webp",
  },
];

const OurExperts = () => {
  return (
    <div className="bg-[#f2f2f2] py-12 md:py-16 lg:py-20 my-12 lg:my-24 2xl:px-0 px-4 ">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="space-y-4 text-start md:text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 ">
            Манай мэргэжилтнүүд
          </h1>
          <div className="border-b-4 border-[#f7c51e] w-12 md:mx-auto"></div>
          <p className="max-w-2xl mx-auto text-gray-600 ">
            Бид олон жилийн туршлагатай, мэргэжлийн өндөр түвшний багтайгаар
            харилцагчиддаа хамгийн найдвартай үйлчилгээ үзүүлдэг.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4 ">
          {experts.map((expert, i) => (
            <motion.div
              key={i}
              className="relative bg-white shadow-md overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="relative h-85 2xl:h-60 w-full z-0">
                <Image
                  src={expert.img}
                  alt={expert.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className=" z-20 absolute inset-0  bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center">
                <h3 className="text-lg font-semibold text-white">
                  {expert.name}
                </h3>
                <p className="text-sm text-gray-200">{expert.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurExperts;
