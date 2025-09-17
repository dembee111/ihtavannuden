import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { extractText } from "@/lib/utils";

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any) => {
      const plainText = node.content
        .map((child: any) => (child.nodeType === "text" ? child.value : ""))
        .join("");

      return <p className="text-sm ">{plainText.slice(0, 20)}</p>;
    },
  },
};

const BlogCard = ({ blog }: any) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="flex flex-col group">
      <div className="flex justify-start gap-3 xl:gap-4 mb-4 xl:mb-6">
        <div className="flex flex-col items-center">
          <h1 className="text-xl xl:text-2xl font-semibold">
            {new Date(blog?.sys?.createdAt).getDate()}
          </h1>
          <h1 className="uppercase text-xs xl:text-sm">
            {monthNames[new Date(blog?.sys?.createdAt).getMonth()]}
          </h1>
          <h1 className="text-xs">
            {new Date(blog?.sys?.createdAt).getFullYear()}
          </h1>
        </div>
        <div className="border-l border-gray-300"></div>
        <div>
          <h1 className="text-2xl xl:text-3xl font-semibold mb-2 group-hover:underline transition-opacity group-hover:text-blue-900">
            {blog?.fields?.title.slice(0, 41)}
          </h1>
          <h4 className="text-sm tracking-widest font-light">
            {blog?.fields?.written}
          </h4>
        </div>
      </div>
      <div className="w-full h-[193px] xl:h-[250px] overflow-hidden mb-3 xl:mb-6">
        <Image
          src={`https:${blog?.fields?.image?.fields?.file?.url}`}
          alt="Их таван компанийн мэдээлэл"
          width={570}
          height={214}
          className="w-full h-full object-center object-cover group-hover:scale-105 transition-all delay-150 duration-300 ease-in-out"
        />
      </div>
      <p className="text-sm text-gray-500 mb-3 xl:mb-6">
        {extractText(blog?.fields?.description, 30)}
      </p>
      <Button
        asChild
        className="w-36 py-4 bg-[#f7c51e] border-2 text-white border-[#f7c51e] rounded-none group-hover:bg-[#212121] group-hover:text-white group-hover:border-[#212121] hover:bg-[#212121] hover:text-white hover:border-[#212121] transition-colors"
      >
        <Link href={`/news/${blog?.fields?.slug}`}>Цааш унших</Link>
      </Button>
    </div>
  );
};
export default BlogCard;
