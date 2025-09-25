"use client";

import { useState } from "react";
import Image from "next/image";
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

export default function HoverMobileCard({ service }: any) {
  const [hovered, setHovered] = useState(false);

  const handleToggle = () => {
    // мобайл дээр tap хийхэд toggle болно
    setHovered((prev) => !prev);
  };

  return (
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
          onClick={handleToggle} // 👈 мобайл дээр ажиллана
        >
          <Image
            src={`https:${service?.fields?.image?.fields?.file?.url}`}
            alt={service?.fields?.title}
            width={800}
            height={400}
            className="w-full h-full object-center object-cover group-hover:scale-105 transition-transform"
          />

          <div className="absolute top-1/2 -translate-y-1/2 w-full h-[120px] bg-black/60 flex justify-center items-center">
            <div className="flex flex-col items-center">
              <div className="text-white text-lg xl:text-xl font-semibold">
                {service?.fields?.title.split(" ")[0]}
              </div>

              <div className="text-white text-lg xl:text-xl font-semibold">
                {service?.fields?.title.split(" ")[1]}
              </div>
            </div>
          </div>
        </div>
      </AlertDialogTrigger>
    </AlertDialog>
  );
}
