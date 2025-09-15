import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BlogPage = () => {
  return (
    <div className="mt-32 mb-12  md:mb-24 md:mt-42 px-4 2xl:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-12 gap-0 md:gap-8 lg:gap-12 items-start space-y-12">
          {/* Гол мэдээ */}{" "}
          <div className="col-span-12 md:col-span-8 space-y-8">
            {["/image/about/blog1.webp", "/image/about/blog2.webp"].map(
              (item, index) => (
                <div key={index} className="space-y-8">
                  <div className="grid grid-cols-12 items-center gap-4">
                    <div className="col-span-2 text-center relative">
                      <div className="text-black py-4 pr-2 md:pr-0 space-y-1">
                        <h2 className="text-2xl md:text-3xl font-semibold">
                          23
                        </h2>
                        <p className="uppercase text-xs text-[#6d6d6d]">Найм</p>
                        <p className="text-xs text-[#6d6d6d]">2025</p>
                      </div>

                      <div className="border-r border-gray-300 h-[100%] absolute top-0 right-0"></div>
                    </div>

                    <div className="col-span-10">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold  leading-tight md:leading-snug text-gray-900 ">
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
                        src={item}
                        alt="images"
                        width={955}
                        height={668}
                        className="w-full h-[240px] md:h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-justify text-[15px] md:text-[16px]">
                      Өнөөдрийн байдлаар Монголын барилгын салбар эрчимтэй
                      хөгжиж байгаа нь барилгын материалын эрэлт хэрэгцээг
                      тогтмол өсгөж байна. Иргэд өөрийн орон сууц, хашаа
                      байшингаа тохижуулахад болон компаниуд бүтээн байгуулалт
                      хийхэд чанартай, стандартын шаардлага хангасан материал
                      сонгох нь хамгийн чухал алхам болжээ.
                    </p>

                    <Button
                      asChild
                      className="w-52 py-5 uppercase bg-[#f7c51e] text-white font-normal rounded-none hover:bg-black transition-colors"
                    >
                      <Link href="/news/1">Дэлгэрэнгүй</Link>
                    </Button>
                  </div>
                </div>
              )
            )}
          </div>
          {/* Бусад мэдээ */}
          <div className="col-span-12 md:col-span-4 space-y-6">
            <div>
              <h2 className=" text-[16px] md:text-[18px] lg:text-[20px] uppercase font-semibold text-gray-900">
                Бусад мэдээ
              </h2>
              <div className="flex items-center mt-2">
                <div className="border-b-2 border-[#f2b410] w-1/5"></div>
                <div className="border-b-2 border-gray-200 w-4/5"></div>
              </div>
            </div>

            <div className="space-y-4">
              {[
                "/image/about/blog1.webp",
                "/image/about/blog2.webp",
                "/image/about/blog1.webp",
                "/image/about/blog2.webp",
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative w-full h-36 md:h-40 overflow-hidden
                  shadow-lg cursor-pointer"
                >
                  <Link href="/news/2">
                    {" "}
                    <Image
                      src={item}
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
                    <h4 className="absolute top-1/2 text-center p-6 md:p-0  left-[35%] -translate-y-1/2 text-white text-md font-medium z-10">
                      Яагаад зөв материал сонгох нь чухал вэ?
                    </h4>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
