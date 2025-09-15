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
              <h5 className="mb-3 tracking-widest">SINCE 1993</h5>
              <h1 className="text-2xl xl:text-4xl font-semibold mb-4 tracking-wide">
                Our goal then and now is to provide quality on time projects.
              </h1>
              <p className="text-slate-600">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Intro;
