"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Intro = ({ homeAbout }) => {
  console.log("🚀 ~ Intro ~ homeAbout:", homeAbout[0]);
  return (
    <section className="py-12 xl:py-24 px-3 md:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-12 gap-3">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="col-span-12 md:col-span-6"
          >
            <div className="w-full xl:w-[515px] h-[316px] overflow-hidden">
              <Image
                src={`https:${homeAbout[0]?.fields?.image.fields?.file.url}`}
                alt="Их таван нүдэн лого"
                priority
                width={911}
                height={631}
                className="w-full h-full object-center object-contain"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="col-span-12 md:col-span-6"
          >
            <div className="flex flex-col">
              <h5 className="mb-3 tracking-widest">SINCE 2018</h5>
              <h1 className="text-2xl xl:text-4xl font-semibold mb-4 tracking-wide">
                {homeAbout[0]?.fields?.title}
              </h1>
              <p className="text-slate-600">{homeAbout[0].fields?.content}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Intro;
