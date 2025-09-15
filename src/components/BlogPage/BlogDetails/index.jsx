"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";

const BlogDetails = () => {
  const router = useRouter();

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
            <div className="space-y-8">
              <div className="grid grid-cols-12 items-center gap-4">
                <div className="col-span-2 text-center relative">
                  <div className="text-black py-4 pr-2 md:pr-0 space-y-1">
                    <h2 className="text-2xl md:text-3xl font-semibold">23</h2>
                    <p className="uppercase text-xs text-[#6d6d6d]">Найм</p>
                    <p className="text-xs text-[#6d6d6d]">2025</p>
                  </div>

                  <div className="border-r border-gray-300 h-[100%] absolute top-0 right-0"></div>
                </div>

                <div className="col-span-10">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold  leading-tight md:leading-tight text-gray-900 ">
                    Шинэчлэл ба сонголтын боломжууд
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    бичсэн <span className="font-medium">Сарангэрэл</span> •
                    Зөвлөмж
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative group overflow-hidden  shadow">
                  <Image
                    src={"/image/about/blog1.webp"}
                    alt="images"
                    width={955}
                    height={668}
                    className="w-full h-[240px] md:h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <p className="text-gray-700 leading-relaxed text-justify text-[15px] md:text-[16px]">
                  Өнөөдрийн байдлаар Монголын барилгын салбар эрчимтэй хөгжиж
                  байгаа нь барилгын материалын эрэлт хэрэгцээг тогтмол өсгөж
                  байна. Иргэд өөрийн орон сууц, хашаа байшингаа тохижуулахад
                  болон компаниуд бүтээн байгуулалт хийхэд чанартай, стандартын
                  шаардлага хангасан материал сонгох нь хамгийн чухал алхам
                  болжээ.
                </p>
              </div>
              <div className="space-y-4">
                <div className="relative group overflow-hidden  shadow">
                  <Image
                    src={"/image/about/blog1.webp"}
                    alt="images"
                    width={955}
                    height={668}
                    className="w-full h-[240px] md:h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <p className="text-gray-700 leading-relaxed text-justify text-[15px] md:text-[16px]">
                  Өнөөдрийн байдлаар Монголын барилгын салбар эрчимтэй хөгжиж
                  байгаа нь барилгын материалын эрэлт хэрэгцээг тогтмол өсгөж
                  байна. Иргэд өөрийн орон сууц, хашаа байшингаа тохижуулахад
                  болон компаниуд бүтээн байгуулалт хийхэд чанартай, стандартын
                  шаардлага хангасан материал сонгох нь хамгийн чухал алхам
                  болжээ. Өнөөдрийн байдлаар Монголын барилгын салбар эрчимтэй
                  хөгжиж байгаа нь барилгын материалын эрэлт хэрэгцээг тогтмол
                  өсгөж байна. Иргэд өөрийн орон сууц, хашаа байшингаа
                  тохижуулахад болон компаниуд бүтээн байгуулалт хийхэд
                  чанартай, стандартын шаардлага хангасан материал сонгох нь
                  хамгийн чухал алхам болжээ. Өнөөдрийн байдлаар Монголын
                  барилгын салбар эрчимтэй хөгжиж байгаа нь барилгын материалын
                  эрэлт хэрэгцээг тогтмол өсгөж байна. Иргэд өөрийн орон сууц,
                  хашаа байшингаа тохижуулахад болон компаниуд бүтээн байгуулалт
                  хийхэд чанартай, стандартын шаардлага хангасан материал сонгох
                  нь хамгийн чухал алхам болжээ. Өнөөдрийн байдлаар Монголын
                  барилгын салбар эрчимтэй хөгжиж байгаа нь барилгын материалын
                  эрэлт хэрэгцээг тогтмол өсгөж байна. Иргэд өөрийн орон сууц,
                  хашаа байшингаа тохижуулахад болон компаниуд бүтээн байгуулалт
                  хийхэд чанартай, стандартын шаардлага хангасан материал сонгох
                  нь хамгийн чухал алхам болжээ. Өнөөдрийн байдлаар Монголын
                  барилгын салбар эрчимтэй хөгжиж байгаа нь барилгын материалын
                  эрэлт хэрэгцээг тогтмол өсгөж байна. Иргэд өөрийн орон сууц,
                  хашаа байшингаа тохижуулахад болон компаниуд бүтээн байгуулалт
                  хийхэд чанартай, стандартын шаардлага хангасан материал сонгох
                  нь хамгийн чухал алхам болжээ.
                </p>
              </div>
            </div>
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

            <div className="space-y-4">
              {[1, 2, 3, 4].map((item, index) => (
                <div
                  key={index}
                  className="group relative w-full h-40 overflow-hidden  shadow-lg cursor-pointer"
                >
                  <Image
                    src={"/image/about/1.webp"}
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
                    Phasellus molestie feugiat hendrerit Interdum
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
