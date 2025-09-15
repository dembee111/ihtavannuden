"use client";

import { Parallax } from "react-parallax";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Banner = () => (
  <Parallax bgImage="/image/about-header.jpg" strength={400}>
    <div style={{ height: 450 }} className="relative yellow-overlay">
      <div className="max-w-6xl mx-auto h-full">
        <div className="grid grid-cols-12 gap-4 h-full items-center">
          <div className="col-span-6 z-20">
            <div className="flex flex-col">
              <h1 className="text-3xl font-semibold text-white mb-3">
                Бидэнтэй хамтран ажиллах
              </h1>
              <p className="text-white/80 mb-4">
                "Claritas est etiam processus dynamicus, qui sequitur mutationem
                consuetudium lectorum. Mirum est notare quam littera gothica,
                quam nunc putamus parum claram, anteposuerit litterarum formas."
              </p>
              <Button
                asChild
                className="w-52 py-5 bg-transparent text-white border-2 border-white rounded-none hover:bg-[#212121] hover:border-[#212121] transition-colors"
              >
                <Link href="/contact">Холбогдох</Link>
              </Button>
            </div>
          </div>
          <div className="col-span-6"></div>
        </div>
      </div>
    </div>
  </Parallax>
);
export default Banner;
