import { Button } from "@/components/ui/button";
import Link from "next/link";

const DoYou = () => {
  return (
    <div className="bg-[#f7c51e] py-[50px] 2xl:px-0 px-4 md:px-9">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-9">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold md:w-full w-[60%]">
            Та бидэнтэй холбогдоорой !
          </h1>
          <Button
            asChild
            className="w-52 py-5 bg-transparent border-2 border-white rounded-none hover:bg-[#f7c51e] hover:border-[#f7c51e] transition-colors"
          >
            <Link href="/contact">Холбоо барих</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DoYou;
