"use client";
import Zuraas from "@/components/Shared/Zuraas";
import { Button } from "@/components/ui/button";
import HoverCard from "@/components/Shared/HoverCard";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HoverMobileCard from "@/components/Shared/HoverMobileCard";

const Project = ({ bgColor = false, services }: any) => {
  const [selectedCategory, setSelectedCategory] = useState("Бүгд");
  const [filteredServices, setFilteredServices] = useState([]);

  useEffect(() => {
    // Filter хийх логик
    const filteredServices1 =
      selectedCategory === "Бүгд"
        ? services
        : services.filter(
            (service: any) => service?.fields?.title === selectedCategory
          );
    console.log(filteredServices1, "filteredServices1");
    setFilteredServices(filteredServices1);
  }, [selectedCategory]);

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

        {/* Services list */}
        <div className="grid grid-cols-12 mt-8 md:mt-8 gap-2 md:gap-4">
          {filteredServices && filteredServices.length > 0 ? (
            filteredServices.map((service: any, index: any) => (
              <div key={index} className="col-span-6 xl:col-span-4">
                <HoverCard service={service} />
              </div>
            ))
          ) : (
            <div className="col-span-12 text-center text-white py-6">
              Үйлчилгээ олдсонгүй
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default Project;
