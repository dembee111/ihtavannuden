"use client";
import { Parallax } from "react-parallax";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => (
  <Parallax bgImage="/image/about-header.jpg" strength={400}>
    <div className="relative yellow-overlay h-[450px] px-3 xl:px-0">
      <div className="max-w-6xl mx-auto h-full">
        <div className="grid grid-cols-12 gap-4 h-full items-center">
          <div className="col-span-12 xl:col-span-6 z-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col"
            >
              <h1 className="text-2xl xl:text-3xl font-semibold text-white mb-3">
                Бидэнтэй хамтран ажиллах
              </h1>
              <p className="text-white/80 mb-4 max-w-md xl:max-w-xl">
                "Их таван нүдэн" компани нь гадаад худалдаа, барилгын материалын
                худалдаа болон цэцэрлэгжүүлэлтийн төслүүдийг амжилттай
                хэрэгжүүлдэг. Хамтран ажилласнаар та чанартай, найдвартай
                шийдлийг цаг тухайд нь авах боломжтой.
              </p>
              <Button
                asChild
                className="w-40 xl:w-52 py-4 xl:py-5 bg-transparent text-white border-2 border-white rounded-none hover:bg-[#212121] hover:border-[#212121] transition-colors"
              >
                <Link href="/contact">Холбогдох</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </Parallax>
);
export default Banner;
