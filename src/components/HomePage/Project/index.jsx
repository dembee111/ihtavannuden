"use client";
import Zuraas from "@/components/Shared/Zuraas";
import { Button } from "@/components/ui/button";
import HoverCard from "@/components/Shared/HoverCard";
import Link from "next/link";
import { motion } from "framer-motion";

const Project = ({ bgColor = false }) => {
  return (
    <section
      className={`${
        bgColor ? "bg-white py-24 my-16 xl:my-28" : "bg-[#262626] py-24"
      }`}
    >
      <div className="max-w-6xl mx-auto px-3 xl:px-0">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-6 mb-3 xl:mb-0">
            <h1
              className={`text-2xl xl:text-4xl ${
                bgColor ? "text-black" : "text-white"
              } font-semibold mb-2 xl:mb-4`}
            >
              Гүйцэтгэсэн төслүүд
            </h1>
            <Zuraas />
            <p
              className={`${
                bgColor ? "text-black" : "text-white/80"
              } text-sm mt-2 xl:mt-4 max-w-md`}
            >
              Манай баг олон жил туршлага хуримтлуулан барилгын материалын
              худалдаа, гадаад худалдаа, цэцэрлэгжүүлэлт зэрэг төслүүдийг
              амжилттай гүйцэтгэж, үйлчлүүлэгчдэд өндөр чанартай, найдвартай
              шийдлүүдийг хүргэж байна.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 flex justify-start md:justify-end">
            <Button
              asChild
              className="w-40 md:w-52 py-4 md:py-5 bg-transparent border-2 border-white rounded-none hover:bg-[#f7c51e] hover:border-[#f7c51e] transition-colors"
            >
              <Link href="/work">Бүгдийг үзэх</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-start items-center flex-wrap gap-2 md:gap-4 mt-6">
          <div
            className={`${
              bgColor ? "text-black" : "text-white"
            } text-sm  border border-[#f7c51e] py-1 px-2`}
          >
            Бүгд
          </div>
          <div
            className={`${
              bgColor ? "text-black" : "text-white"
            } text-sm py-1 px-2`}
          >
            Цэцэрлэгжүүлэлт
          </div>
          <div
            className={`${
              bgColor ? "text-black" : "text-white"
            } text-sm py-1 px-2`}
          >
            Барилгын материалын худалдаа
          </div>
          <div
            className={`${
              bgColor ? "text-black" : "text-white"
            } text-sm py-1 px-2`}
          >
            Гадаад худалдаа
          </div>
        </div>
        <div className="grid grid-cols-12 mt-8 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="col-span-6 xl:col-span-4"
          >
            <HoverCard />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="col-span-6 xl:col-span-4"
          >
            <HoverCard />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="col-span-6 xl:col-span-4"
          >
            <HoverCard />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="col-span-6 xl:col-span-4"
          >
            <HoverCard />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="col-span-6 xl:col-span-4"
          >
            <HoverCard />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="col-span-6 xl:col-span-4"
          >
            <HoverCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Project;
