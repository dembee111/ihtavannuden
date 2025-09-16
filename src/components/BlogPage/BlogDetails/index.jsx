"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { motion } from "framer-motion";

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => (
      <strong className="bold-text text-gray-700 tracking-wide leading-relaxed mb-3 my-2">
        {text}
      </strong>
    ),
    [MARKS.ITALIC]: (text) => (
      <em className="italic-text text-gray-700  tracking-wide leading-relaxed mb-4">
        {text}
      </em>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="text-base text-b/90 tracking-wide leading-relaxed mb-4">
        {children}
      </p>
    ),

    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc ml-4">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal ml-4">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="mb-1">{children}</li>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="text-xl md:text-2xl font-bold text-black my-4">
        {children}
      </h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="text-lg md:text-xl font-bold text-black my-4">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="text-xl md:text-2xl font-bold text-black my-4">
        {children}
      </h3>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className="text-lg md:text-2xl font-bold text-black my-4">
        {children}
      </h4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className="text-base md:text-xl font-bold text-black my-4">
        {children}
      </h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 className="text-base md:text-lg font-bold text-black my-4">
        {children}
      </h6>
    ),
  },
  renderText: (text) => <span className="text-style my-4">{text}</span>,
};
const MONTHS_MN = [
  "Нэгдүгээр сар",
  "Хоёрдугаар сар",
  "Гуравдугаар сар",
  "Дөрөвдүгээр сар",
  "Тавдугаар сар",
  "Зургаадугаар сар",
  "Долоодугаар сар",
  "Наймдугаар сар",
  "Есдүгээр сар",
  "Аравдугаар сар",
  "Арваннэгдүгээр сар",
  "Арванхоёрдугаар сар",
];

const BlogDetails = ({ blogDetails, blogsAll }) => {
  const router = useRouter();

  const [dateParts, setDateParts] = useState({ day: "", month: "", year: "" });

  useEffect(() => {
    if (blogDetails?.sys?.createdAt) {
      const date = new Date(blogDetails?.sys?.createdAt);
      setDateParts({
        day: date.getDate(),
        month: MONTHS_MN[date.getMonth()],
        year: date.getFullYear(),
      });
    }
  }, [blogDetails]);

  return (
    <div className="mt-32 mb-12  md:mb-24 md:mt-42 px-4 2xl:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Button
            onClick={() => router.back()}
            className="
        flex items-center gap-2
        bg-[#f2b410] 
        text-white
        font-semibold 
        px-5 
        py-2 
        transition 
        duration-300 
        ease-in-out 
        hover:bg-yellow-400 
        active:scale-95
        md:text-md text-sm
      "
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Буцах
          </Button>
        </div>
        <div className="grid grid-cols-12 gap-0 md:gap-8  lg:gap-12 items-start space-y-12">
          {/* Гол мэдээ */}{" "}
          <div className="col-span-12 lg:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="grid grid-cols-12 items-center gap-4">
                <div className="col-span-2 text-center relative">
                  <div className="text-black py-4 pr-2 md:pr-0 space-y-1">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                      {dateParts.day}
                    </h2>
                    <p className="uppercase text-xs text-[#6d6d6d]">
                      {dateParts.month}
                    </p>
                    <p className="text-xs text-[#6d6d6d]">{dateParts.year}</p>
                  </div>
                  <div className="border-r border-gray-300 h-[100%] absolute top-0 right-0"></div>
                </div>

                <div className="col-span-10">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold  leading-tight md:leading-tight text-gray-900 ">
                    Шинэчлэл ба сонголтын боломжууд
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    бичсэн{" "}
                    <span className="font-medium">
                      {blogDetails?.fields?.written}
                    </span>{" "}
                    • {blogDetails?.fields?.type}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + 0.1 }}
                  viewport={{ once: true }}
                  className="relative group overflow-hidden  shadow"
                >
                  <Image
                    src={`https:${blogDetails?.fields?.image?.fields?.file?.url}`}
                    alt="images"
                    width={955}
                    height={668}
                    className="w-full h-[240px] md:h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>

                <p className="text-gray-700 leading-relaxed text-justify text-[15px] md:text-[16px]">
                  {blogDetails?.fields?.title}
                </p>
              </div>
              <div className="space-y-4">
                {/* className="text-gray-700 leading-relaxed text-justify text-[15px] md:text-[16px]" */}
                <div>
                  {documentToReactComponents(
                    blogDetails?.fields?.description,
                    options
                  )}
                </div>
              </div>
            </motion.div>
          </div>
          {/* Бусад мэдээ */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <div>
              <h2 className="text-[20px] uppercase font-semibold text-gray-900">
                Бусад мэдээ
              </h2>
              <div className="flex items-center mt-2">
                <div className="border-b-2 border-[#f2b410] w-1/5"></div>
                <div className="border-b-2 border-gray-200 w-4/5"></div>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.2 },
                },
              }}
              className="space-y-4"
            >
              {blogsAll.map((item, index) => (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  key={index}
                  className="group relative w-full h-40 overflow-hidden  shadow-lg cursor-pointer"
                >
                  {" "}
                  <Link href={`/news/${item?.fields?.slug}`}>
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
                    <h4 className="absolute top-1/2 left-[35%] -translate-y-1/2 text-white text-md font-medium z-10">
                      {item?.fields?.title}
                    </h4>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
