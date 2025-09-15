"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto px-4  2xl:px-0 space-y-9 md:space-y-0 lg:space-y-9">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start lg:items-center">
        <motion.div
          className="md:col-span-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[344px]">
            <Image
              src="/image/about/3.webp"
              alt="Барилгын материалын худалдаа"
              width={515}
              height={344}
              className="object-cover shadow-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-6 space-y-4 lg:space-y-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4">
            <h1 className=" text-2xl md:text-xl lg:text-4xl font-normal md:font-semibold tracking-tight text-gray-900 ">
              Барилгын материалын худалдаа
            </h1>
            <div className="border-b-3 border-[#f7c51e] w-[40px]"></div>
          </div>

          <p className="text-gray-600  leading-relaxed text-justify">
            Манай компани чанар стандартын шаардлага хангасан төрөл бүрийн
            барилгын материалыг өргөн сонголттойгоор худалдаалдаг.
            Үйлчлүүлэгчдэдээ найдвартай, баталгаатай бүтээгдэхүүн хүргэхийн
            зэрэгцээ хурдан шуурхай үйлчилгээ үзүүлэхийг бид зорьдог.
          </p>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start lg:items-center">
        <motion.div
          className="md:col-span-6 md:hidden block"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[344px]">
            <Image
              src="/image/about/2.webp"
              alt="Барилгын материалын худалдаа"
              width={515}
              height={344}
              className="object-cover shadow-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>
        <motion.div
          className="md:col-span-6 space-y-4 lg:space-y-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4">
            <h1 className="text-2xl md:text-xl lg:text-4xl font-normal md:font-semibold tracking-tight text-gray-900 ">
              Гадаад худалдаа
            </h1>
            <div className="border-b-3 border-[#f7c51e] w-[40px]"></div>
          </div>
          <p className="text-gray-600 leading-relaxed text-justify">
            Гадаад худалдаа нь улс орнуудын хооронд бараа бүтээгдэхүүн,
            үйлчилгээ, технологи болон хөрөнгийн солилцоо явагдах үйл явц юм.
            Энэ нь дэлхийн эдийн засгийн хөгжлийн гол хөдөлгөгч хүчний нэг
            бөгөөд улс орон бүрт зах зээлийн өрсөлдөх чадварыг нэмэгдүүлэх,
            дотоодын үйлдвэрлэлийг хөгжүүлэх, гадаадын хөрөнгө оруулалтыг татах
            боломжийг олгодог. Мөн худалдааны чөлөөт хэлэлцээр, гаалийн бодлого,
            ложистикийн дэд бүтэц зэрэг нь гадаад худалдааны амжилтыг
            тодорхойлдог чухал хүчин зүйлс юм.
          </p>
        </motion.div>
        <motion.div
          className="md:col-span-6 md:block hidden"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[344px]">
            <Image
              src="/image/about/2.webp"
              alt="Барилгын материалын худалдаа"
              width={515}
              height={344}
              className="object-cover shadow-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
