"use client";
import Zuraas from "@/components/Shared/Zuraas";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/Shared/BlogCard";
import Link from "next/link";
import { motion } from "framer-motion";

const HomeNews = () => {
  return (
    <section className="my-12 md:my-16 px-3 xl:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-6 mb-4 xl:mb-0">
            <h1 className="text-2xl xl:text-4xl text-black font-semibold mb-2 xl:mb-4">
              Мэдээ мэдээлэл
            </h1>
            <Zuraas />
            <p className="text-black/80 text-sm mt-2 xl:mt-4">
              Бидний компани болон салбарын сүүлийн үеийн мэдээ, шинэ төслүүд,
              бүтээгдэхүүн, үйлчилгээний шинэчлэлтүүдийг танд хүргэнэ.
              Үйлчлүүлэгчидтэйгээ цаг алдалгүй мэдээллээр холбогдохыг зорьдог.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 flex justify-start md:justify-end">
            <Button
              asChild
              className="w-40 xl:w-52 py-4 xl:py-5 bg-transparent border-2 text-[#212121] border-[#212121] rounded-none hover:bg-[#212121] hover:text-white hover:border-[#212121] transition-colors"
            >
              <Link href="/work">Бүгдийг үзэх</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="col-span-12 md:col-span-6 mb-6 xl:mb-0"
          >
            <BlogCard />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="col-span-12 md:col-span-6"
          >
            <BlogCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default HomeNews;
