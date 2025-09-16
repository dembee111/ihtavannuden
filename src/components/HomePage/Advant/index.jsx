"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TradeIcon, FlowerIcon } from "@/components/Shared/Icons";

const Advant = ({ advants }) => {
  return (
    <section className="py-16 bg-[#262626] px-3 xl:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-12 gap-x-0 md:gap-x-8 space-y-6 md:space-y-0">
          {advants.map((item, index) => (
            <div key={index} className="col-span-12 md:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 * index }}
                className="grid grid-cols-12"
              >
                <div className="col-span-12 xl:col-span-3">
                  {index === 0 && (
                    <Image
                      src="/image/icon-2.jpg"
                      alt="Их таван нүдэн лого"
                      width={60}
                      height={60}
                      className="w-[60px] h-[60px] object-center object-contain"
                    />
                  )}
                  {index === 1 && (
                    <TradeIcon className="size-14 fill-[#f7c51e]" />
                  )}
                  {index === 2 && (
                    <FlowerIcon className="size-14 fill-[#f7c51e]" />
                  )}
                </div>
                <div className="col-span-12 xl:col-span-9">
                  <div className="flex flex-col">
                    <h1 className="text-white text-lg font-semibold mb-1 md:mb-2">
                      {item?.fields?.title}
                    </h1>
                    <p className="text-white/80 leading-6 text-sm max-w-[18rem]">
                      {item?.fields?.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Advant;
