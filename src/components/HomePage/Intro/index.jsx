import Image from "next/image";

const Intro = () => {
  return (
    <section className="py-12 xl:py-24 px-3 md:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 md:col-span-6">
            <div className="w-full xl:w-[515px] h-[316px] overflow-hidden">
              <Image
                src="/image/intro-1.jpg"
                alt="Их таван нүдэн лого"
                priority
                width={911}
                height={631}
                className="w-full h-full object-center object-contain"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="flex flex-col">
              <h5 className="mb-3 tracking-widest">SINCE 2018</h5>
              <h1 className="text-2xl xl:text-4xl font-semibold mb-4 tracking-wide">
                Бидний зорилго нь чанартай, найдвартай барилгын болон худалдааны
                төсөл, үйлчилгээ үзүүлэх явдал юм.
              </h1>
              <p className="text-slate-600">
                "Их таван нүдэн" компани 2018 онд байгуулагдсан бөгөөд гадаад
                худалдаа, барилгын материалын худалдаа, цэцэрлэгжүүлэлт зэрэг
                салбарт үйл ажиллагаа явуулж байна. Бид үйлчлүүлэгчдийн
                хэрэгцээ, стандарт, чанарыг тэргүүн ээлжинд тавьдаг мэргэжлийн
                багтай.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Intro;
