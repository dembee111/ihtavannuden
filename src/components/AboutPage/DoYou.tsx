import { Button } from "@/components/ui/button";
import Link from "next/link";

const DoYou = () => {
  return (
    <div className="bg-[#f7c51e] py-[50px] ">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-4xl font-bold">
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
