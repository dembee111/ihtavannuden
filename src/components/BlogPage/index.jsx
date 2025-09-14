import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BlogPage = () => {
  return (
    <div className="my-42 px-4 2xl:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-12 gap-12 items-start">
          {/* Гол мэдээ */}{" "}
          <div className="col-span-12 lg:col-span-8 space-y-8">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div key={index} className="space-y-8">
                <div className="grid grid-cols-12 items-center gap-4">
                  <div className="col-span-3 md:col-span-2 text-center">
                    <div className=" text-black py-4 border-r ">
                      <h2 className="text-3xl font-normal">23</h2>
                      <p className="uppercase text-sm">August</p>
                      <p className="text-xs">2021</p>
                    </div>
                  </div>
                  <div className="col-span-9 md:col-span-10">
                    <h3 className="text-3xl md:text-4xl font-semibold leading-snug text-gray-900">
                      Phasellus molestie feugiat hendrerit Interdum
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">
                      by <span className="font-medium">Daniel Zedda</span> •
                      Tips
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative group overflow-hidden  shadow">
                    <Image
                      src={"/image/about/1.webp"}
                      alt="images"
                      width={800}
                      height={450}
                      className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    Eget ullamcorper turpis. Donec condimentum pulvinar lorem,
                    sit amet ultrices diam bibendum non. Suspendisse potenti.
                    Integer dapibus ligula tortor. Nam metus diam, tempus non...
                  </p>

                  <Button
                    asChild
                    className="w-52 py-5 bg-[#f7c51e] text-white font-semibold rounded-none hover:bg-black transition-colors"
                  >
                    <Link href="/contact">Дэлгэрэнгүй</Link>
                  </Button>
                </div>
              </div>
            ))}
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

export default BlogPage;
