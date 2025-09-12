import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="mt-12 py-4 fixed inset-0 z-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Image
              src="/image/logo.jpg"
              alt="Их таван нүдэн лого"
              priority
              width={177}
              height={60}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="flex justify-end items-center gap-8 text-base">
            <Link
              href="/"
              prefetch
              className="text-white hover:text-[#f7c51e] transition-colors"
            >
              Нүүр хуудас
            </Link>
            <Link
              href="/about"
              prefetch
              className="text-white hover:text-[#f7c51e] transition-colors"
            >
              Бидний тухай
            </Link>
            <Link
              href="/service"
              prefetch
              className="text-white hover:text-[#f7c51e] transition-colors"
            >
              Үйлчилгээ
            </Link>
            <Link
              href="/news"
              prefetch
              className="text-white hover:text-[#f7c51e] transition-colors"
            >
              Мэдээлэл
            </Link>
            <Link
              href="/contact"
              prefetch
              className="text-white hover:text-[#f7c51e] transition-colors"
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
