"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function HoverCard({ service }: any) {
  console.log("TCL: HoverCard -> service", service);
  const [hovered, setHovered] = useState(false);

  const handleToggle = () => {
    // мобайл дээр tap хийхэд toggle болно
    setHovered((prev) => !prev);
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div
            className="w-full h-[160px] md:h-[200px] xl:h-[230px] overflow-hidden relative group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={handleToggle} // 👈 мобайлд ажиллана
          >
            <Image
              src={`https:${service?.fields?.image?.fields?.file?.url}`}
              alt={service?.fields?.title}
              width={800}
              height={400}
              className="w-full h-full object-center object-cover group-hover:scale-105 transition-transform"
            />

            <AnimatePresence>
              {hovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-1/2 -translate-y-1/2 w-full h-[120px] bg-black/60 flex justify-center items-center"
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      initial={{ opacity: 0, y: -40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -40 }}
                      transition={{ duration: 0.5 }}
                      className="text-white text-lg xl:text-xl font-semibold"
                    >
                      {service?.fields?.title.split(" ")[0]}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 40 }}
                      transition={{ duration: 0.5 }}
                      className="text-white text-lg xl:text-xl font-semibold"
                    >
                      {service?.fields?.title.split(" ")[1]}
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent className="w-[95vw] max-w-4xl max-h-[90vh] overflow-y-auto">
          <AlertDialogHeader className="space-y-4">
            {service?.fields?.images?.length > 0 ? (
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="relative w-[280px]  md:w-[450px] mx-auto"
              >
                {service.fields.images.map((img: any, index: number) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-[220px] sm:h-[280px] md:h-[360px]">
                      <Image
                        src={`https:${img.fields.file.url}`}
                        alt={service?.fields?.title}
                        fill
                        className="object-contain rounded-lg"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="relative w-full h-[220px] sm:h-[280px] md:h-[360px] max-w-[500px] mx-auto">
                <Image
                  src={`https:${service?.fields?.image?.fields?.file?.url}`}
                  alt={service?.fields?.title}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            )}

            <AlertDialogTitle className="text-left text-lg sm:text-xl">
              {service?.fields?.title}
            </AlertDialogTitle>

            <AlertDialogDescription className="max-h-[160px] overflow-y-auto text-sm sm:text-base">
              {service?.fields?.content}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter className="pt-4">
            <AlertDialogCancel className="w-full sm:w-auto">
              Хаах
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
