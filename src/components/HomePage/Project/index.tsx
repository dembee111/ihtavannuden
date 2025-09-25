"use client";
import Zuraas from "@/components/Shared/Zuraas";
import { Button } from "@/components/ui/button";
import HoverCard from "@/components/Shared/HoverCard";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const Project = ({ bgColor = false, services }: any) => {
  const [selectedCategory, setSelectedCategory] = useState("Бүгд");

  // Filter хийх логик
  const filteredServices =
    selectedCategory === "Бүгд"
      ? services
      : services.filter(
          (service: any) => service?.fields?.title === selectedCategory
        );

  return (
    <section
      className={`${
        bgColor
          ? "bg-white py-12 md:py-24 my-16 xl:my-28"
          : "bg-[#262626] py-24"
      }`}
    >
      <div className="max-w-6xl mx-auto px-3 xl:px-0">
        {/* Тайлбар хэсэг */}
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-6 mb-3 xl:mb-0">
            <h1
              className={`text-2xl xl:text-4xl ${
                bgColor ? "text-black" : "text-white"
              } font-semibold mb-2 xl:mb-4`}
            >
              Бидний үйлчилгээ
            </h1>
            <Zuraas />
            <p
              className={`${
                bgColor ? "text-slate-600" : "text-white/80"
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

        {/* Category filter */}
        <div className="flex justify-start items-center flex-wrap gap-2 md:gap-4 mt-2 md:mt-6">
          <div
            onClick={() => setSelectedCategory("Бүгд")}
            className={`cursor-pointer ${
              bgColor ? "text-black" : "text-white"
            } text-sm border py-1 px-2 ${
              selectedCategory === "Бүгд"
                ? "border-[#f7c51e]"
                : "border-transparent"
            }`}
          >
            Бүгд
          </div>
          {services.map((service: any, index: any) => {
            const title = service?.fields?.title;
            return (
              <div
                key={index}
                onClick={() => setSelectedCategory(title)}
                className={`cursor-pointer ${
                  bgColor ? "text-black" : "text-white"
                } text-sm py-1 px-2 border ${
                  selectedCategory === title
                    ? "border-[#f7c51e]"
                    : "border-transparent"
                }`}
              >
                {title.length > 17 ? title.slice(0, 17) + "..." : title}
              </div>
            );
          })}
        </div>

        {/* Services list */}
        <div className="grid grid-cols-12 mt-4 md:mt-8 gap-2 md:gap-4">
          {filteredServices &&
            filteredServices.map((service: any, index: any) => (
              <div key={index} className="col-span-6 xl:col-span-4">
                <HoverCard service={service} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
export default Project;
