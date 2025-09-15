"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="mt-2 xl:mt-6 2xl:mt-10 py-3 md:py-4 absolute inset-0 h-fit z-20 px-3 xl:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex justify-start items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className="cursor-pointer w-[50px] xl:w-[60px] h-[50px] xl:h-[60px] overflow-hidden"
            >
              <Image
                src="/image/logo.png"
                alt="Их таван нүдэн лого"
                priority
                width={300}
                height={300}
                className="w-[50px] xl:w-[60px] h-[50px] xl:h-[60px] object-center object-cover dark:invert"
              />
            </Link>
            <h1
              className={`${
                isHome ? "text-white" : "text-gray-700"
              } font-semibold uppercase text-base md:text-xl leading-5 md:leading-6 tracking-wider`}
            >
              Их таван <br /> нүдэн
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div
            className={`hidden xl:flex justify-end items-center gap-8 text-base ${
              isHome ? "text-white" : "text-black"
            }`}
          >
            <Link href="/" className="hover:text-[#f7c51e] transition-colors">
              Нүүр хуудас
            </Link>
            <Link
              href="/about"
              className="hover:text-[#f7c51e] transition-colors"
            >
              Бидний тухай
            </Link>
            <Link
              href="/project"
              className="hover:text-[#f7c51e] transition-colors"
            >
              Үйлчилгээ
            </Link>
            <Link
              href="/news"
              className="hover:text-[#f7c51e] transition-colors"
            >
              Мэдээлэл
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#f7c51e] transition-colors"
            >
              Холбоо барих
            </Link>
          </div>

          {/* Mobile Burger Menu */}
          <div className="xl:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu
                  className={`h-7 w-7 ${isHome ? "text-white" : "text-black"}`}
                />
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <SheetHeader>
                  <SheetTitle>Үндсэн цэс</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8 text-lg ml-4">
                  <Link
                    href="/"
                    className="hover:text-[#f7c51e] transition-colors"
                  >
                    Нүүр хуудас
                  </Link>
                  <Link
                    href="/about"
                    className="hover:text-[#f7c51e] transition-colors"
                  >
                    Бидний тухай
                  </Link>
                  <Link
                    href="/project"
                    className="hover:text-[#f7c51e] transition-colors"
                  >
                    Үйлчилгээ
                  </Link>
                  <Link
                    href="/news"
                    className="hover:text-[#f7c51e] transition-colors"
                  >
                    Мэдээлэл
                  </Link>
                  <Link
                    href="/contact"
                    className="hover:text-[#f7c51e] transition-colors"
                  >
                    Холбоо барих
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
