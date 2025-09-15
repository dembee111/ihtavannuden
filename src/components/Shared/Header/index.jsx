"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="mt-12 py-4 fixed inset-0 h-fit z-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex justify-start items-center gap-2">
            <Link
              href="/"
              className="cursor-pointer w-[60px] h-[60px] overflow-hidden"
            >
              <Image
                src="/image/logo.png"
                alt="Их таван нүдэн лого"
                priority
                width={300}
                height={300}
                className="w-[60px] h-[60px] object-center object-cover dark:invert"
              />
            </Link>
            <h1
              className={`${
                isHome ? " text-white" : "text-gray-700"
              } font-semibold uppercase text-xl leading-6 tracking-wider`}
            >
              Их таван <br /> нүдэн
            </h1>
          </div>

          {/* Navigation */}
          <div
            className={`flex justify-end items-center gap-8 text-base ${
              isHome ? "text-white" : "text-black"
            }`}
          >
            <Link
              href="/"
              prefetch
              className="hover:text-[#f7c51e] transition-colors"
            >
              Нүүр хуудас
            </Link>
            <Link
              href="/about"
              prefetch
              className="hover:text-[#f7c51e] transition-colors"
            >
              Бидний тухай
            </Link>
            <Link
              href="/project"
              prefetch
              className="hover:text-[#f7c51e] transition-colors"
            >
              Үйлчилгээ
            </Link>
            <Link
              href="/news"
              prefetch
              className="hover:text-[#f7c51e] transition-colors"
            >
              Мэдээлэл
            </Link>
            <Link
              href="/contact"
              prefetch
              className="hover:text-[#f7c51e] transition-colors"
            >
              Холбоо барих
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
