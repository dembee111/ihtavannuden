import Link from "next/link";
import Image from "next/image";
import { FacebookIcon } from "@/components/Shared/Icons";

const Footer = () => {
  return (
    <>
      <footer className="my-0 py-16 bg-[#212121] w-full px-3 xl:px-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-12 gap-6 xl:gap-12">
            <div className="col-span-12 xl:col-span-4">
              <h2 className="text-white uppercase text-lg font-light before-shape ml-5">
                Бидний <strong className="font-semibold">тухай</strong>
              </h2>
              <div className="border-b border-white/80 py-2 mb-4"></div>
              <p className="text-white/80">
                "Их таван нүдэн" компани нь гадаад худалдаа, барилгын материалын
                худалдаа, цэцэрлэгжүүлэлт, интерьер болон ландшафт дизайны үйл
                ажиллагааг нэг дор амжилттай хослуулан, Монголд хамгийн чанартай
                үйлчилгээ үзүүлдэг тэргүүлэх компани юм.
              </p>
              <div className="mt-6">
                <h5 className="text-white">
                  Утас:{" "}
                  <span className="text-[#f7c51e] ml-2">
                    99113404, 99665235
                  </span>
                </h5>
              </div>
              <div className="mt-2">
                <h5 className="text-white">
                  Имэйл:{" "}
                  <span className="text-[#f7c51e] ml-2">
                    Ikhtavannuden@gmail.com
                  </span>
                </h5>
              </div>
            </div>
            <div className="col-span-12 xl:col-span-4">
              <h2 className="text-white uppercase text-lg font-light before-shape ml-5">
                Үндсэн <strong className="font-semibold">цэс</strong>
              </h2>
              <div className="border-b border-white/80 py-2 mb-4"></div>
              <div className="flex flex-col space-y-5">
                <Link
                  href="/"
                  prefetch
                  className="text-white font-normal hover:text-[#f7c51e] transition-colors"
                >
                  Нүүр хуудас
                </Link>
                <Link
                  href="/about"
                  prefetch
                  className="text-white font-normal hover:text-[#f7c51e] transition-colors"
                >
                  Бидний тухай
                </Link>
                <Link
                  href="/service"
                  prefetch
                  className="text-white font-normal hover:text-[#f7c51e] transition-colors"
                >
                  Үйлчилгээ
                </Link>
                <Link
                  href="/news"
                  prefetch
                  className="text-white font-normal hover:text-[#f7c51e] transition-colors"
                >
                  Мэдээлэл
                </Link>
                <Link
                  href="/contact"
                  prefetch
                  className="text-white font-normal hover:text-[#f7c51e] transition-colors"
                >
                  Холбоо барих
                </Link>
              </div>
            </div>
            <div className="col-span-12 xl:col-span-4 h-full">
              <h2 className="text-white uppercase text-lg font-light before-shape ml-5">
                Үйл <strong className="font-semibold">ажиллагаа</strong>
              </h2>
              <div className="border-b border-white/80 py-2 mb-4"></div>
              <div className="grid grid-cols-3 gap-4">
                <div className="w-[106px] h-[106px] overflow-hidden">
                  <Image
                    src="/image/porto-1.jpg"
                    alt="Их таван нүдэн лого"
                    priority
                    width={99}
                    height={99}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="w-[106px] h-[106px] overflow-hidden">
                  <Image
                    src="/image/garden.jpg"
                    alt="Цэцэрлэгжүүлэлт"
                    priority
                    width={99}
                    height={99}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="w-[106px] h-[106px] overflow-hidden">
                  <Image
                    src="/image/minning.jpg"
                    alt="Их таван нүдэн лого"
                    width={99}
                    height={99}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="w-[106px] h-[106px] overflow-hidden">
                  <Image
                    src="/image/trade.jpg"
                    alt="Гадаад худалдаа"
                    width={99}
                    height={99}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="w-[106px] h-[106px] overflow-hidden">
                  <Image
                    src="/image/tools.jpg"
                    alt="Барилгын материалын зураг"
                    width={99}
                    height={99}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg-[#262626] py-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-12 items-center space-y-6">
            <div className="col-span-12 xl:col-span-4 flex justify-center xl:justify-start">
              <Link
                href="https://gegeensoft.com"
                target="__blank"
                className="underline cursor-pointer text-white"
              >
                Developed by Gegeensoft.com
              </Link>
            </div>
            <div className="col-span-12 xl:col-span-4 flex justify-center">
              <Image
                src="/image/logo.jpg"
                alt="Их таван нүдэн лого"
                priority
                width={177}
                height={60}
                className="w-[177px] h-[60px] object-center object-cover"
              />
            </div>
            <Link
              href="https://www.facebook.com/profile.php?id=61579746330654&rdid=SBh1PslYrvKpFEDa&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16wAXELzzN%2F#"
              target="__blank"
              className="col-span-12 xl:col-span-4 flex justify-center xl:justify-end items-end"
            >
              <FacebookIcon className="size-8 fill-white" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
