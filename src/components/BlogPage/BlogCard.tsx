"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const BlogCard = ({ blogsData }: any) => {
  return (
    <>
      {" "}
      {blogsData?.length > 0 &&
        blogsData?.map((item: any, index: any) => {
          if (!item?.sys?.createdAt) return null;
          const date = new Date(item.sys.createdAt);
          const day = date.getDate();
          const month = monthNames[date.getMonth()];
          const year = date.getFullYear();
          return (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={index}
              className="space-y-8"
            >
              <div className="grid grid-cols-12 items-center gap-4">
                <div className="col-span-2 text-center relative">
                  <div className="text-black py-4 pr-2 md:pr-0 space-y-1">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                      {day}
                    </h2>
                    <p className="uppercase text-xs text-[#6d6d6d]">{month}</p>
                    <p className="text-xs text-[#6d6d6d]">{year}</p>
                  </div>

                  <div className="border-r border-gray-300 h-[100%] absolute top-0 right-0"></div>
                </div>

                <div className="col-span-10">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold  leading-tight md:leading-snug text-gray-900 ">
                    {item?.fields?.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    бичсэн{" "}
                    <span className="font-medium">{item?.fields?.written}</span>{" "}
                    • {item?.fields?.type}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <motion.div
                  className="relative group overflow-hidden  shadow"
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                  viewport={{ once: true }}
                >
                  <Image
                    src={`https:${item?.fields?.image?.fields?.file?.url}`}
                    alt="images"
                    width={955}
                    height={668}
                    className="w-full h-[240px] md:h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>

                <p className="text-gray-700 leading-relaxed text-justify text-[15px] md:text-[16px]">
                  Өнөөдрийн байдлаар Монголын барилгын салбар эрчимтэй хөгжиж
                  байгаа нь барилгын материалын эрэлт хэрэгцээг тогтмол өсгөж
                  байна. Иргэд өөрийн орон сууц, хашаа байшингаа тохижуулахад
                  болон компаниуд бүтээн байгуулалт хийхэд чанартай, стандартын
                  шаардлага хангасан материал сонгох нь хамгийн чухал алхам
                  болжээ.
                </p>

                <Button
                  asChild
                  className="w-52 py-5 uppercase bg-[#f7c51e] text-white font-normal rounded-none hover:bg-black transition-colors"
                >
                  <Link href={`/news/${item?.fields?.slug}`}>Дэлгэрэнгүй</Link>
                </Button>
              </div>
            </motion.div>
          );
        })}
    </>
  );
};

export default BlogCard;
