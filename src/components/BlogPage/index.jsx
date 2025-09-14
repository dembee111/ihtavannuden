import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BlogPage = () => {
  return (
    <div className="my-42 2xl:px-0 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-12 ">
          <div className="col-span-8">
            <div className="grid grid-cols-12">
              <div className="col-span-2">
                <div>
                  <h2>23</h2>
                  <p>August</p>
                  <p>2021</p>
                </div>
              </div>
              <div className="col-span-10">
                <h3 className="text-4xl leading-[1.25]">
                  Phasellus molestie feugiat hendrerit Interdum
                </h3>
                <p>by Daniel Zedda Tips</p>
              </div>
            </div>
            <div>
              <Image
                src={"/image/about/1.webp"}
                alt="images"
                width={515}
                height={344}
                className="w-full h-full object-center object-cover"
              />
              <p>
                Eget ullamcorper turpis. Donec condimentum pulvinar lorem, sit
                amet ultrices diam bibendum non. Suspendisse potenti. Integer
                dapibus ligula tortor. Nam metus diam, tempus non...
              </p>
              <Button
                asChild
                className="w-52 py-5  border-2 text-whtie bg-[#f7c51e] border-white rounded-none hover:bg-[#f7c51e] hover:border-[#f7c51e] "
              >
                <Link href="/contact">Дэлэгрэнгүй</Link>
              </Button>
            </div>
          </div>
          <div className="col-span-4"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
