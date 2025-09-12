const HomePage = () => {
  return (
    <section className="h-screen w-full bg-[url('/image/bg-hero-image.jpg')] relative bg-overlay bg-cover bg-center z-10">
      <div className="absolute left-1/2 bottom-[5%] z-30 -translate-x-1/2">
        <div className="flex flex-col items-center">
          <h2 className="text-white text-xl tracking-widest uppercase mb-5">
            Дээд зэргийн чанар
          </h2>
          <h1 className="text-white text-7xl uppercase font-semibold mb-5">
            Их таван нүдэн
          </h1>
          <p className="text-white/80 max-w-lg text-center">
            “Монгол Контент” ХХК-аас эрхлэн гаргадаг GoGo.mn сайт үйл
            ажиллагаагаа олон улсын стандартад нийцүүлэн ажиллаж буйг
            баталгаажуулах сертифекатыг хоёр дахь удаагаа авлаа.
          </p>
        </div>
      </div>
    </section>
  );
};
export default HomePage;
