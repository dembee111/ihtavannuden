import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const BlogCard = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-start gap-3 xl:gap-4 mb-4 xl:mb-6">
        <div className="flex flex-col items-center">
          <h1 className="text-xl xl:text-2xl font-semibold">23</h1>
          <h1 className="uppercase text-xs xl:text-sm">august</h1>
          <h1 className="text-xs">2021</h1>
        </div>
        <div className="border-l border-gray-300"></div>
        <div>
          <h1 className="text-2xl xl:text-3xl font-semibold mb-2">
            Phasellus molestie feugiat hendrerit Interdum
          </h1>
          <h4 className="text-sm tracking-widest font-light">Мэндбаяр</h4>
        </div>
      </div>
      <div className="w-full xl:w-[515px] h-[193px] overflow-hidden mb-3 xl:mb-6">
        <Image
          src="/image/blog-1.webp"
          alt="Их таван нүдэн лого"
          width={570}
          height={214}
          className="w-full h-full object-center object-cover"
        />
      </div>
      <p className="text-sm text-gray-500 mb-3 xl:mb-6">
        Eget ullamcorper turpis. Donec condimentum pulvinar lorem, sit amet
        ultrices diam bibendum non. Suspendisse potenti. Integer dapibus ligula
        tortor. Nam metus diam, tempus non...
      </p>
      <Button
        asChild
        className="w-36 py-4 bg-[#f7c51e] border-2 text-white border-[#f7c51e] rounded-none hover:bg-[#212121] hover:text-white hover:border-[#212121] transition-colors"
      >
        <Link href="/work">Read more</Link>
      </Button>
    </div>
  );
};
export default BlogCard;
