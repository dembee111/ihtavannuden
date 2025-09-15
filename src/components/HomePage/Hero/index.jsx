const Hero = () => {
  return (
    <section className="h-[80vh] xl:h-screen w-full bg-[url('/image/bg-hero-image.jpg')] relative bg-overlay bg-cover bg-center z-10">
      <div className="absolute left-1/2 top-1/2 transform z-30 -translate-x-1/2 -translate-y-1/2 w-full h-auto">
        <div className="flex flex-col items-center px-3 md:px-0">
          <h2 className="text-white text-xl tracking-widest font-light uppercase mb-3 x:mb-5">
            Дээд зэргийн чанар
          </h2>
          <h1 className="text-white text-4xl md:text-5xl xl:text-7xl uppercase font-semibold mb-3 xl:mb-5">
            Их таван нүдэн
          </h1>
          <p className="text-white/80 max-w-sm md:max-w-lg text-center">
            “Монгол Контент” ХХК-аас эрхлэн гаргадаг GoGo.mn сайт үйл
            ажиллагаагаа олон улсын стандартад нийцүүлэн ажиллаж буйг
            баталгаажуулах сертифекатыг хоёр дахь удаагаа авлаа.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
