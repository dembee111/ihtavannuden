"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function HoverCard({ service }: any) {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <AlertDialog>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div>
              <Image
                src={`https:${service?.fields?.image?.fields?.file?.url}`}
                alt={service?.fields?.title}
                width={800}
                height={400}
                className="w-full h-full object-center object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <AlertDialogTitle>{service?.fields?.title}</AlertDialogTitle>
            <AlertDialogDescription>
              {service?.fields?.content}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Хаах</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>

        <AlertDialogTrigger>
          <div
            className="w-full h-[160px] md:h-[200px] xl:h-[230px] overflow-hidden relative group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
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
      </AlertDialog>
    </>
  );
}
