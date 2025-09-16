"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const BlogList = ({ blogsData }: any) => {
  return (
    <>
      <div>
        <h2 className=" text-[16px] md:text-[18px] lg:text-[20px] uppercase font-semibold text-gray-900">
          Бусад мэдээ
        </h2>
        <div className="flex items-center mt-2">
          <div className="border-b-2 border-[#f2b410] w-1/5"></div>
          <div className="border-b-2 border-gray-200 w-4/5"></div>
        </div>
      </div>

      <motion.div
        className="space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {blogsData?.length > 0 &&
          blogsData?.map((item: any, index: any) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="group relative w-full h-36 md:h-40 overflow-hidden
                  shadow-lg cursor-pointer"
            >
              <Link href={`/news/${item?.fields?.slug}`}>
                {" "}
                <Image
                  src={`https:${item?.fields?.image?.fields?.file?.url}`}
                  alt={`images-${index}`}
                  fill
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500"></div>
                <div
                  className="absolute top-0 left-0 h-full w-1/3 opacity-80"
                  style={{
                    background:
                      "linear-gradient(260deg, rgba(255,255,255,0) 20%, #f2b410 20%)",
                  }}
                ></div>
                <div className="absolute top-2 left-2 z-20">
                  <span className=" text-white font-bold px-3 py-1 rounded">
                    {index + 1}
                  </span>
                </div>
                <h4 className="absolute top-1/2 text-center p-6 md:p-0  left-[35%] -translate-y-1/2 text-white text-md font-medium z-10">
                  {item?.fields?.title}
                </h4>
              </Link>
            </motion.div>
          ))}
      </motion.div>
    </>
  );
};

export default BlogList;
