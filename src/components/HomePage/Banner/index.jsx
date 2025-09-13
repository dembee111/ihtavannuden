"use client";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const Banner = () => {
  return (
    <div className="my-12 md:my-16 xl:my-0">
      <ParallaxProvider>
        <div className="relative h-[50vh] xl:h-[60vh] flex justify-center items-center overflow-hidden">
          <Parallax speed={-20} className="absolute inset-0 w-full h-full">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/image/office.jpg')",
              }}
            ></div>
          </Parallax>
          <h1 className="text-xl md:text-2xl xl:text-4xl font-extralight text-white relative z-10 max-w-2xl text-center leading-relaxed tracking-wider">
            Бид маргаашийг инженерчилж, илүү сайхан ирээдүйг бүтээнэ.
          </h1>
          <Parallax
            speed={-20}
            className="bg-black opacity-50 absolute inset-0"
          ></Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
};
export default Banner;
