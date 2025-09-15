import Image from "next/image";

const Advant = () => {
  return (
    <section className="py-16 bg-[#262626] px-3 md:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-12 gap-x-0 md:gap-x-8 space-y-6 md:space-y-0">
          <div className="col-span-12 lg:col-span-4">
            <div className="grid grid-cols-12">
              <div className="col-span-12 xl:col-span-3">
                <Image
                  src="/image/icon-2.jpg"
                  alt="Их таван нүдэн лого"
                  width={60}
                  height={60}
                  className="w-[60px] h-[60px] object-center object-contain"
                />
              </div>
              <div className="col-span-12 xl:col-span-9">
                <div className="flex flex-col">
                  <h1 className="text-white text-lg font-semibold mb-1 md:mb-2">
                    Цэцэрлэгжүүлэлт
                  </h1>
                  <p className="text-white/80 leading-6 text-sm max-w-[18rem]">
                    Lorem ipsum gravida nibh vel velit auctor aliqunean
                    sollicitudinlor quisbibendum auci elit consequat ipsutis sem
                    nibh id elitsed vulputate.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <div className="grid grid-cols-12">
              <div className="col-span-12 xl:col-span-3">
                <Image
                  src="/image/icon-2.jpg"
                  alt="Их таван нүдэн лого"
                  width={60}
                  height={60}
                  className="w-[60px] h-[60px] object-center object-contain"
                />
              </div>
              <div className="col-span-12 xl:col-span-9">
                <div className="flex flex-col">
                  <h1 className="text-white text-lg font-semibold mb-1 md:mb-2">
                    Цэцэрлэгжүүлэлт
                  </h1>
                  <p className="text-white/80 leading-6 text-sm max-w-[18rem]">
                    Lorem ipsum gravida nibh vel velit auctor aliqunean
                    sollicitudinlor quisbibendum auci elit consequat ipsutis sem
                    nibh id elitsed vulputate.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <div className="grid grid-cols-12">
              <div className="col-span-12 xl:col-span-3">
                <Image
                  src="/image/icon-2.jpg"
                  alt="Их таван нүдэн лого"
                  width={60}
                  height={60}
                  className="w-[60px] h-[60px] object-center object-contain"
                />
              </div>
              <div className="col-span-12 xl:col-span-9">
                <div className="flex flex-col">
                  <h1 className="text-white text-lg font-semibold mb-1 md:mb-2">
                    Цэцэрлэгжүүлэлт
                  </h1>
                  <p className="text-white/80 leading-6 text-sm max-w-[18rem]">
                    Lorem ipsum gravida nibh vel velit auctor aliqunean
                    sollicitudinlor quisbibendum auci elit consequat ipsutis sem
                    nibh id elitsed vulputate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Advant;
