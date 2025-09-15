import Zuraas from "@/components/Shared/Zuraas";
import { Button } from "@/components/ui/button";
import HoverCard from "@/components/Shared/HoverCard";
import Link from "next/link";

const Project = ({ bgColor = false }) => {
  console.log("🚀 ~ Project ~ bgColor:", bgColor);
  return (
    <section
      className={`${bgColor ? "bg-white py-24 my-16" : "bg-[#262626] py-24"}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-6">
            <h1
              className={`text-4xl ${
                bgColor ? "text-black" : "text-white"
              } font-semibold mb-4`}
            >
              Гүйцэтгэсэн төслүүд
            </h1>
            <Zuraas />
            <p
              className={`${
                bgColor ? "text-black" : "text-white/80"
              } text-sm mt-4`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              suscipit odio ante, id dapibus elit condimentum vitae. Maecenas
              eget orci vitae enim accumsan mollis.
            </p>
          </div>
          <div className="col-span-6 flex justify-end">
            <Button
              asChild
              className="w-52 py-5 bg-transparent border-2 border-white rounded-none hover:bg-[#f7c51e] hover:border-[#f7c51e] transition-colors"
            >
              <Link href="/work">Бүгдийг үзэх</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-start items-center gap-4 mt-6">
          <div
            className={`${
              bgColor ? "text-black" : "text-white"
            } text-sm  border border-[#f7c51e] py-1 px-2`}
          >
            Бүгд
          </div>
          <div
            className={`${
              bgColor ? "text-black" : "text-white"
            } text-sm py-1 px-2`}
          >
            Цэцэрлэгжүүлэлт
          </div>
          <div
            className={`${
              bgColor ? "text-black" : "text-white"
            } text-sm py-1 px-2`}
          >
            Барилгын материалын худалдаа
          </div>
          <div
            className={`${
              bgColor ? "text-black" : "text-white"
            } text-sm py-1 px-2`}
          >
            Гадаад худалдаа
          </div>
        </div>
        <div className="grid grid-cols-12 mt-8 gap-4">
          <div className="col-span-4">
            <HoverCard />
          </div>
          <div className="col-span-4">
            <HoverCard />
          </div>
          <div className="col-span-4">
            <HoverCard />
          </div>
          <div className="col-span-4">
            <HoverCard />
          </div>
          <div className="col-span-4">
            <HoverCard />
          </div>
          <div className="col-span-4">
            <HoverCard />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Project;
